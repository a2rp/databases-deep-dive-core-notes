// src/topics/transactions/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiShield,
    FiLayers,
    FiRepeat,
    FiAlertTriangle,
    FiCheckCircle,
    FiCpu,
    FiLock,
    FiDatabase,
    FiGitMerge,
} from "react-icons/fi";

/*
  Transactions
  - single expand/collapse card
  - default collapsed
  - beginner friendly
  - covers ACID, BEGIN/COMMIT/ROLLBACK, isolation levels, locks, anomalies
  - includes real examples (money transfer, inventory purchase)
  - includes distributed transaction notes and MongoDB parallels
*/

const Transactions = () => {
    const [open, setOpen] = useState(false);

    const sections = useMemo(() => {
        return [
            {
                id: "whatIsTxn",
                icon: <FiShield />,
                title: "What is a transaction (simple mental model)",
                points: [
                    "A transaction is a group of database operations treated as one unit.",
                    "Either everything succeeds (commit) or everything is undone (rollback).",
                    "Transactions protect your data from partial updates and concurrency bugs.",
                ],
                exampleTitle: "Classic example - money transfer",
                example: `BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;`,
                notes: [
                    "If the second update fails, you must rollback so money is not lost.",
                ],
            },
            {
                id: "acid",
                icon: <FiLayers />,
                title: "ACID - the 4 guarantees",
                points: [
                    "A - Atomicity - all or nothing.",
                    "C - Consistency - constraints remain valid after commit.",
                    "I - Isolation - concurrent transactions do not corrupt each other.",
                    "D - Durability - once committed, data survives crash.",
                ],
                exampleTitle: "Atomicity and durability mental image",
                example: `- Atomicity - either both updates happen or neither happens
- Durability - after COMMIT, even power cut should not lose the change`,
                notes: [
                    "Different databases implement these with logs, locks, MVCC, replication protocols.",
                ],
            },
            {
                id: "beginCommitRollback",
                icon: <FiRepeat />,
                title: "BEGIN, COMMIT, ROLLBACK",
                points: [
                    "BEGIN starts a transaction (some DBs use START TRANSACTION).",
                    "COMMIT makes changes permanent.",
                    "ROLLBACK undoes all changes in the transaction.",
                ],
                exampleTitle: "Example - safe update with rollback",
                example: `BEGIN;

UPDATE users SET email = 'new@email.com' WHERE id = 10;

-- If you realize it is wrong
ROLLBACK;

-- If correct
-- COMMIT;`,
                notes: [
                    "In apps, you usually open transaction in code and commit or rollback based on errors.",
                ],
            },
            {
                id: "whyNeeded",
                icon: <FiDatabase />,
                title: "Why transactions exist in real systems",
                points: [
                    "To maintain invariants - balances cannot go negative, stock cannot be oversold.",
                    "To handle failures safely - app crash mid request, network drop, timeouts.",
                    "To handle concurrency - multiple users buying the same item at the same time.",
                ],
                exampleTitle:
                    "Inventory example - oversell bug without transaction",
                example: `-- Imagine stock = 1
-- Two users buy at the same time

User A reads stock = 1
User B reads stock = 1
Both subtract 1
Stock becomes -1 (or both think purchase succeeded)`,
                notes: [
                    "Transactions plus locking or proper isolation prevent this.",
                ],
            },
            {
                id: "isolation",
                icon: <FiLock />,
                title: "Isolation levels (how strong isolation should be)",
                points: [
                    "Isolation level defines what you can see from other concurrent transactions.",
                    "Common levels - READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.",
                    "Higher isolation reduces anomalies but can reduce concurrency (more waiting).",
                ],
                exampleTitle: "Isolation level summary",
                example: `- READ UNCOMMITTED - can see uncommitted changes (dirty reads) - rarely used
- READ COMMITTED - only see committed data - common default
- REPEATABLE READ - same row read twice returns same value
- SERIALIZABLE - strongest - behaves like transactions ran one by one`,
                notes: [
                    "Defaults differ by database, and implementation details differ too.",
                ],
            },
            {
                id: "anomalies",
                icon: <FiAlertTriangle />,
                title: "Common concurrency anomalies (what isolation prevents)",
                points: [
                    "Dirty read - reading data that another transaction has not committed yet.",
                    "Non-repeatable read - same query returns different result inside same transaction.",
                    "Phantom read - rows appear or disappear between reads due to inserts by others.",
                    "Lost update - two transactions overwrite each other updates.",
                ],
                exampleTitle: "Non-repeatable read example idea",
                example: `Transaction A:
BEGIN;
SELECT balance FROM accounts WHERE id = 1; -- 100

Transaction B:
UPDATE accounts SET balance = 50 WHERE id = 1;
COMMIT;

Transaction A again:
SELECT balance FROM accounts WHERE id = 1; -- now 50 (changed)`,
                notes: [
                    "Repeatable read or serializable prevents this kind of surprise depending on DB.",
                ],
            },
            {
                id: "locksMvcc",
                icon: <FiCpu />,
                title: "Locks vs MVCC (how DBs implement isolation)",
                points: [
                    "Locks block other transactions from changing a row or table until transaction ends.",
                    "MVCC means Multi Version Concurrency Control - readers see a snapshot while writers create new versions.",
                    "Many modern DBs (Postgres) use MVCC heavily to reduce read locks.",
                ],
                exampleTitle: "Row lock example - SELECT FOR UPDATE",
                example: `BEGIN;

-- lock the row so others cannot modify until commit
SELECT balance
FROM accounts
WHERE id = 1
FOR UPDATE;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;

COMMIT;`,
                notes: [
                    "FOR UPDATE is common when you will update a row and want to prevent race conditions.",
                ],
                warningTitle: "Beginner traps",
                warning: `- Keeping transactions open too long (locks stay longer)
- Doing external API calls inside a transaction
- Updating rows in random order causing deadlocks`,
            },
            {
                id: "deadlocks",
                icon: <FiGitMerge />,
                title: "Deadlocks (when transactions block each other)",
                points: [
                    "Deadlock happens when Transaction A waits for a lock held by B, and B waits for a lock held by A.",
                    "Databases detect deadlocks and kill one transaction so the other can continue.",
                    "Best prevention - update rows in consistent order across the codebase.",
                ],
                exampleTitle: "Deadlock idea",
                example: `Transaction A locks row 1, then wants row 2
Transaction B locks row 2, then wants row 1
Both wait forever -> deadlock -> DB kills one`,
                notes: [
                    "If you see deadlock errors, retry the transaction in code with backoff.",
                ],
            },
            {
                id: "distributed",
                icon: <FiLayers />,
                title: "Distributed transactions (microservices reality)",
                points: [
                    "Distributed transaction means multiple systems must commit together.",
                    "Classic approach is 2PC (two-phase commit) but it is complex and can block.",
                    "Modern systems often use Saga pattern - sequence of steps with compensating actions.",
                ],
                exampleTitle: "Saga example - order payment flow",
                example: `- Step 1 - create order (PENDING)
- Step 2 - charge payment
- Step 3 - reserve inventory
- Step 4 - mark order as PAID

If step 3 fails:
- refund payment (compensation)
- mark order as CANCELED`,
                notes: [
                    "This is not one DB transaction, it is a workflow with recovery steps.",
                ],
            },
            {
                id: "mongoParallel",
                icon: <FiDatabase />,
                title: "MongoDB transactions (parallel notes for this repo)",
                points: [
                    "MongoDB supports multi-document transactions (in replica set and sharded clusters).",
                    "Transactions are useful but can be slower than single document atomic updates.",
                    "MongoDB single document updates are atomic by default - so embed related data when possible.",
                ],
                exampleTitle: "Mongo single document atomic update idea",
                example: `// atomic update inside one document
db.accounts.updateOne(
  { _id: ObjectId("...") },
  { $inc: { balance: -500 } }
);`,
                notes: [
                    "Use multi-document transactions when you cannot model the change as a single document update.",
                ],
            },
        ];
    }, []);

    useEffect(() => {
        const onOpen = (e) => {
            if (e?.detail?.key !== "transactions") return;
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
                            <FiShield />
                        </div>

                        <div className="meta">
                            <div className="title">Transactions</div>
                            <div className="subtitle">
                                ACID, isolation levels, locks, deadlocks,
                                distributed patterns
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
                                Transactions are your safety shield. They
                                prevent half-updates, race conditions, and weird
                                concurrency bugs. Learn them once and you will
                                debug backend issues 10x faster.
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

export default Transactions;
