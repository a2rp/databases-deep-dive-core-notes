// src/topics/schemaDesign/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiDatabase,
    FiLink,
    FiRepeat,
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
    FiCpu,
    FiGrid,
    FiPackage,
} from "react-icons/fi";

/*
  Schema Design - single expand/collapse card
  - default collapsed
  - beginner friendly
  - lots of examples
  - uses <pre> blocks
*/

const SchemaDesign = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "goal",
                icon: <FiLayers />,
                title: "Schema design goal - shape the data for your reads",
                points: [
                    "Schema design is about choosing the best data shape for your most common queries.",
                    "In MongoDB, you can embed or reference. In SQL, you normalize and join.",
                    "Good schema is not about being perfect - it is about being practical.",
                ],
                exampleTitle: "Rule of thumb",
                example: `- If you read things together - store them together
- If things grow forever - store separately
- If things are shared by many records - reference them`,
                notes: [
                    "Start from queries - not from tables or collections.",
                    "List your top 5 API endpoints and design for them first.",
                ],
            },
            {
                id: "embedVsRef",
                icon: <FiLink />,
                title: "Embedding vs referencing (MongoDB core decision)",
                points: [
                    "Embedding means nested data inside one document.",
                    "Referencing means storing an id and fetching the related data separately.",
                    "Embedding is faster for read together data, referencing is safer for shared and frequently changing data.",
                ],
                exampleTitle: "Embedding example - order with items",
                example: `// orders
{
  "_id": ObjectId("..."),
  "userId": ObjectId("..."),
  "status": "PAID",
  "items": [
    { "sku": "CAB-022", "name": "USB-C Cable", "qty": 2, "price": 199 },
    { "sku": "LAP-001", "name": "Laptop Stand", "qty": 1, "price": 999 }
  ],
  "total": 1397,
  "createdAt": ISODate("2026-03-05T08:00:00Z")
}`,
                extraTitle: "Referencing example - order references products",
                extra: `// orderItems
{
  "_id": ObjectId("..."),
  "orderId": ObjectId("..."),
  "productId": ObjectId("..."),
  "qty": 2,
  "priceAtPurchase": 199
}

// products
{
  "_id": ObjectId("..."),
  "name": "USB-C Cable",
  "currentPrice": 249
}`,
                notes: [
                    "Embed when - read together, updated together, bounded size.",
                    "Reference when - shared entities, large arrays, frequent updates.",
                ],
            },
            {
                id: "oneToMany",
                icon: <FiGrid />,
                title: "One to many patterns",
                points: [
                    "One to many means one parent has many children - user has many orders, blog has many comments.",
                    "MongoDB gives you two main options - embed children or store children in a separate collection.",
                    "The main deciding factor is growth - can the list become huge",
                ],
                exampleTitle: "Option A - embed small bounded children",
                example: `// product with small set of tags (bounded)
{
  "_id": ObjectId("..."),
  "name": "Laptop Stand",
  "tags": ["office", "ergonomics", "desk"]
}`,
                extraTitle:
                    "Option B - separate collection for unbounded children",
                extra: `// users
{ "_id": ObjectId("u1"), "name": "Ashish" }

// loginEvents (unbounded growth)
{ "_id": ObjectId("e1"), "userId": ObjectId("u1"), "at": ISODate("..."), "ip": "1.2.3.4" }
{ "_id": ObjectId("e2"), "userId": ObjectId("u1"), "at": ISODate("..."), "ip": "9.8.7.6" }

// index that makes reads fast
db.loginEvents.createIndex({ userId: 1, at: -1 })`,
                notes: [
                    "If it can grow forever - do not embed it in one document.",
                    "Use a child collection plus indexes for fast reads.",
                ],
            },
            {
                id: "manyToMany",
                icon: <FiRepeat />,
                title: "Many to many patterns",
                points: [
                    "Many to many means both sides can have many relationships - students and courses, users and roles.",
                    "In SQL you usually use a join table.",
                    "In MongoDB you can use a mapping collection or store arrays of ids.",
                ],
                exampleTitle: "SQL mapping table idea",
                example: `-- users, roles, user_roles
users(id, name)
roles(id, name)
user_roles(user_id, role_id)`,
                extraTitle: "MongoDB mapping collection",
                extra: `// users
{ "_id": ObjectId("u1"), "name": "Ashish" }

// roles
{ "_id": ObjectId("r1"), "name": "reportsOnly" }

// userRoles mapping
{ "_id": ObjectId("m1"), "userId": ObjectId("u1"), "roleId": ObjectId("r1") }

// index for fast lookup
db.userRoles.createIndex({ userId: 1, roleId: 1 }, { unique: true })`,
                notes: [
                    "Mapping collection scales better than huge arrays when relations can grow large.",
                    "Arrays of ids are fine when relationship count is small and stable.",
                ],
            },
            {
                id: "normalization",
                icon: <FiDatabase />,
                title: "Normalization vs denormalization",
                points: [
                    "Normalization means reduce duplication - store facts once and reference them.",
                    "Denormalization means duplicate some data to make reads faster and simpler.",
                    "Real systems often use a mix - normalize core entities, denormalize read models.",
                ],
                exampleTitle:
                    "Denormalization example - snapshot customer name in orders",
                example: `// customers
{ "_id": ObjectId("c1"), "name": "Ashish Ranjan", "phone": "9999999999" }

// orders - keep a snapshot for historical accuracy and faster reads
{
  "_id": ObjectId("o1"),
  "customerId": ObjectId("c1"),
  "customerNameSnapshot": "Ashish Ranjan",
  "total": 1397,
  "createdAt": ISODate("...")
}`,
                notes: [
                    "Snapshot fields avoid surprises when the original value changes later.",
                    "This is very common for invoices and order history.",
                ],
            },
            {
                id: "readWriteTradeoff",
                icon: <FiActivity />,
                title: "Read heavy vs write heavy design",
                points: [
                    "Read heavy systems optimize for fast reads - dashboards, catalog browsing, analytics views.",
                    "Write heavy systems optimize for fast writes - event logs, telemetry, click tracking.",
                    "Indexes and denormalization help reads but cost more on writes.",
                ],
                exampleTitle: "Read heavy example - catalog listing endpoint",
                example: `// You display product cards - name, price, rating, thumbnail
// So keep these fields on the product document itself
{
  "_id": ObjectId("p1"),
  "name": "Laptop Stand",
  "price": 999,
  "ratingAvg": 4.6,
  "thumbUrl": "https://picsum.photos/seed/p1/600/400"
}

// index for sorting and filtering
db.products.createIndex({ price: 1 })
db.products.createIndex({ ratingAvg: -1 })`,
                extraTitle: "Write heavy example - append only events",
                extra: `// clickEvents (append only)
{ "_id": ObjectId("e1"), "userId": ObjectId("u1"), "type": "CLICK", "at": ISODate("...") }

// index only for key queries
db.clickEvents.createIndex({ userId: 1, at: -1 })
db.clickEvents.createIndex({ at: -1 })`,
                notes: [
                    "Write heavy collections should have fewer indexes.",
                    "Read heavy collections can afford more indexes and denormalization.",
                ],
            },
            {
                id: "antiPatterns",
                icon: <FiAlertTriangle />,
                title: "Common schema mistakes (beginner traps)",
                points: [
                    "Unbounded arrays inside one document - they keep growing and become slow to update.",
                    "Over embedding shared entities - data becomes duplicated and inconsistent.",
                    "Indexing everything - write throughput drops and storage grows fast.",
                ],
                exampleTitle: "Unbounded array mistake",
                example: `// avoid this if it grows forever
{
  "_id": ObjectId("u1"),
  "name": "Ashish",
  "notifications": [ /* thousands of items forever */ ]
}

// better
// store notifications in separate collection with userId index`,
                notes: [
                    "If something can grow forever - model it as its own collection.",
                ],
                warningTitle: "Performance reminder",
                warning: `- Schema and indexes are linked
- A great schema can reduce the need for joins and heavy pipelines
- A bad schema forces you to do expensive queries forever`,
            },
            {
                id: "howToDesign",
                icon: <FiPackage />,
                title: "A practical workflow to design schema",
                points: [
                    "Step 1 - list your top API endpoints and their response shapes.",
                    "Step 2 - decide which data must be read together.",
                    "Step 3 - decide which lists can grow forever.",
                    "Step 4 - choose embedding or referencing based on steps 2 and 3.",
                    "Step 5 - add indexes for filters and sorts.",
                    "Step 6 - verify with explain and real data sizes.",
                ],
                exampleTitle: "Mini checklist",
                example: `- What are the top queries
- What fields are filtered
- What fields are sorted
- What fields are displayed
- What can grow unbounded
- What must stay historically accurate`,
                notes: [
                    "Design for today plus realistic growth, not for imaginary perfect future.",
                ],
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "schemaDesign") return;
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
                            <div className="title">Schema Design</div>
                            <div className="subtitle">
                                Embedding, referencing, normalization,
                                denormalization, and real patterns
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
                                Schema design is the hidden superpower of
                                backend engineering. If the data shape is right,
                                queries become simple and fast. If the data
                                shape is wrong, you will fight performance
                                forever.
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

export default SchemaDesign;
