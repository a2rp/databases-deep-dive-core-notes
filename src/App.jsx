// App.jsx
import React, { useRef } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import GoToTop from "./components/goToTop";

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

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>

            <Styled.Main ref={scrollerRef}>
                <div className="contentWrapper">
                    <About scrollerRef={scrollerRef} />

                    <div className="topicWrapper mongoAdvanced">
                        <MongoAdvanced />
                    </div>

                    <div className="topicWrapper aggregation">
                        <Aggregation />
                    </div>

                    <div className="topicWrapper indexStrategy">
                        <IndexStrategy />
                    </div>

                    <div className="topicWrapper schemaDesign">
                        <SchemaDesign />
                    </div>

                    <div className="topicWrapper sql">
                        <Sql />
                    </div>

                    <div className="topicWrapper joins">
                        <Joins />
                    </div>

                    <div className="topicWrapper subqueries">
                        <Subqueries />
                    </div>

                    <div className="topicWrapper transactions">
                        <Transactions />
                    </div>

                    <div className="topicWrapper scalingDatabases">
                        <ScalingDatabases />
                    </div>

                    <div className="topicWrapper replication">
                        <Replication />
                    </div>

                    <div className="topicWrapper sharding">
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
