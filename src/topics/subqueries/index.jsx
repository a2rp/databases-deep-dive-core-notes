// src/topics/subqueries/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiSearch,
    FiTarget,
    FiCornerDownRight,
    FiRepeat,
    FiCpu,
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";

/*
  Subqueries - single expand/collapse card
  - default collapsed
  - beginner friendly
  - covers scalar, correlated, EXISTS, IN, NOT EXISTS
  - includes performance notes and join vs subquery thinking
*/

const Subqueries = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsSubquery",
                icon: <FiLayers />,
                title: "What is a subquery (simple mental model)",
                points: [
                    "A subquery is a query inside another query.",
                    "The inner query produces a value or a set of rows used by the outer query.",
                    "Subqueries help when you need intermediate results without creating temporary tables.",
                ],
                exampleTitle: "Basic shape",
                example: `SELECT *
FROM orders
WHERE user_id IN (
  SELECT id FROM users WHERE is_active = TRUE
);`,
                notes: [
                    "Subqueries can return one value (scalar) or many values (list or table).",
                ],
            },
            {
                id: "types",
                icon: <FiTarget />,
                title: "Types of subqueries you will see",
                points: [
                    "Scalar subquery - returns a single value.",
                    "List subquery - returns one column with multiple values (used with IN).",
                    "Table subquery - returns a result set used like a table (derived table).",
                    "Correlated subquery - inner query depends on outer query row.",
                ],
                exampleTitle: "Table subquery (derived table)",
                example: `SELECT t.user_id, t.revenue
FROM (
  SELECT user_id, SUM(total) AS revenue
  FROM orders
  WHERE status = 'PAID'
  GROUP BY user_id
) t
WHERE t.revenue > 1000
ORDER BY t.revenue DESC;`,
                notes: [
                    "Derived tables are often clearer than deeply nested WHERE subqueries.",
                ],
            },
            {
                id: "scalar",
                icon: <FiCornerDownRight />,
                title: "Scalar subquery - one value",
                points: [
                    "Scalar subquery returns exactly one value (one row, one column).",
                    "It is used like a constant inside SELECT or WHERE.",
                    "If it returns more than one row, the query fails.",
                ],
                exampleTitle: "Example - compare with average order value",
                example: `SELECT id, user_id, total
FROM orders
WHERE total > (
  SELECT AVG(total) FROM orders WHERE status = 'PAID'
);`,
                notes: [
                    "This reads like English - orders above the average paid order value.",
                ],
            },
            {
                id: "inSubquery",
                icon: <FiSearch />,
                title: "IN subquery - filter by a list",
                points: [
                    "IN is used when the subquery returns a list of values.",
                    "Good for - users who purchased something, products that appear in orders.",
                    "For large lists, EXISTS can be faster in many databases.",
                ],
                exampleTitle:
                    "Example - users who placed at least one paid order",
                example: `SELECT id, name
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
  WHERE status = 'PAID'
);`,
                notes: [
                    "If orders.user_id is indexed, this can be decent. But EXISTS is often preferred.",
                ],
            },
            {
                id: "exists",
                icon: <FiRepeat />,
                title: "EXISTS - check presence (very common in production)",
                points: [
                    "EXISTS returns true if the subquery finds at least one matching row.",
                    "Database can stop searching early when it finds a match.",
                    "Great for presence checks - does a row exist for this parent row.",
                ],
                exampleTitle: "Example - users who have paid orders (EXISTS)",
                example: `SELECT u.id, u.name
FROM users u
WHERE EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.user_id = u.id
    AND o.status = 'PAID'
);`,
                notes: [
                    "SELECT 1 is a convention - we only care if a row exists, not the columns.",
                ],
                extraTitle: "NOT EXISTS - users with no orders",
                extra: `SELECT u.id, u.name
FROM users u
WHERE NOT EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.user_id = u.id
);`,
            },
            {
                id: "correlated",
                icon: <FiCornerDownRight />,
                title: "Correlated subquery (inner query depends on outer row)",
                points: [
                    "Correlated subquery references columns from the outer query.",
                    "It runs logically per row, but databases may optimize it internally.",
                    "Great for - per user metrics, latest record per group patterns.",
                ],
                exampleTitle: "Example - each user and their last order date",
                example: `SELECT
  u.id,
  u.name,
  (
    SELECT MAX(o.created_at)
    FROM orders o
    WHERE o.user_id = u.id
  ) AS last_order_at
FROM users u;`,
                notes: [
                    "This is a classic use case - a scalar correlated subquery in SELECT.",
                ],
            },
            {
                id: "joinVsSubquery",
                icon: <FiLayers />,
                title: "Subquery vs join (how to choose)",
                points: [
                    "Use JOIN when you need columns from the related table in result rows.",
                    "Use EXISTS when you only need a yes or no - does a matching row exist.",
                    "Use derived table when you need aggregation first, then filter that result.",
                    "Readability matters - prefer the clearest query for your team.",
                ],
                exampleTitle: "Same problem - users with paid orders",
                example: `-- Option A - EXISTS
SELECT u.id, u.name
FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.user_id = u.id AND o.status = 'PAID'
);

-- Option B - JOIN + DISTINCT
SELECT DISTINCT u.id, u.name
FROM users u
JOIN orders o ON o.user_id = u.id
WHERE o.status = 'PAID';`,
                notes: [
                    "EXISTS avoids duplicates naturally. JOIN may require DISTINCT.",
                ],
            },
            {
                id: "performance",
                icon: <FiCpu />,
                title: "Performance and indexing rules",
                points: [
                    "Index the columns used in subquery filters - like orders.user_id and orders.status.",
                    "EXISTS can be faster because it can stop at first match.",
                    "Avoid subqueries that return huge lists for IN on large datasets.",
                    "Use EXPLAIN to see the plan - never guess.",
                ],
                exampleTitle: "Indexes that matter",
                example: `-- Common helpful indexes
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status_user ON orders(status, user_id);

-- For latest order per user patterns
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,
                notes: [
                    "If queries feel slow, check whether your subquery is forcing full scans.",
                ],
                warningTitle: "Beginner traps",
                warning: `- Using IN with a subquery returning millions of rows
- Forgetting indexes on foreign key columns
- Writing correlated subqueries without supporting indexes`,
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "subqueries") return;
            setOpen(true);
        };

        window.addEventListener("a2rp:open-topic", onOpen);
        return () => window.removeEventListener("a2rp:open-topic", onOpen);
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.CardHeader
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpen((v) => !v)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                            setOpen((v) => !v);
                    }}
                    aria-expanded={open}
                >
                    <div className="left">
                        <div className="icon">
                            <FiLayers />
                        </div>

                        <div className="meta">
                            <div className="title">Subqueries</div>
                            <div className="subtitle">
                                Scalar, IN, EXISTS, correlated subqueries with
                                real patterns
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="chip">
                            <FiCheckCircle />
                            <span>Beginner friendly</span>
                        </div>

                        <div className="toggleIcon">
                            {open ? <FiChevronUp /> : <FiChevronDown />}
                        </div>
                    </div>
                </Styled.CardHeader>

                {open && (
                    <Styled.Body>
                        <Styled.Intro>
                            <div className="icon">
                                <FiAlertTriangle />
                            </div>
                            <div className="text">
                                Subqueries are like mini-queries that feed into
                                a bigger query. Learn EXISTS and correlated
                                subqueries and you can express many real
                                production filters and reports cleanly.
                            </div>
                        </Styled.Intro>

                        <Styled.SectionGrid>
                            {sections.map((s) => (
                                <Styled.Section key={s.id}>
                                    <div className="secHead">
                                        <div className="secIcon">{s.icon}</div>
                                        <div className="secTitle">
                                            {s.title}
                                        </div>
                                    </div>

                                    <ul className="points">
                                        {s.points.map((p, idx) => (
                                            <li key={`${s.id}-p-${idx}`}>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>

                                    {s.exampleTitle && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                {s.exampleTitle}
                                            </div>
                                            <pre className="code">
                                                {s.example}
                                            </pre>
                                        </div>
                                    )}

                                    {s.extraTitle && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                {s.extraTitle}
                                            </div>
                                            <pre className="code">
                                                {s.extra}
                                            </pre>
                                        </div>
                                    )}

                                    {s.warningTitle && (
                                        <div className="warn">
                                            <div className="warnTitle">
                                                {s.warningTitle}
                                            </div>
                                            <pre className="code">
                                                {s.warning}
                                            </pre>
                                        </div>
                                    )}

                                    {s.notes?.length ? (
                                        <div className="notes">
                                            <div className="notesTitle">
                                                Notes
                                            </div>
                                            <ul>
                                                {s.notes.map((n, idx) => (
                                                    <li
                                                        key={`${s.id}-n-${idx}`}
                                                    >
                                                        {n}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                </Styled.Section>
                            ))}
                        </Styled.SectionGrid>
                    </Styled.Body>
                )}
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default Subqueries;
