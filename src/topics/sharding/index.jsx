// src/topics/sharding/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiShuffle,
    FiLayers,
    FiCompass,
    FiTrendingUp,
    FiSearch,
    FiCpu,
    FiAlertTriangle,
    FiCheckCircle,
    FiDatabase,
} from "react-icons/fi";

/*
  Sharding
  - single expand/collapse card
  - default collapsed
  - beginner friendly
  - covers what sharding is, shard key, routing, balancing, hotspots,
    cross-shard queries, resharding, replication + sharding, Mongo focus
*/

const Sharding = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsSharding",
                icon: <FiShuffle />,
                title: "What is sharding (simple mental model)",
                points: [
                    "Sharding is splitting data across multiple database nodes so one machine does not store everything.",
                    "Each shard holds only a portion of the data, but together they represent the full dataset.",
                    "Main goal - scale storage and write throughput beyond a single machine.",
                ],
                exampleTitle: "Mental picture",
                example: `- Shard 1 stores users 1 to 1,000,000
- Shard 2 stores users 1,000,001 to 2,000,000
- Shard 3 stores users 2,000,001 to 3,000,000`,
                notes: [
                    "Replication makes copies of data. Sharding splits data. They solve different problems.",
                ],
            },
            {
                id: "whyShard",
                icon: <FiTrendingUp />,
                title: "When you actually need sharding",
                points: [
                    "Your dataset is too large for a single node even with good hardware.",
                    "Writes are too heavy for a single primary and you already fixed queries and indexes.",
                    "You have clear partition key patterns (tenant_id, user_id, region).",
                    "You can accept more operational complexity.",
                ],
                exampleTitle: "Signs you are not ready yet",
                example: `- You still have slow queries without proper indexes
- You have not tried partitioning or caching
- Most load is reads (replicas can help before sharding)`,
                notes: [
                    "Sharding is powerful, but it is a complexity multiplier.",
                ],
            },
            {
                id: "shardKey",
                icon: <FiCompass />,
                title: "Shard key (the most important decision)",
                points: [
                    "Shard key decides how data is distributed across shards.",
                    "A good shard key spreads load evenly and supports common queries.",
                    "A bad shard key creates hotspots or forces scatter-gather queries.",
                ],
                exampleTitle: "Good vs bad shard keys",
                example: `Good:
- user_id (high cardinality)
- tenant_id (multi-tenant systems)
- region + user_id (geography aware)

Bad:
- is_active (low cardinality)
- status (few values)
- created_at if inserts always go to latest range (hot shard risk)`,
                notes: [
                    "You want high cardinality and even distribution, not a few repeated values.",
                ],
            },
            {
                id: "routing",
                icon: <FiSearch />,
                title: "Query routing (how the system finds the right shard)",
                points: [
                    "If your query includes shard key, router can send it to one shard (fast).",
                    "If query does not include shard key, router may query many shards (scatter-gather).",
                    "Design your APIs to include shard key in request path when possible.",
                ],
                exampleTitle: "Fast route vs scatter-gather",
                example: `Fast:
- GET /users/123/orders
- Query has user_id (shard key) -> hits one shard

Slow:
- GET /orders?status=PAID
- No shard key -> hits all shards -> merges results`,
                notes: [
                    "Scatter-gather queries are the main reason sharded systems feel slower sometimes.",
                ],
            },
            {
                id: "balancing",
                icon: <FiLayers />,
                title: "Balancing and chunk movement",
                points: [
                    "Sharded systems need to keep data balanced across shards.",
                    "Balancer moves chunks or ranges between shards when one shard is too full or too hot.",
                    "Moving data has a cost - network, CPU, and temporary load spikes.",
                ],
                exampleTitle: "Balancing idea",
                example: `- Shard 1 has 60% of data
- Shard 2 has 20%
- Shard 3 has 20%

Balancer moves some ranges from Shard 1 to others`,
                notes: ["A stable shard key reduces balancing pain."],
            },
            {
                id: "hotspots",
                icon: <FiAlertTriangle />,
                title: "Hot shards and hotspots (danger zone)",
                points: [
                    "Hotspot means one shard receives most writes or reads.",
                    "This happens when shard key causes uneven distribution.",
                    "Examples - monotonically increasing key (timestamps) can direct inserts to one shard.",
                ],
                exampleTitle: "Timestamp hotspot example",
                example: `If shard key is created_at (range based),
all new inserts go to latest time range -> one shard becomes hot`,
                notes: [
                    "Fix patterns - hashed shard keys, compound shard keys, or choose a better key like user_id.",
                ],
                warningTitle: "Beginner traps",
                warning: `- Choosing shard key without understanding query patterns
- Using low cardinality shard key
- Sharding too early to avoid learning indexing and query tuning`,
            },
            {
                id: "crossShard",
                icon: <FiCpu />,
                title: "Cross-shard queries and transactions",
                points: [
                    "Cross-shard queries are slower because results must be merged across shards.",
                    "Cross-shard joins are difficult or not supported like a single SQL database join.",
                    "Cross-shard transactions exist in some systems but cost more and add complexity.",
                ],
                exampleTitle: "Design approach",
                example: `- Prefer queries scoped by shard key
- Keep related data close (same shard) by designing key
- Use denormalization or precomputed views for global reporting`,
                notes: [
                    "For global analytics, many teams move data to a warehouse instead of querying shards.",
                ],
            },
            {
                id: "replicationPlusSharding",
                icon: <FiDatabase />,
                title: "Sharding plus replication (real production setup)",
                points: [
                    "Each shard usually has its own replication set for high availability.",
                    "So total nodes = shards * replicas per shard.",
                    "Example - 4 shards with 3 replicas each = 12 nodes (plus routers and config servers).",
                ],
                exampleTitle: "Why ops complexity grows",
                example: `- More nodes
- More monitoring
- More failover events
- More network traffic`,
                notes: [
                    "This is why sharding is usually a later-stage decision.",
                ],
            },
            {
                id: "mongo",
                icon: <FiShuffle />,
                title: "MongoDB sharding (how it looks in Mongo)",
                points: [
                    "Mongo sharded clusters use mongos router, config servers, and shard replica sets.",
                    "Shard key choice is critical to avoid hotspots and scatter-gather.",
                    "Mongo supports hashed shard keys to spread inserts more evenly.",
                ],
                exampleTitle: "Mongo shard key ideas",
                example: `// Example concept only
// Choose shard key that matches query patterns

sh.shardCollection("app.orders", { userId: "hashed" })

// Now queries with userId route well`,
                notes: [
                    "If your app always queries by userId, shard by userId is usually strong.",
                ],
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "sharding") return;
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
                            <FiShuffle />
                        </div>

                        <div className="meta">
                            <div className="title">Sharding</div>
                            <div className="subtitle">
                                Shard keys, routing, balancing, hotspots,
                                cross-shard queries and Mongo patterns
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="chip">
                            <FiCheckCircle />
                            <span>High impact topic</span>
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
                                Sharding is how databases scale beyond one
                                machine, but it adds serious complexity. The
                                shard key is the destiny of your cluster. Choose
                                it based on query patterns, cardinality, and
                                hotspot risk.
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

export default Sharding;
