// src/topics/replication/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 10px auto;
        padding: 0 16px;
        scroll-margin-top: 84px;
    `,

    Card: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 16px 46px var(--color-shadow);
        overflow: hidden;
    `,

    CardHeader: styled.div`
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer;
        user-select: none;

        background-image: radial-gradient(
            620px 260px at 14% 0%,
            color-mix(in srgb, var(--color-primary) 14%, transparent),
            transparent 62%
        );

        transition:
            background-color 140ms ease,
            border-color 140ms ease;

        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-surface-2) 40%,
                transparent
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 44px;
            height: 44px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 16%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .meta {
            display: grid;
            gap: 2px;
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 16px;
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            max-width: 72ch;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-text-muted);
            }

            @media (max-width: 520px) {
                display: none;
            }
        }

        .toggleIcon {
            width: 36px;
            height: 36px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }
    `,

    Body: styled.div`
        padding: 14px;
        border-top: 1px solid var(--color-border);
        display: grid;
        gap: 12px;
    `,

    Intro: styled.div`
        display: flex;
        align-items: flex-start;
        gap: 12px;
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface-2) 78%, transparent);

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,

    SectionGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,

    Section: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 12px;
        background: color-mix(in srgb, var(--color-surface) 86%, transparent);
        position: relative;
        overflow: hidden;

        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                560px 240px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );
            box-shadow: 0 18px 52px var(--color-shadow);

            &::after {
                opacity: 1;
            }
        }

        .secHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .secIcon {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .points {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }

        .points li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .points li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .block {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .blockTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 30%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: color-mix(
                in srgb,
                var(--color-text-primary) 92%,
                transparent
            );
            font-size: 12px;
            line-height: 1.65;
        }

        .notes {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 10px 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .notesTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .notes ul {
            display: grid;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .notes li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            padding-left: 16px;
            position: relative;
        }

        .notes li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-primary) 72%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .warn {
            margin-top: 12px;
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 40%,
                    var(--color-border)
                );
            border-radius: 16px;
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                var(--color-code-bg)
            );
        }

        .warnTitle {
            padding: 10px 12px;
            border-bottom: 1px solid
                color-mix(
                    in srgb,
                    var(--color-warning) 30%,
                    var(--color-border)
                );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );
        }
    `,
};
