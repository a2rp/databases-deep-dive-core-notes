// App.jsx
import React, { useEffect, useRef, useState } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import GoToTop from "./components/goToTop";
import { FiActivity, FiBookOpen, FiDatabase, FiLayers, FiLink, FiLock, FiSearch, FiServer } from "react-icons/fi";

import MongoAdvanced from "./topics/mongoAdvanced";
import Aggregation from "./topics/aggregation";
import IndexStrategy from "./topics/indexStrategy";
import SchemaDesign from "./topics/schemaDesign";
import Sql from "./topics/sql";
import Joins from "./topics/joins";
import Subqueries from "./topics/subqueries";
import Transactions from "./topics/transactions";
import ScalingDatabases from "./topics/scalingDatabases";
import Replication from "./topics/replication";
import Sharding from "./topics/sharding";

const App = () => {
    const scrollerRef = useRef(null);
    const [activeTopic, setActiveTopic] = useState("overview");

    const menuItems = [
        ["overview", "Overview", <FiBookOpen />],
        ["mongoAdvanced", "MongoDB Advanced", <FiDatabase />],
        ["aggregation", "Aggregation", <FiLayers />],
        ["indexStrategy", "Index Strategy", <FiSearch />],
        ["schemaDesign", "Schema Design", <FiBookOpen />],
        ["sql", "SQL", <FiDatabase />],
        ["joins", "Joins", <FiLink />],
        ["subqueries", "Subqueries", <FiSearch />],
        ["transactions", "Transactions", <FiLock />],
        ["scalingDatabases", "Scaling Databases", <FiActivity />],
        ["replication", "Replication", <FiServer />],
        ["sharding", "Sharding", <FiLayers />],
    ];

    useEffect(() => {
        if (activeTopic === "overview") return;
        window.dispatchEvent(new CustomEvent("a2rp:open-topic", { detail: { key: activeTopic } }));
    }, [activeTopic]);

    const selectTopic = (key) => {
        setActiveTopic(key);
        scrollerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>

            <Styled.Main ref={scrollerRef}>
                <aside className="studyNav" aria-label="Database topics">
                    <div className="studyNavLabel">Study guide</div>
                    <nav>
                        {menuItems.map(([key, label, icon]) => (
                            <button key={key} type="button" className={activeTopic === key ? "active" : ""} onClick={() => selectTopic(key)}>
                                {icon}<span>{label}</span>
                            </button>
                        ))}
                    </nav>
                    <p>Choose a topic to open its notes.</p>
                </aside>
                <div className="contentWrapper">
                    {activeTopic === "overview" && <About scrollerRef={scrollerRef} />}

                    <div className={`topicWrapper mongoAdvanced ${activeTopic === "mongoAdvanced" ? "activeTopic" : ""}`}>
                        <MongoAdvanced />
                    </div>

                    <div className={`topicWrapper aggregation ${activeTopic === "aggregation" ? "activeTopic" : ""}`}>
                        <Aggregation />
                    </div>

                    <div className={`topicWrapper indexStrategy ${activeTopic === "indexStrategy" ? "activeTopic" : ""}`}>
                        <IndexStrategy />
                    </div>

                    <div className={`topicWrapper schemaDesign ${activeTopic === "schemaDesign" ? "activeTopic" : ""}`}>
                        <SchemaDesign />
                    </div>

                    <div className={`topicWrapper sql ${activeTopic === "sql" ? "activeTopic" : ""}`}>
                        <Sql />
                    </div>

                    <div className={`topicWrapper joins ${activeTopic === "joins" ? "activeTopic" : ""}`}>
                        <Joins />
                    </div>

                    <div className={`topicWrapper subqueries ${activeTopic === "subqueries" ? "activeTopic" : ""}`}>
                        <Subqueries />
                    </div>

                    <div className={`topicWrapper transactions ${activeTopic === "transactions" ? "activeTopic" : ""}`}>
                        <Transactions />
                    </div>

                    <div className={`topicWrapper scalingDatabases ${activeTopic === "scalingDatabases" ? "activeTopic" : ""}`}>
                        <ScalingDatabases />
                    </div>

                    <div className={`topicWrapper replication ${activeTopic === "replication" ? "activeTopic" : ""}`}>
                        <Replication />
                    </div>

                    <div className={`topicWrapper sharding ${activeTopic === "sharding" ? "activeTopic" : ""}`}>
                        <Sharding />
                    </div>
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>

            <GoToTop scrollerRef={scrollerRef} />
        </Styled.Wrapper>
    );
};

export default App;
