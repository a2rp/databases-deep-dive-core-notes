// src/topics/indexStrategy/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiSearch,
    FiBookOpen,
    FiTarget,
    FiLayers,
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
    FiCpu,
    FiDatabase,
} from "react-icons/fi";

/*
  Index Strategy - single expand/collapse card
  - beginner friendly
  - lots of examples
  - uses <pre> for code style notes
*/

const IndexStrategy = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsIndex",
                icon: <FiBookOpen />,
                title: "What is an index (simple mental model)",
                points: [
                    "An index is like a book index - it helps you find pages without scanning the whole book.",
                    "Without an index, the database does a full scan - it checks every document or row.",
                    "With an index, the database can jump closer to matching data quickly.",
                ],
                exampleTitle: "Example - full scan vs index scan idea",
                example: `// Query
db.users.find({ email: "ashish@example.com" })

// Without index
// - MongoDB checks many users until it finds the match

// With index on email
// - MongoDB jumps directly to the matching record`,
                notes: [
                    "Indexes speed up reads, but they add cost to writes.",
                    "Every insert and update may need to update indexes too.",
                ],
            },
            {
                id: "bTreeBasics",
                icon: <FiLayers />,
                title: "B-Tree basics (why indexes are fast)",
                points: [
                    "Most database indexes are B-Tree based (balanced tree).",
                    "Balanced means the tree height is small, so lookup steps are limited.",
                    "That is why index lookups feel fast even with millions of rows.",
                ],
                exampleTitle: "Simple idea - search steps",
                example: `// Rough idea (not exact numbers)
// 1,000,000 documents
// Full scan - 1,000,000 checks worst case
// B-Tree - maybe around 20 to 30 comparisons`,
                notes: [
                    "You do not need to memorize tree structure - just remember 'logarithmic search'.",
                ],
            },
            {
                id: "chooseFields",
                icon: <FiTarget />,
                title: "Choosing index fields (what to index)",
                points: [
                    "Index fields used in filters - like status, userId, createdAt, email.",
                    "Index fields used in sorting - like createdAt desc, total desc.",
                    "Index fields used in joins - foreign keys in SQL, referenced fields in MongoDB.",
                ],
                exampleTitle: "Example - common production indexes",
                example: `// MongoDB examples
db.users.createIndex({ email: 1 }, { unique: true })
db.orders.createIndex({ userId: 1, createdAt: -1 })
db.orders.createIndex({ status: 1, createdAt: -1 })

// SQL examples (concept)
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);`,
                notes: [
                    "If you search by email, index email.",
                    "If you list recent orders per user, compound index (userId, createdAt) helps.",
                ],
            },
            {
                id: "compound",
                icon: <FiDatabase />,
                title: "Compound indexes (order matters)",
                points: [
                    "Compound index means multiple fields in one index.",
                    "Order matters because the index is sorted by the fields in order.",
                    "The leftmost prefix rule - queries can use the beginning of the index.",
                ],
                exampleTitle: "Example - leftmost prefix rule",
                example: `// Index
db.orders.createIndex({ userId: 1, createdAt: -1 })

// Uses index - filter by userId
db.orders.find({ userId: ObjectId("...") })

// Uses index - filter by userId + sort by createdAt
db.orders.find({ userId: ObjectId("...") }).sort({ createdAt: -1 })

// Usually NOT ideal - filter only by createdAt
// because userId is first field in the index
db.orders.find({ createdAt: { $gte: ISODate("2026-03-01") } })`,
                notes: [
                    "Design compound indexes based on your most common query patterns.",
                ],
            },
            {
                id: "selectivity",
                icon: <FiActivity />,
                title: "Selectivity (why some indexes do not help)",
                points: [
                    "Selectivity means how well the index narrows down results.",
                    "High selectivity - email, phone, userId (many unique values).",
                    "Low selectivity - boolean fields like isActive, isDeleted.",
                ],
                exampleTitle: "Example - low selectivity index",
                example: `// If most users have isActive: true
// this index may not help much
db.users.createIndex({ isActive: 1 })

// Better - combine it with another field you filter or sort by
db.users.createIndex({ isActive: 1, createdAt: -1 })`,
                notes: [
                    "Boolean alone is often not enough because it returns too many results.",
                ],
            },
            {
                id: "covering",
                icon: <FiCheckCircle />,
                title: "Covering index (big performance trick)",
                points: [
                    "A query is 'covered' when the database can answer using only the index.",
                    "Covered queries avoid fetching the full document from disk.",
                    "This can be a huge win for list pages and dashboards.",
                ],
                exampleTitle: "Example - cover with projection",
                example: `// Index
db.users.createIndex({ isActive: 1, createdAt: -1, name: 1 })

// Query that can be covered if it only needs indexed fields
db.users.find(
  { isActive: true },
  { projection: { _id: 0, name: 1, createdAt: 1 } }
).sort({ createdAt: -1 }).limit(20)`,
                notes: [
                    "Covering indexes are great for list endpoints and admin tables.",
                ],
            },
            {
                id: "writeCost",
                icon: <FiCpu />,
                title: "Write cost (why too many indexes hurt)",
                points: [
                    "Indexes speed up reads but slow down writes.",
                    "Every insert needs to update all indexes for that collection/table.",
                    "Every update that changes indexed fields also updates those indexes.",
                ],
                exampleTitle: "Rule of thumb - fewer, smarter indexes",
                example: `// Imagine a collection with 8 indexes
// Every insert updates 8 index structures
// If you are write heavy, this hurts throughput

// Best practice
// - add indexes only for real query patterns
// - remove unused indexes`,
                notes: [
                    "If you have slow writes, check how many indexes exist.",
                    "In MongoDB, use db.collection.getIndexes() to inspect.",
                ],
            },
            {
                id: "measure",
                icon: <FiSearch />,
                title: "How to verify (explain is your friend)",
                points: [
                    "Never guess - verify with explain.",
                    "Explain shows if indexes are used and how many docs were examined.",
                    "A good query usually examines fewer docs and more index keys.",
                ],
                exampleTitle: "MongoDB explain example",
                example: `db.orders.explain("executionStats").find({
  userId: ObjectId("..."),
  status: "PAID"
}).sort({ createdAt: -1 }).limit(20)`,
                notes: [
                    "Look for - totalDocsExamined should be low.",
                    "If totalDocsExamined is huge, your query is scanning too much.",
                ],
                warningTitle: "Common beginner mistake",
                warning: `// Sorting without an index can be expensive
db.orders.find({ status: "PAID" }).sort({ createdAt: -1 })

// Better - add index that supports filter + sort
db.orders.createIndex({ status: 1, createdAt: -1 })`,
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "indexStrategy") return;
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
                            <div className="title">Index Strategy</div>
                            <div className="subtitle">
                                What to index, compound order, selectivity,
                                covering, and explain
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="chip">
                            <FiCheckCircle />
                            <span>Production mindset</span>
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
                                Indexes decide whether your API feels instant or
                                painfully slow. The goal is not "index
                                everything" - the goal is indexing the exact
                                query patterns you actually run in production.
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

export default IndexStrategy;
