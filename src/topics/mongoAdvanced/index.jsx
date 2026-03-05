// src/topics/mongoAdvanced/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiDatabase,
    FiLayers,
    FiLink,
    FiShield,
    FiActivity,
    FiCheckCircle,
    FiAlertTriangle,
    FiCpu,
    FiSearch,
} from "react-icons/fi";

/*
  MongoDB Advanced - single expand/collapse card
  - beginner friendly
  - lots of examples
  - uses <pre> for code style notes
*/

const MongoAdvanced = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "docModel",
                icon: <FiDatabase />,
                title: "Document model and BSON",
                points: [
                    "MongoDB stores data as documents inside collections.",
                    "A document is like a JSON object, but MongoDB stores it as BSON (Binary JSON).",
                    "BSON adds types that plain JSON does not have, like Date, ObjectId, Decimal128.",
                ],
                exampleTitle: "Example - document in a users collection",
                example: `// users collection (one document)
{
  "_id": ObjectId("65f1c2c1a9b0c7d6e12a0001"),
  "name": "Ashish",
  "email": "ashish@example.com",
  "age": 26,
  "isActive": true,
  "createdAt": ISODate("2026-03-05T08:00:00Z")
}`,
                notes: [
                    "Why BSON matters - MongoDB can store and compare real Date values, not just strings.",
                    "ObjectId is a special id type that includes a timestamp + randomness.",
                ],
            },
            {
                id: "embedVsRef",
                icon: <FiLink />,
                title: "Embedded vs referenced documents",
                points: [
                    "Embedding means nested objects or arrays inside one document.",
                    "Referencing means storing another document id and fetching it separately.",
                    "Choose based on how you read data and how often it changes.",
                ],
                exampleTitle: "Example - embedding order items",
                example: `// orders (embedding items)
// Good when you usually read order + items together
{
  "_id": ObjectId("65f1c2c1a9b0c7d6e12a0100"),
  "userId": ObjectId("65f1c2c1a9b0c7d6e12a0001"),
  "status": "PAID",
  "items": [
    { "sku": "LAP-001", "name": "Laptop Stand", "qty": 1, "price": 999 },
    { "sku": "CAB-022", "name": "USB-C Cable", "qty": 2, "price": 199 }
  ],
  "total": 1397
}`,
                notes: [
                    "Embed when - read together, updated together, limited size, limited growth.",
                    "Reference when - separate lifecycle, large arrays, many updates, shared objects.",
                ],
                extraTitle: "Example - referencing product documents",
                extra: `// orderItems referencing products
{
  "_id": ObjectId("..."),
  "orderId": ObjectId("..."),
  "productId": ObjectId("..."),
  "qty": 2,
  "priceAtPurchase": 199
}

// products collection
{
  "_id": ObjectId("..."),
  "name": "USB-C Cable",
  "currentPrice": 249
}`,
            },
            {
                id: "consistency",
                icon: <FiShield />,
                title: "Write concern and read concern",
                points: [
                    "Write concern controls how safely MongoDB confirms a write.",
                    "Read concern controls how stable the data is when reading.",
                    "In clusters, you trade speed for safety.",
                ],
                exampleTitle: "Write concern - common levels",
                example: `// w: 1 - primary confirms write (fast, default in many apps)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: 1 } })

// w: "majority" - majority of replica set confirms (safer)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: "majority" } })

// j: true - journal commit (safer against sudden power loss)
db.orders.insertOne({ status: "PAID" }, { writeConcern: { w: "majority", j: true } })`,
                notes: [
                    "w: 1 is usually fine for many apps, but majority is better for important money writes.",
                    "j: true means write is recorded in journal on disk before ack (more durability).",
                ],
                extraTitle: "Read concern - idea",
                extra: `// local - can read data that may roll back in rare failover cases
db.orders.find({}, { readConcern: { level: "local" } })

// majority - reads only data confirmed by majority
db.orders.find({}, { readConcern: { level: "majority" } })`,
            },
            {
                id: "aggregationIntro",
                icon: <FiLayers />,
                title: "Aggregation mental model (advanced usage)",
                points: [
                    "Aggregation is a pipeline - data flows stage by stage.",
                    "Use $match early to reduce documents quickly.",
                    "Use $project to reduce fields and compute values.",
                    "Use $group for totals, counts, and analytics.",
                ],
                exampleTitle: "Example - total revenue per day",
                example: `db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: { day: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } } },
      revenue: { $sum: "$total" },
      orders: { $sum: 1 }
    }
  },
  { $sort: { "_id.day": 1 } }
])`,
                notes: [
                    "Rule - $match first, $sort later, keep pipeline lean.",
                    "Indexes help $match and $sort when used correctly.",
                ],
            },
            {
                id: "transactions",
                icon: <FiActivity />,
                title: "Transactions (when and why)",
                points: [
                    "A transaction means multiple writes succeed together or fail together.",
                    "MongoDB supports transactions in replica sets and sharded clusters (with limits).",
                    "Use transactions when you must keep multiple documents consistent.",
                ],
                exampleTitle: "Example - wallet transfer (concept)",
                example: `// Pseudocode style (Node.js driver style idea)
const session = client.startSession();

await session.withTransaction(async () => {
  await db.collection("wallets").updateOne(
    { userId: fromUserId },
    { $inc: { balance: -amount } },
    { session }
  );

  await db.collection("wallets").updateOne(
    { userId: toUserId },
    { $inc: { balance: amount } },
    { session }
  );

  await db.collection("walletTransfers").insertOne(
    { fromUserId, toUserId, amount, createdAt: new Date() },
    { session }
  );
});`,
                notes: [
                    "Avoid overusing transactions - they add overhead and can reduce throughput.",
                    "If your data model can embed and update in one document, do that first.",
                ],
            },
            {
                id: "validation",
                icon: <FiCheckCircle />,
                title: "Schema validation (MongoDB is flexible, not schema-less)",
                points: [
                    "MongoDB is schema flexible, but you can still enforce rules.",
                    "Schema validation helps catch bad writes early.",
                    "Use it when multiple services or teams write to the same collection.",
                ],
                exampleTitle: "Example - simple validation rules",
                example: `db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "createdAt"],
      properties: {
        name: { bsonType: "string", minLength: 2 },
        email: { bsonType: "string" },
        createdAt: { bsonType: "date" },
        isActive: { bsonType: "bool" }
      }
    }
  }
})`,
                notes: [
                    "Validation is not a replacement for app validation, but it is a strong safety net.",
                ],
            },
            {
                id: "performanceHabits",
                icon: <FiSearch />,
                title: "Performance habits that matter",
                points: [
                    "Prefer precise queries - always use filters that can use indexes.",
                    "Avoid huge unbounded arrays in a document (they can grow forever).",
                    "Project only needed fields (do not return the full document if you do not need it).",
                    "Keep documents small and stable for frequent updates.",
                ],
                exampleTitle: "Example - project only needed fields",
                example: `// Bad - returns full document
db.users.find({ isActive: true })

// Better - returns only name and email
db.users.find(
  { isActive: true },
  { projection: { name: 1, email: 1 } }
)`,
                notes: [
                    "If query feels slow, first check - do we have an index for the filter and sort?",
                    "Second check - are we returning too much data?",
                ],
                warningTitle: "Common beginner mistake",
                warning: `// This can become huge and slow to update over time
{
  "_id": ObjectId("..."),
  "userId": ObjectId("..."),
  "loginHistory": [ /* thousands of entries */ ]
}

// Better idea - keep history in a separate collection with userId index
db.loginEvents.insertOne({ userId, at: new Date(), ip: "1.2.3.4" })`,
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "mongodbAdvanced") return;
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
                            <div className="title">MongoDB Advanced</div>
                            <div className="subtitle">
                                Document model, schema patterns, concerns,
                                aggregation, transactions
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="chip">
                            <FiCpu />
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
                                MongoDB looks simple at first, but real projects
                                win by choosing the right data shape, the right
                                concerns, and the right query patterns. This
                                section explains those decisions with examples.
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

export default MongoAdvanced;
