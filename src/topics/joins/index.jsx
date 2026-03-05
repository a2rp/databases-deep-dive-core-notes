// src/topics/joins/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLink,
    FiLayers,
    FiArrowRight,
    FiGitMerge,
    FiSearch,
    FiCpu,
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";

/*
  Joins - single expand/collapse card
  - default collapsed
  - beginner friendly
  - explains INNER, LEFT, RIGHT, FULL
  - includes practical examples and performance notes
*/

const Joins = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsJoin",
                icon: <FiLink />,
                title: "What is a join (simple mental model)",
                points: [
                    "A join combines rows from two (or more) tables using a related column.",
                    "Most common join key is a foreign key - like orders.user_id referencing users.id.",
                    "Joins let you fetch related data in one query instead of multiple queries.",
                ],
                exampleTitle: "Example - tables",
                example: `-- users
-- id | name  | email
-- 1  | Ashish| ashish@example.com
-- 2  | Neha  | neha@example.com

-- orders
-- id | user_id | total
-- 10 | 1       | 1397
-- 11 | 1       | 499
-- 12 | 2       | 999`,
                notes: [
                    "If you want order info plus user name, you join orders with users.",
                ],
            },
            {
                id: "innerJoin",
                icon: <FiGitMerge />,
                title: "INNER JOIN - only matching rows",
                points: [
                    "INNER JOIN returns rows where the join condition matches on both sides.",
                    "If a user has no orders, that user will not appear in INNER JOIN result.",
                    "This is the most commonly used join type.",
                ],
                exampleTitle: "Example - orders with user name",
                example: `SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM orders o
INNER JOIN users u ON u.id = o.user_id;`,
                notes: [
                    "If there is no matching user for an order.user_id, that order is excluded.",
                ],
            },
            {
                id: "leftJoin",
                icon: <FiArrowRight />,
                title: "LEFT JOIN - keep all left rows",
                points: [
                    "LEFT JOIN returns all rows from the left table, plus matching rows from the right table.",
                    "If there is no match on the right side, right side columns become NULL.",
                    "Use LEFT JOIN when you want all rows from the main table even if related data is missing.",
                ],
                exampleTitle:
                    "Example - list all users and their orders (if any)",
                example: `SELECT
  u.id,
  u.name,
  o.id AS order_id,
  o.total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
ORDER BY u.id;`,
                notes: [
                    "Users without orders still appear, with order_id = NULL.",
                ],
                extraTitle: "Common pattern - find users with no orders",
                extra: `SELECT u.id, u.name
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.id IS NULL;`,
            },
            {
                id: "rightJoin",
                icon: <FiArrowRight />,
                title: "RIGHT JOIN - keep all right rows",
                points: [
                    "RIGHT JOIN is like LEFT JOIN but reversed - keeps all rows from the right table.",
                    "Many teams avoid RIGHT JOIN to keep queries consistent - use LEFT JOIN by swapping tables.",
                    "Still useful to know because you will see it in old code sometimes.",
                ],
                exampleTitle:
                    "Example - keep all orders even if user is missing",
                example: `SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM users u
RIGHT JOIN orders o ON o.user_id = u.id;`,
                notes: ["Same query using LEFT JOIN style"],
                extraTitle: "Equivalent using LEFT JOIN (preferred style)",
                extra: `SELECT
  o.id AS order_id,
  u.name AS user_name,
  o.total
FROM orders o
LEFT JOIN users u ON u.id = o.user_id;`,
            },
            {
                id: "fullJoin",
                icon: <FiLayers />,
                title: "FULL JOIN - keep all rows from both sides",
                points: [
                    "FULL JOIN returns all rows from both tables.",
                    "If no match, missing side becomes NULL.",
                    "Not supported in some databases (example - MySQL historically). Postgres supports it.",
                ],
                exampleTitle:
                    "Example - show all users and all orders, matched when possible",
                example: `SELECT
  u.id AS user_id,
  u.name,
  o.id AS order_id,
  o.total
FROM users u
FULL JOIN orders o ON o.user_id = u.id;`,
                notes: [
                    "Useful for data audits - finding mismatches on either side.",
                ],
            },
            {
                id: "joinCondition",
                icon: <FiSearch />,
                title: "Join conditions and filtering (important detail)",
                points: [
                    "Join condition usually goes in ON clause.",
                    "Row filtering usually goes in WHERE clause.",
                    "If you filter the right table in WHERE after a LEFT JOIN, you might accidentally turn it into an INNER JOIN behavior.",
                ],
                exampleTitle:
                    "Common mistake - filtering in WHERE after LEFT JOIN",
                example: `-- This removes users with no orders because o.total becomes NULL
SELECT u.id, u.name, o.total
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.total > 500;`,
                notes: [
                    "Because NULL > 500 is not true, those rows disappear.",
                ],
                extraTitle:
                    "Correct approach - filter inside ON to keep LEFT behavior",
                extra: `SELECT u.id, u.name, o.total
FROM users u
LEFT JOIN orders o
  ON o.user_id = u.id
 AND o.total > 500;`,
            },
            {
                id: "performance",
                icon: <FiCpu />,
                title: "Join performance (practical rules)",
                points: [
                    "Indexes on join keys matter a lot - users.id is primary key, orders.user_id should be indexed.",
                    "Joining huge tables without indexes can be extremely slow.",
                    "Select only needed columns. Avoid SELECT * for joined queries.",
                    "Filter early - reduce rows before join when possible.",
                ],
                exampleTitle: "Index example",
                example: `-- orders.user_id should be indexed for fast joins
CREATE INDEX idx_orders_user_id ON orders(user_id);`,
                notes: [
                    "For frequent query - orders by user ordered by created_at - use a compound index",
                ],
                extraTitle: "Compound index for common pattern",
                extra: `CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,
                warningTitle: "Beginner trap",
                warning: `- Joining on non-indexed columns
- Returning too many columns
- Joining first and filtering later`,
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "joins") return;
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
                            <FiLink />
                        </div>

                        <div className="meta">
                            <div className="title">Joins</div>
                            <div className="subtitle">
                                INNER, LEFT, RIGHT, FULL joins with examples and
                                performance habits
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="chip">
                            <FiCheckCircle />
                            <span>At a glance</span>
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
                                Joins are how SQL connects reality. They are
                                powerful, but can get slow if you join huge
                                tables without indexes. Learn the join types and
                                the ON vs WHERE trick and you avoid most
                                beginner mistakes.
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

export default Joins;
