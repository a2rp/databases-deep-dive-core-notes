// src/components/about/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiDatabase,
    FiLayers,
    FiTrendingUp,
    FiCheckCircle,
    FiSearch,
    FiLink,
    FiGithub,
    FiExternalLink,
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiLock,
    FiBookOpen,
    FiTarget,
} from "react-icons/fi";

const About = ({ scrollerRef }) => {
    const [open, setOpen] = useState(true);
    const [filter, setFilter] = useState("");

    const topics = useMemo(
        () => [
            {
                key: "mongoAdvanced",
                title: "MongoDB Advanced",
                icon: <FiDatabase />,
                tag: "NoSQL",
                desc: "Document model, BSON, embedding vs referencing, write and read concerns, and real production patterns.",
            },
            {
                key: "aggregation",
                title: "Aggregation",
                icon: <FiLayers />,
                tag: "Pipelines",
                desc: "Aggregation pipeline mental model, common stages, and performance friendly pipeline habits.",
            },
            {
                key: "indexStrategy",
                title: "Index Strategy",
                icon: <FiSearch />,
                tag: "Performance",
                desc: "How indexes work, when they help, when they hurt, and how to choose practical index shapes.",
            },
            {
                key: "schemaDesign",
                title: "Schema Design",
                icon: <FiBookOpen />,
                tag: "Modeling",
                desc: "Schema design tradeoffs, data shape decisions, denormalization, and consistency tradeoffs.",
            },
            {
                key: "sql",
                title: "SQL",
                icon: <FiDatabase />,
                tag: "RDBMS",
                desc: "Relational fundamentals, keys, constraints, ACID, and query execution mental model.",
            },
            {
                key: "joins",
                title: "Joins",
                icon: <FiLink />,
                tag: "Queries",
                desc: "Inner and outer joins, join conditions, and practical performance considerations.",
            },
            {
                key: "subqueries",
                title: "Subqueries",
                icon: <FiCpu />,
                tag: "Queries",
                desc: "Scalar and correlated subqueries, EXISTS patterns, and when joins are simpler.",
            },
            {
                key: "transactions",
                title: "Transactions",
                icon: <FiLock />,
                tag: "Consistency",
                desc: "ACID, isolation levels, conflicts, and the real meaning of durability in practice.",
            },
            {
                key: "scalingDatabases",
                title: "Scaling Databases",
                icon: <FiTrendingUp />,
                tag: "Scale",
                desc: "Vertical vs horizontal scaling, read replicas, partitioning, and common bottlenecks.",
            },
            {
                key: "replication",
                title: "Replication",
                icon: <FiLayers />,
                tag: "Availability",
                desc: "Primary secondary replication, failover basics, replication lag, and read patterns.",
            },
            {
                key: "sharding",
                title: "Sharding",
                icon: <FiLayers />,
                tag: "Scale",
                desc: "Shard keys, distribution, query routing, rebalancing, and distributed query tradeoffs.",
            },
        ],
        [],
    );

    const filtered = useMemo(() => {
        const q = filter.trim().toLowerCase();
        if (!q) return topics;
        return topics.filter((t) => {
            return (
                t.title.toLowerCase().includes(q) ||
                t.tag.toLowerCase().includes(q) ||
                t.desc.toLowerCase().includes(q)
            );
        });
    }, [filter, topics]);

    const stats = useMemo(
        () => [
            {
                label: "Topics",
                value: String(topics.length),
                icon: <FiCheckCircle />,
            },
            { label: "Focus", value: "Revision", icon: <FiBookOpen /> },
            { label: "Style", value: "At a glance", icon: <FiLayers /> },
            {
                label: "Deploy",
                value: "GitHub Pages",
                icon: <FiExternalLink />,
            },
        ],
        [topics.length],
    );

    const repoUrl = "https://github.com/a2rp/databases-deep-dive-core-notes";

    const scrollToTopic = (key) => {
        const root = scrollerRef?.current || document;
        const el = root.querySelector(`.topicWrapper.${key}`);
        if (!el) return;

        // scroll inside your main scroller
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        // highlight pulse
        el.classList.add("a2rpFocusPulse");
        window.setTimeout(() => el.classList.remove("a2rpFocusPulse"), 900);

        // notify topic component to open (we will add listener in each topic)
        window.dispatchEvent(
            new CustomEvent("a2rp:open-topic", { detail: { key } }),
        );
    };

    return (
        <Styled.Wrapper>
            <Styled.TopRow>
                <Styled.TitleBlock>
                    <Styled.Badge>
                        <span className="icon">
                            <FiDatabase />
                        </span>
                        <span className="text">
                            Databases Deep Dive Core Notes
                        </span>
                    </Styled.Badge>

                    <Styled.Title>
                        Database engineering, without the boring fog.
                    </Styled.Title>

                    <Styled.Subtitle>
                        A single page revision map for MongoDB advanced topics,
                        SQL query thinking, index strategy, transactions,
                        replication, and sharding. Built for fast recall and
                        production mental models.
                    </Styled.Subtitle>

                    <Styled.Actions>
                        <Styled.PrimaryBtn
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                        >
                            <span className="btnIcon">
                                {open ? <FiChevronUp /> : <FiChevronDown />}
                            </span>
                            <span className="btnText">
                                {open ? "Collapse overview" : "Expand overview"}
                            </span>
                        </Styled.PrimaryBtn>

                        <Styled.SecondaryLink
                            href={repoUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="btnIcon">
                                <FiGithub />
                            </span>
                            <span className="btnText">Open repo</span>
                        </Styled.SecondaryLink>
                    </Styled.Actions>
                </Styled.TitleBlock>

                <Styled.StatsGrid>
                    {stats.map((s) => (
                        <Styled.StatCard key={s.label}>
                            <div className="icon">{s.icon}</div>
                            <div className="meta">
                                <div className="value">{s.value}</div>
                                <div className="label">{s.label}</div>
                            </div>
                        </Styled.StatCard>
                    ))}
                </Styled.StatsGrid>
            </Styled.TopRow>

            {open && (
                <Styled.Body>
                    <Styled.Section>
                        <Styled.SectionHeader>
                            <div className="left">
                                <div className="icon">
                                    <FiLayers />
                                </div>
                                <div>
                                    <div className="title">
                                        What you get here
                                    </div>
                                    <div className="hint">
                                        Short, accurate, and practical notes. No
                                        essays.
                                    </div>
                                </div>
                            </div>

                            <Styled.SearchWrap>
                                <FiSearch />
                                <input
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    placeholder="Search topics, tags, keywords"
                                    aria-label="Search topics"
                                />
                            </Styled.SearchWrap>
                        </Styled.SectionHeader>

                        <Styled.TopicGrid>
                            {filtered.map((t) => (
                                <Styled.TopicCard
                                    key={t.key}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => scrollToTopic(t.key)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ")
                                            scrollToTopic(t.key);
                                    }}
                                    aria-label={`Go to ${t.title}`}
                                >
                                    <div className="row">
                                        <div className="icon">{t.icon}</div>
                                        <div className="title">{t.title}</div>
                                    </div>

                                    <div className="tag">{t.tag}</div>
                                    <div className="desc">{t.desc}</div>

                                    {/* <div className="foot">
                                        <div className="chip">
                                            <FiTarget />
                                            <span>Go to section</span>
                                        </div>
                                    </div> */}
                                </Styled.TopicCard>
                            ))}
                        </Styled.TopicGrid>

                        {filtered.length === 0 && (
                            <Styled.EmptyState>
                                <div className="icon">
                                    <FiSearch />
                                </div>
                                <div className="title">No matches</div>
                                <div className="desc">
                                    Try searching for "index", "join",
                                    "replication", or "shard".
                                </div>
                            </Styled.EmptyState>
                        )}
                    </Styled.Section>
                </Styled.Body>
            )}
        </Styled.Wrapper>
    );
};

export default About;
