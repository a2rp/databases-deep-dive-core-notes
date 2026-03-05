// src/topics/indexes/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiSearch,
    FiLayers,
    FiKey,
    FiBarChart2,
    FiActivity,
    FiCpu,
    FiAlertTriangle,
    FiCheckCircle,
    FiDatabase,
} from "react-icons/fi";

/*
  Indexes (SQL focused but includes Mongo parallels)
  - single expand/collapse card
  - default collapsed
  - beginner friendly
  - covers clustered vs non-clustered, B-Tree, composite, covering, selectivity
  - includes practical examples and EXPLAIN habits
*/

const Indexes = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsIndex",
                icon: <FiSearch />,
                title: "What is an index (simple mental model)",
                points: [
                    "An index is a data structure that helps the database find rows faster.",
                    "Without index, database may do a full scan (sequential scan).",
                    "With index, database can do an index scan and jump closer to matching rows.",
                ],
                exampleTitle: "Everyday analogy",
                example: `- Table is a book
- Full scan is reading every page to find a word
- Index is the index page at the back of the book`,
                notes: [
                    "Indexes speed up reads, but add storage and slow down writes.",
                ],
            },
            {
                id: "btree",
                icon: <FiLayers />,
                title: "B-Tree (most common index structure)",
                points: [
                    "B-Tree is a balanced tree used by many databases for indexes.",
                    "Balanced means the tree height is small even for huge datasets.",
                    "This makes lookups fast for equality and range queries.",
                ],
                exampleTitle: "What B-Tree is good at",
                example: `- WHERE email = 'x' (equality)
- WHERE created_at >= ... AND created_at < ... (range)
- ORDER BY created_at (sorted access)`,
                notes: [
                    "You do not need to build the tree in your head - just remember it supports range queries well.",
                ],
            },
            {
                id: "clustered",
                icon: <FiDatabase />,
                title: "Clustered vs non-clustered index (core concept)",
                points: [
                    "Clustered index means the table data is physically ordered by that index key.",
                    "Non-clustered index is a separate structure that points to table rows.",
                    "Many databases have different rules here (example - InnoDB vs Postgres).",
                ],
                exampleTitle: "Practical meaning",
                example: `- Clustered index (concept)
  Rows are stored in the same order as the primary key
  Range scans on that key become very fast

- Non-clustered index (concept)
  Index stores key -> pointer to row
  Database uses pointer to fetch row after finding key`,
                notes: [
                    "In many systems, primary key acts as the main clustered storage key.",
                    "Even if the exact term differs across DBs, the idea helps performance reasoning.",
                ],
            },
            {
                id: "primarySecondary",
                icon: <FiKey />,
                title: "Primary vs secondary indexes",
                points: [
                    "Primary index is often tied to primary key and uniqueness.",
                    "Secondary indexes are additional indexes created for query patterns.",
                    "Secondary indexes are optional but crucial for performance.",
                ],
                exampleTitle: "Example - users",
                example: `-- Primary key (usually indexed automatically)
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL
);

-- Secondary index for common query
CREATE INDEX idx_users_name ON users(name);`,
                notes: [
                    "Unique constraint usually creates an index behind the scenes.",
                ],
            },
            {
                id: "composite",
                icon: <FiBarChart2 />,
                title: "Composite index (multiple columns) and order matters",
                points: [
                    "Composite index means index on (colA, colB, colC).",
                    "Order matters because the index is sorted by colA first, then colB, then colC.",
                    "Leftmost prefix rule - query can use the beginning of the index.",
                ],
                exampleTitle: "Example - orders listing per user",
                example: `-- Common query
-- WHERE user_id = 10 ORDER BY created_at DESC LIMIT 20

CREATE INDEX idx_orders_user_created
ON orders(user_id, created_at DESC);`,
                notes: [
                    "This index supports filter + sort together, which is a huge win.",
                ],
                extraTitle: "Leftmost prefix idea",
                extra: `-- Index on (user_id, created_at)
-- Uses index:
WHERE user_id = 10

-- Uses index:
WHERE user_id = 10 AND created_at >= NOW() - INTERVAL '7 days'

-- Usually not ideal:
WHERE created_at >= NOW() - INTERVAL '7 days'`,
            },
            {
                id: "covering",
                icon: <FiCheckCircle />,
                title: "Covering index (answer using only the index)",
                points: [
                    "A covering index lets the database serve the query using only the index pages.",
                    "This avoids extra table lookups and reduces random I/O.",
                    "Best for list endpoints that show limited fields.",
                ],
                exampleTitle: "Example - list newest orders per user",
                example: `-- Query shows only a few columns
SELECT id, total, created_at
FROM orders
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;

-- Index helps a lot
CREATE INDEX idx_orders_user_created
ON orders(user_id, created_at DESC);`,
                notes: [
                    "Some databases support INCLUDE columns for covering indexes (Postgres).",
                ],
                extraTitle: "Postgres INCLUDE example (cover more columns)",
                extra: `CREATE INDEX idx_orders_user_created_cover
ON orders(user_id, created_at DESC)
INCLUDE (total);`,
            },
            {
                id: "selectivity",
                icon: <FiActivity />,
                title: "Selectivity (why some indexes do not help)",
                points: [
                    "Selectivity means how well the index narrows results.",
                    "High selectivity - email, phone, user_id (many unique values).",
                    "Low selectivity - boolean flags like is_active, is_deleted.",
                ],
                exampleTitle: "Example - low selectivity",
                example: `-- If 95% rows are is_active = TRUE
-- this index may not be useful alone
CREATE INDEX idx_users_is_active ON users(is_active);

-- Better - combine it with another filter or sort field
CREATE INDEX idx_users_active_created
ON users(is_active, created_at DESC);`,
                notes: [
                    "Indexes that match real filters and sorts tend to win.",
                ],
            },
            {
                id: "writeCost",
                icon: <FiCpu />,
                title: "Write cost and maintenance (the hidden price)",
                points: [
                    "Every INSERT needs to update all indexes.",
                    "Every UPDATE of an indexed column updates the index too.",
                    "Too many indexes can kill write throughput and increase storage.",
                ],
                exampleTitle: "Rule of thumb",
                example: `- Add indexes only for real query patterns
- Remove unused indexes
- Prefer 2 to 6 strong indexes over 20 weak indexes`,
                notes: [
                    "In production, measure using slow query logs and query stats, then decide.",
                ],
                warningTitle: "Beginner trap",
                warning: `- Indexing every column
- Keeping old indexes after query patterns changed
- Building indexes without checking EXPLAIN`,
            },
            {
                id: "verify",
                icon: <FiSearch />,
                title: "How to verify - EXPLAIN and plans",
                points: [
                    "Use EXPLAIN to see if the database uses your index.",
                    "Look for sequential scan vs index scan.",
                    "Use EXPLAIN ANALYZE to get real timings (Postgres).",
                ],
                exampleTitle: "Example - Postgres",
                example: `EXPLAIN ANALYZE
SELECT id, total, created_at
FROM orders
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;`,
                notes: [
                    "If you still see sequential scan on a big table, index is missing or not usable.",
                ],
                extraTitle: "Mongo parallel (for your repo scope)",
                extra: `// MongoDB explain
db.orders.explain("executionStats").find({
  userId: ObjectId("..."),
  status: "PAID"
}).sort({ createdAt: -1 }).limit(20)`,
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "indexes") return;
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
                            <FiSearch />
                        </div>

                        <div className="meta">
                            <div className="title">Indexes</div>
                            <div className="subtitle">
                                B-Tree basics, clustered vs non-clustered,
                                composite, covering, EXPLAIN
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="chip">
                            <FiCheckCircle />
                            <span>Production focused</span>
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
                                Indexes are the difference between instant
                                queries and painful scans. The trick is matching
                                indexes to real query patterns and verifying
                                with EXPLAIN instead of guessing.
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

export default Indexes;
