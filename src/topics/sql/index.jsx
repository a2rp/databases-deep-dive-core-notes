// src/topics/sql/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiDatabase,
    FiGrid,
    FiKey,
    FiPlay,
    FiSearch,
    FiLayers,
    FiShield,
    FiCpu,
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";

/*
  SQL - single expand/collapse card
  - default collapsed
  - beginner friendly
  - explains terms properly
  - includes practical examples
  - uses <pre> blocks for code and notes
*/

const Sql = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsSql",
                icon: <FiDatabase />,
                title: "What is SQL and why it exists",
                points: [
                    "SQL means Structured Query Language.",
                    "SQL is used to store and query data in relational databases (RDBMS).",
                    "Relational databases store data in tables with rows and columns.",
                    "SQL is declarative - you tell what you want, the database decides how to get it.",
                ],
                exampleTitle: "Example - read data",
                example: `SELECT * FROM users;
SELECT name, email FROM users WHERE is_active = TRUE;`,
                notes: [
                    "RDBMS common examples - PostgreSQL, MySQL, SQL Server, Oracle.",
                    "SQL is great when you need relationships, constraints, and strong consistency.",
                ],
            },
            {
                id: "coreTerms",
                icon: <FiGrid />,
                title: "Core terms you must know",
                points: [
                    "Table - a set of rows (like a spreadsheet) for one entity, like users or orders.",
                    "Row - one record inside a table.",
                    "Column - one field inside a row, like name or created_at.",
                    "Schema - structure definition of tables, columns, and constraints.",
                ],
                exampleTitle: "Example - users table",
                example: `CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,
                notes: [
                    "PRIMARY KEY means unique identifier for each row.",
                    "UNIQUE means no duplicate values allowed in that column.",
                    "NOT NULL means value is required.",
                ],
            },
            {
                id: "keys",
                icon: <FiKey />,
                title: "Primary key and foreign key (relationships)",
                points: [
                    "Primary key (PK) uniquely identifies a row in a table.",
                    "Foreign key (FK) is a column that points to a primary key in another table.",
                    "Foreign keys enforce referential integrity - no broken references.",
                ],
                exampleTitle: "Example - orders referencing users",
                example: `CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  total NUMERIC(12,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);`,
                notes: [
                    "REFERENCES users(id) means user_id must exist in users table.",
                    "This is how relational data stays clean over time.",
                ],
            },
            {
                id: "crud",
                icon: <FiPlay />,
                title: "CRUD basics - create, read, update, delete",
                points: [
                    "CRUD is the core set of operations for most apps.",
                    "Create - INSERT",
                    "Read - SELECT",
                    "Update - UPDATE",
                    "Delete - DELETE",
                ],
                exampleTitle: "Examples - CRUD",
                example: `-- Create
INSERT INTO users (name, email) VALUES ('Ashish', 'ashish@example.com');

-- Read
SELECT id, name, email FROM users WHERE email = 'ashish@example.com';

-- Update
UPDATE users SET is_active = FALSE WHERE id = 10;

-- Delete
DELETE FROM users WHERE id = 10;`,
                notes: [
                    "In production, hard delete is often avoided. Use soft delete like deleted_at.",
                ],
            },
            {
                id: "queryOrder",
                icon: <FiLayers />,
                title: "Query structure and execution mental model",
                points: [
                    "A SELECT query usually has these parts - SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.",
                    "WHERE filters rows before grouping.",
                    "GROUP BY groups rows.",
                    "HAVING filters groups after grouping.",
                    "ORDER BY sorts results.",
                    "LIMIT restricts number of rows returned.",
                ],
                exampleTitle: "Example - grouped report",
                example: `SELECT
  status,
  COUNT(*) AS orders_count,
  SUM(total) AS revenue
FROM orders
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY status
HAVING SUM(total) > 1000
ORDER BY revenue DESC
LIMIT 10;`,
                notes: [
                    "WHERE is row level filter, HAVING is group level filter.",
                ],
            },
            {
                id: "acid",
                icon: <FiShield />,
                title: "ACID (transaction guarantees)",
                points: [
                    "ACID is a set of guarantees for transactions.",
                    "A - Atomicity - all operations succeed or none do.",
                    "C - Consistency - constraints remain valid after transaction.",
                    "I - Isolation - concurrent transactions do not break each other.",
                    "D - Durability - committed data survives crashes.",
                ],
                exampleTitle: "Example - money transfer transaction",
                example: `BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;`,
                notes: [
                    "If something fails, you do ROLLBACK so partial changes are not saved.",
                ],
            },
            {
                id: "indexes",
                icon: <FiSearch />,
                title: "Indexes in SQL (when and why)",
                points: [
                    "Indexes speed up reads by avoiding full table scans.",
                    "Indexes can support filtering and sorting.",
                    "Too many indexes slow down INSERT and UPDATE.",
                ],
                exampleTitle: "Example - indexes for common queries",
                example: `-- Search by email
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- List orders per user, newest first
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,
                notes: [
                    "Index choice must match query patterns - filter and sort fields.",
                ],
            },
            {
                id: "explain",
                icon: <FiCpu />,
                title: "How to verify performance (EXPLAIN)",
                points: [
                    "Do not guess performance. Use EXPLAIN to see the plan.",
                    "Look for - index scan vs sequential scan.",
                    "If you see sequential scan on a huge table, index might be missing or not usable.",
                ],
                exampleTitle: "Example - Postgres EXPLAIN",
                example: `EXPLAIN ANALYZE
SELECT id, total, created_at
FROM orders
WHERE user_id = 10
ORDER BY created_at DESC
LIMIT 20;`,
                notes: [
                    "EXPLAIN ANALYZE actually runs the query and gives real timing.",
                ],
                warningTitle: "Common beginner mistake",
                warning: `- Selecting too many columns (SELECT *) for list pages
- Deep pagination using OFFSET on huge tables
- Missing indexes for filter + sort`,
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "sql") return;
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
                            <FiDatabase />
                        </div>

                        <div className="meta">
                            <div className="title">SQL</div>
                            <div className="subtitle">
                                Tables, keys, CRUD, query structure, ACID,
                                indexes, explain
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
                                SQL is the language of relational truth. It
                                shines when data has relationships, constraints,
                                and transactions. Learn the mental model and you
                                can debug slow queries and messy schemas like a
                                pro.
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

export default Sql;
