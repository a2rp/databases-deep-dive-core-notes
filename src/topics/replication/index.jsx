// src/topics/replication/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCopy,
    FiServer,
    FiActivity,
    FiRefreshCcw,
    FiAlertTriangle,
    FiCheckCircle,
    FiCpu,
    FiDatabase,
    FiShield,
} from "react-icons/fi";

/*
  Replication
  - single expand/collapse card
  - default collapsed
  - beginner friendly
  - covers primary-secondary, read replicas, sync vs async, lag, failover, HA, RPO RTO
  - includes SQL + Mongo notes
*/

const Replication = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsReplication",
                icon: <FiCopy />,
                title: "What is replication (simple mental model)",
                points: [
                    "Replication means keeping copies of your database data on multiple machines.",
                    "Main goals - high availability (HA), disaster recovery, and scaling reads.",
                    "Usually there is one primary (leader) for writes and one or more replicas (followers) for copying.",
                ],
                exampleTitle: "Mental picture",
                example: `- PRIMARY (writes)
- REPLICA 1 (copy for reads)
- REPLICA 2 (copy for reads and failover)`,
                notes: [
                    "Replication is not the same as backups. Backups are point-in-time snapshots. Replication is continuous copying.",
                ],
            },
            {
                id: "leaderFollower",
                icon: <FiServer />,
                title: "Primary-secondary (leader-follower) replication",
                points: [
                    "Primary handles writes and produces a stream of changes (log).",
                    "Replicas read that change stream and apply it to stay updated.",
                    "Replicas usually serve read queries to offload the primary.",
                ],
                exampleTitle: "SQL replication idea",
                example: `- Primary writes to WAL (write-ahead log)
- Replicas replay WAL to stay in sync`,
                notes: [
                    "Different databases use different names - WAL, binlog, oplog.",
                ],
            },
            {
                id: "syncAsync",
                icon: <FiRefreshCcw />,
                title: "Synchronous vs asynchronous replication",
                points: [
                    "Asynchronous - primary commits first, replicas catch up later. Fast writes but can lose last few seconds if primary dies.",
                    "Synchronous - primary waits for replica ack before commit. Safer but slower writes.",
                    "Many systems use async for performance and accept small risk.",
                ],
                exampleTitle: "Tradeoff",
                example: `- Async - faster, small window of potential data loss (RPO > 0)
- Sync - safer, higher latency (RPO near 0), lower throughput`,
                notes: [
                    "You pick based on business risk - payments vs likes counter is not same risk.",
                ],
            },
            {
                id: "lag",
                icon: <FiActivity />,
                title: "Replication lag (the most important practical issue)",
                points: [
                    "Replication lag means replica is behind primary.",
                    "If your app reads from replica right after a write, user may not see their update immediately.",
                    "This is common and must be handled intentionally in app logic.",
                ],
                exampleTitle: "Example - read-your-writes problem",
                example: `User updates profile on primary (write)
Immediately loads profile page (read)
If read goes to replica and replica is behind, user sees old data`,
                notes: [
                    "Solution patterns - read from primary after write, session stickiness, or stronger read concerns.",
                ],
                warningTitle: "Beginner trap",
                warning: `- Sending all reads to replicas without thinking about lag
- Assuming replica always has the latest data`,
            },
            {
                id: "failover",
                icon: <FiShield />,
                title: "Failover and high availability",
                points: [
                    "Failover means promoting a replica to become the new primary when the primary fails.",
                    "High availability means system continues operating even if a node fails.",
                    "Failover can be automatic (orchestrated) or manual depending on setup.",
                ],
                exampleTitle: "Failover steps (simple)",
                example: `- Detect primary failure
- Choose best replica (most up to date)
- Promote replica to primary
- Update routing so writes go to new primary`,
                notes: ["During failover, writes may pause for a short time."],
            },
            {
                id: "rpoRto",
                icon: <FiCpu />,
                title: "RPO and RTO (reliability language)",
                points: [
                    "RPO means Recovery Point Objective - how much data you can afford to lose.",
                    "RTO means Recovery Time Objective - how long you can afford to be down.",
                    "Async replication increases RPO risk. Strong HA reduces RTO.",
                ],
                exampleTitle: "Concrete example",
                example: `- RPO = 5 seconds means losing last 5 seconds of data is acceptable
- RTO = 2 minutes means service must recover within 2 minutes`,
                notes: [
                    "These are business decisions that guide your architecture.",
                ],
            },
            {
                id: "readScaling",
                icon: <FiDatabase />,
                title: "Replication for read scaling (what it does and does not do)",
                points: [
                    "Replication increases read capacity by adding replicas.",
                    "Replication does not magically fix write bottlenecks - primary still handles writes.",
                    "If you are write heavy, you need partitioning or sharding or redesign.",
                ],
                exampleTitle: "Routing pattern",
                example: `- Writes -> primary
- Reads -> replicas
- Critical reads (after write) -> primary`,
                notes: [
                    "Most big apps do some form of read scaling with replicas.",
                ],
            },
            {
                id: "mongo",
                icon: <FiCopy />,
                title: "MongoDB replication (replica set basics)",
                points: [
                    "MongoDB uses replica sets - one primary, multiple secondaries.",
                    "Replication uses oplog - operation log.",
                    "Reads can be configured with read preference and read concern.",
                    "Writes can be configured with write concern (example - majority).",
                ],
                exampleTitle: "Mongo read and write controls (idea)",
                example: `// write concern idea (pseudo)
db.orders.insertOne(
  { status: "PAID" },
  { writeConcern: { w: "majority" } }
);

// read preference idea (pseudo)
db.orders.find({ userId: ObjectId("...") }).readPref("secondaryPreferred")`,
                notes: [
                    "For critical reads, use primary or stronger read concern to reduce stale data risk.",
                ],
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "replication") return;
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
                            <FiCopy />
                        </div>

                        <div className="meta">
                            <div className="title">Replication</div>
                            <div className="subtitle">
                                Leader-follower, lag, sync vs async, failover,
                                HA, RPO and RTO
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="chip">
                            <FiCheckCircle />
                            <span>Real-world</span>
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
                                Replication keeps copies of data so your system
                                survives failures and scales reads. The catch is
                                replication lag - replicas can be behind. Once
                                you handle lag consciously, replicas become a
                                superpower.
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

export default Replication;
