// src/topics/aggregation/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiFilter,
    FiTool,
    FiBarChart2,
    FiShuffle,
    FiSearch,
    FiAlertTriangle,
    FiCheckCircle,
    FiCpu,
} from "react-icons/fi";

/*
  Aggregation - single expand/collapse card
  - beginner friendly
  - lots of examples
  - uses <pre> for code style notes
*/

const Aggregation = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "mentalModel",
                icon: <FiLayers />,
                title: "Aggregation mental model",
                points: [
                    "Aggregation is a pipeline - documents flow through stages one by one.",
                    "Each stage transforms the stream - filter, reshape, group, sort, join.",
                    "Think of it like a factory line - each stage does one job.",
                ],
                exampleTitle: "Pipeline idea",
                example: `// pipeline skeleton
db.collection.aggregate([
  { $match: { /* filter */ } },
  { $project: { /* select or compute fields */ } },
  { $group: { /* aggregate */ } },
  { $sort: { /* order results */ } }
])`,
                notes: [
                    "Rule - do filtering early to reduce data quickly.",
                    "Rule - do expensive stages only after the dataset is smaller.",
                ],
            },
            {
                id: "match",
                icon: <FiFilter />,
                title: "$match - filter documents",
                points: [
                    "$match is like find - it filters documents.",
                    "Put $match as early as possible for performance.",
                    "$match can use indexes when it is early in the pipeline.",
                ],
                exampleTitle: "Example - filter paid orders",
                example: `db.orders.aggregate([
  { $match: { status: "PAID" } }
])`,
                notes: [
                    "If you have an index on status, MongoDB can use it here.",
                ],
            },
            {
                id: "project",
                icon: <FiTool />,
                title: "$project - select fields and compute new fields",
                points: [
                    "$project decides what fields move forward.",
                    "It can rename fields, remove fields, and compute new fields.",
                    "Reducing fields early saves memory and network cost.",
                ],
                exampleTitle: "Example - keep only needed fields",
                example: `db.users.aggregate([
  { $project: { name: 1, email: 1, _id: 0 } }
])`,
                notes: ["_id is included by default, so _id: 0 removes it."],
                extraTitle: "Example - compute a field",
                extra: `db.orders.aggregate([
  {
    $project: {
      status: 1,
      total: 1,
      tax: { $multiply: ["$total", 0.18] },
      grandTotal: { $add: ["$total", { $multiply: ["$total", 0.18] }] }
    }
  }
])`,
            },
            {
                id: "group",
                icon: <FiBarChart2 />,
                title: "$group - totals, counts, analytics",
                points: [
                    "$group collects documents into buckets based on _id.",
                    "Inside each bucket you can compute sum, avg, min, max, count.",
                    "This is how you create reports - like revenue per day.",
                ],
                exampleTitle: "Example - total revenue per user",
                example: `db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: "$userId",
      orders: { $sum: 1 },
      revenue: { $sum: "$total" },
      avgOrderValue: { $avg: "$total" }
    }
  },
  { $sort: { revenue: -1 } }
])`,
                notes: [
                    "_id decides grouping key - it can be a field or an object.",
                ],
                extraTitle: "Example - group by day",
                extra: `db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: {
        day: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
        }
      },
      revenue: { $sum: "$total" },
      orders: { $sum: 1 }
    }
  },
  { $sort: { "_id.day": 1 } }
])`,
            },
            {
                id: "sortLimitSkip",
                icon: <FiShuffle />,
                title: "$sort, $limit, $skip - ordering and pagination",
                points: [
                    "$sort orders the stream. Sorting large data can be expensive.",
                    "$limit reduces result count quickly - use it soon after sort when possible.",
                    "$skip is used for pagination, but deep skip is slow in large collections.",
                ],
                exampleTitle: "Example - top 10 highest value orders",
                example: `db.orders.aggregate([
  { $match: { status: "PAID" } },
  { $sort: { total: -1 } },
  { $limit: 10 },
  { $project: { userId: 1, total: 1, createdAt: 1 } }
])`,
                notes: [
                    "Better pagination for large datasets - use range queries instead of huge skip.",
                ],
                extraTitle: "Pagination idea - range based",
                extra: `// instead of skip
// fetch next page by using a lastSeen value
db.orders.find(
  { status: "PAID", total: { $lt: lastSeenTotal } }
).sort({ total: -1 }).limit(10)`,
            },
            {
                id: "lookup",
                icon: <FiSearch />,
                title: "$lookup - join like behavior",
                points: [
                    "$lookup pulls matching documents from another collection.",
                    "This is similar to SQL join, but can be heavier if misused.",
                    "Use it when data is truly separate and you need combined view.",
                ],
                exampleTitle: "Example - join orders with users",
                example: `db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $project: {
      total: 1,
      createdAt: 1,
      "user.name": 1,
      "user.email": 1
    }
  }
])`,
                notes: [
                    "$unwind converts array into single object (because lookup returns array).",
                    "Index on foreignField (_id) already exists, so lookup is usually efficient there.",
                ],
            },
            {
                id: "performance",
                icon: <FiCpu />,
                title: "Performance rules that actually matter",
                points: [
                    "Put $match early and filter aggressively.",
                    "Project only required fields.",
                    "Avoid sorting huge datasets without supporting indexes.",
                    "Prefer pre-aggregated collections for heavy analytics workloads.",
                    "Use explain to understand if indexes are being used.",
                ],
                exampleTitle: "Example - explain pipeline",
                example: `db.orders.explain("executionStats").aggregate([
  { $match: { status: "PAID" } },
  { $group: { _id: "$userId", revenue: { $sum: "$total" } } }
])`,
                notes: [
                    "Look for - totalDocsExamined vs totalKeysExamined.",
                    "If totalDocsExamined is huge, your match is not using indexes well.",
                ],
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "aggregation") return;
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
                            <div className="title">Aggregation</div>
                            <div className="subtitle">
                                Pipeline thinking - match, project, group, sort,
                                lookup
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
                                Aggregation is MongoDB's reporting engine. The
                                secret is not memorizing stages - the secret is
                                pipeline order and reducing data early. This
                                section explains the common stages with
                                practical examples.
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

export default Aggregation;
