// src/topics/scalingDatabases/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiTrendingUp,
    FiArrowUp,
    FiArrowRight,
    FiCopy,
    FiLayers,
    FiCpu,
    FiDatabase,
    FiShuffle,
    FiActivity,
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";

/*
  Scaling Databases
  - single expand/collapse card
  - default collapsed
  - beginner friendly
  - covers vertical vs horizontal scaling, read replicas, write bottlenecks,
    partitioning, caching mental model, query distribution patterns
*/

const ScalingDatabases = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whyScale",
                icon: <FiTrendingUp />,
                title: "Why databases need scaling",
                points: [
                    "Traffic grows - more reads and writes per second.",
                    "Data grows - tables and indexes become larger.",
                    "Queries grow - more joins, more aggregation, more analytics.",
                    "Scaling means keeping latency low and throughput high as load increases.",
                ],
                exampleTitle: "Real symptoms of scaling pain",
                example: `- API response times increasing
- CPU at 90% all day
- Disk I/O constantly maxed
- Slow queries dominate logs
- Connection pool saturates`,
                notes: [
                    "Scaling is not only hardware - it is also schema, indexes, caching, and architecture.",
                ],
            },
            {
                id: "vertical",
                icon: <FiArrowUp />,
                title: "Vertical scaling (scale up)",
                points: [
                    "Vertical scaling means bigger machine - more CPU, RAM, faster SSD.",
                    "Simplest scaling option - no application changes usually required.",
                    "Has a hard limit - you cannot scale forever.",
                ],
                exampleTitle: "When vertical scaling works well",
                example: `- Early stage products
- Moderate traffic
- Single DB can handle workload with better hardware
- You need quick win`,
                notes: [
                    "Often the first step because it is easiest and fastest.",
                ],
            },
            {
                id: "horizontal",
                icon: <FiArrowRight />,
                title: "Horizontal scaling (scale out)",
                points: [
                    "Horizontal scaling means adding more nodes instead of one bigger node.",
                    "For reads - add read replicas.",
                    "For large data - partition or shard across nodes.",
                    "More complex but scales much further than vertical scaling.",
                ],
                exampleTitle: "Horizontal scaling idea",
                example: `- One primary handles writes
- Multiple replicas handle reads
- For huge systems - split data across shards`,
                notes: [
                    "Most production scaling pain comes from writes, not reads.",
                ],
            },
            {
                id: "readReplicas",
                icon: <FiCopy />,
                title: "Read replicas (classic scale pattern)",
                points: [
                    "Read replica is a copy of primary database that is kept updated via replication.",
                    "Your app sends write queries to primary, read queries to replicas.",
                    "This can massively increase read capacity.",
                    "Main problem is replication lag - replica may be slightly behind primary.",
                ],
                exampleTitle: "App routing mental model",
                example: `- Writes - go to PRIMARY
- Reads - go to REPLICAS
- Critical reads right after write - read from PRIMARY (read your writes)`,
                notes: [
                    "If you show user their new order immediately, read from primary or use stronger read settings.",
                ],
                warningTitle: "Beginner trap",
                warning: `- Sending every read to replica without considering lag
- Expecting replicas to solve write bottleneck`,
            },
            {
                id: "writeBottlenecks",
                icon: <FiCpu />,
                title: "Write bottlenecks (why scaling is hard)",
                points: [
                    "Writes need durability - logs, fsync, replication.",
                    "Indexes make writes slower because each write updates indexes.",
                    "Hot rows cause contention - many updates to same row or document.",
                    "Transactions and locks reduce write concurrency.",
                ],
                exampleTitle: "Common write bottleneck examples",
                example: `- Counter table updated on every request
- Single row holds global state like last_invoice_number
- Highly indexed event table with too many secondary indexes`,
                notes: [
                    "Fixing write bottlenecks often requires data model changes or partitioning.",
                ],
            },
            {
                id: "partitioning",
                icon: <FiLayers />,
                title: "Partitioning (split one table into smaller pieces)",
                points: [
                    "Partitioning means splitting a large table into partitions based on a key.",
                    "Common keys - date (monthly partitions), tenant_id, region.",
                    "Queries become faster because DB can scan only relevant partitions.",
                    "This is not always the same as sharding - partitioning can be within one DB node.",
                ],
                exampleTitle: "Date partitioning idea (log table)",
                example: `-- Conceptual
events_2026_01
events_2026_02
events_2026_03

-- Query for March scans only events_2026_03`,
                notes: [
                    "Partitioning is super useful for time series data and logs.",
                ],
            },
            {
                id: "caching",
                icon: <FiActivity />,
                title: "Caching and read models (reduce DB load)",
                points: [
                    "Caching means serve frequent reads from fast storage instead of DB.",
                    "Examples - in-memory cache, CDN, application cache, materialized views.",
                    "Also design read models - precomputed tables for dashboards.",
                    "Cache is not only Redis - even simple in-app cache can help.",
                ],
                exampleTitle: "Caching mental model",
                example: `- DB is source of truth
- Cache is fast copy
- Cache must be invalidated or refreshed when data changes`,
                notes: [
                    "Most scale wins are not fancy sharding - they are caching + indexes + query fixes.",
                ],
            },
            {
                id: "queryPatterns",
                icon: <FiShuffle />,
                title: "Query distribution patterns (how systems route traffic)",
                points: [
                    "Read heavy endpoints - route to replicas and cache.",
                    "Write heavy endpoints - keep minimal indexes and batch writes.",
                    "Analytics queries - run on separate warehouse or replica to avoid hurting primary.",
                    "Multi-tenant systems - route by tenant to partitions or shards.",
                ],
                exampleTitle: "Production pattern - OLTP vs OLAP",
                example: `- OLTP (transactions) - fast small queries, primary DB
- OLAP (analytics) - large scans, separate system or replica`,
                notes: [
                    "Mixing analytics scans with transactional DB can destroy latency.",
                ],
            },
            {
                id: "practicalPlan",
                icon: <FiDatabase />,
                title: "Practical scaling plan (simple order)",
                points: [
                    "Step 1 - measure - slow queries, CPU, I/O, connections.",
                    "Step 2 - fix queries + indexes (often biggest win).",
                    "Step 3 - add caching for hot reads.",
                    "Step 4 - add read replicas if reads dominate.",
                    "Step 5 - partition large tables (logs, events).",
                    "Step 6 - shard only when needed - it increases complexity a lot.",
                ],
                exampleTitle: "Quick checklist",
                example: `- What are top 10 slow queries
- Which indexes are missing
- Which endpoints are read heavy
- Which endpoints are write heavy
- Which tables grow fastest
- What can be cached safely`,
                notes: [
                    "Scaling is mostly engineering discipline and measurement, not magic hardware.",
                ],
                warningTitle: "Do not do this too early",
                warning: `- Shard before fixing indexes and queries
- Add replicas before understanding lag behavior
- Cache everything without invalidation plan`,
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "scalingDatabases") return;
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
                            <FiTrendingUp />
                        </div>

                        <div className="meta">
                            <div className="title">Scaling Databases</div>
                            <div className="subtitle">
                                Vertical vs horizontal scaling, replicas,
                                partitioning, caching and real patterns
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
                                Scaling databases is mostly about removing
                                bottlenecks in the right order. Start with
                                measurement, fix slow queries and indexes, add
                                caching, then replicas. Sharding is powerful but
                                it is not the first move.
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

export default ScalingDatabases;
