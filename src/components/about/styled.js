// src/components/about/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 16px;
    `,

    TopRow: styled.div`
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        gap: 14px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,

    TitleBlock: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 14px 40px var(--color-shadow);
        padding: 16px;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: -2px;
            background:
                radial-gradient(
                    520px 220px at 14% 0%,
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                    transparent 62%
                ),
                radial-gradient(
                    540px 240px at 86% 14%,
                    color-mix(in srgb, var(--color-accent) 14%, transparent),
                    transparent 66%
                );
            opacity: 0.9;
            pointer-events: none;
        }

        & > * {
            position: relative;
            z-index: 1;
        }
    `,

    Badge: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 80%, transparent);

        .icon {
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                transparent
            );
            color: var(--color-text-primary);

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .text {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            font-size: 13px;
        }
    `,

    Title: styled.h2`
        margin-top: 12px;
        font-size: 26px;

        @media (max-width: 520px) {
            font-size: 22px;
        }
    `,

    Subtitle: styled.p`
        margin-top: 8px;
        color: var(--color-text-secondary);
        font-size: 14px;
        max-width: 68ch;
    `,

    Actions: styled.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,

    PrimaryBtn: styled.button`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 14px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 20%, transparent);
        color: var(--color-text-primary);
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        .btnIcon {
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: color-mix(
                in srgb,
                var(--color-primary) 22%,
                transparent
            );
            border: 1px solid
                color-mix(in srgb, var(--color-border) 70%, transparent);

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .btnText {
            font-weight: 900;
            font-size: 14px;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-primary) 26%,
                transparent
            );
            box-shadow: 0 16px 44px var(--color-shadow);
        }

        &:active {
            transform: translateY(0px);
        }
    `,

    SecondaryLink: styled.a`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 14px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 84%, transparent);
        color: var(--color-text-primary);
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        .btnIcon {
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: color-mix(
                in srgb,
                var(--color-accent) 16%,
                transparent
            );
            border: 1px solid
                color-mix(in srgb, var(--color-border) 70%, transparent);

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .btnText {
            font-weight: 900;
            font-size: 14px;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            box-shadow: 0 16px 44px var(--color-shadow);
            text-decoration: none;
        }

        &:active {
            transform: translateY(0px);
        }
    `,

    StatsGrid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    `,

    StatCard: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 14px 40px var(--color-shadow);
        padding: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        .icon {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
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
        }

        .value {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 16px;
        }

        .label {
            color: var(--color-text-muted);
            font-size: 12px;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 92%,
                transparent
            );

            .icon {
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    transparent
                );
            }
        }
    `,

    Body: styled.div`
        margin-top: 12px;
        display: grid;
        gap: 12px;
    `,

    Section: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface) 88%, transparent);
        box-shadow: 0 14px 40px var(--color-shadow);
        padding: 14px;
    `,

    SectionHeader: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .icon {
            width: 44px;
            height: 44px;
            display: grid;
            place-items: center;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 16px;
        }

        .hint {
            color: var(--color-text-muted);
            font-size: 12px;
            margin-top: 2px;
        }
    `,

    SearchWrap: styled.label`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: color-mix(in srgb, var(--color-surface-2) 86%, transparent);
        min-width: 280px;
        transition:
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;

        svg {
            width: 18px;
            height: 18px;
            color: var(--color-text-muted);
        }

        input {
            border: 0;
            padding: 0;
            border-radius: 0;
            background: transparent;
            width: 100%;
            min-width: 0;
            outline: none;
        }

        &:hover {
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 94%,
                transparent
            );
        }

        &:focus-within {
            border-color: color-mix(
                in srgb,
                var(--color-primary) 60%,
                var(--color-border)
            );
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                0 14px 40px var(--color-shadow);

            svg {
                color: var(--color-text-secondary);
            }
        }

        @media (max-width: 520px) {
            min-width: 100%;
        }
    `,

    TopicGrid: styled.div`
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 620px) {
            grid-template-columns: 1fr;
        }
    `,

    TopicCard: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface-2) 80%, transparent);
        padding: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease,
            box-shadow 140ms ease;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                520px 220px at 16% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 60%
            );
            opacity: 0;
            transition: opacity 160ms ease;
            pointer-events: none;
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                0 18px 48px var(--color-shadow);
        }

        .row {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .icon {
            width: 38px;
            height: 38px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .tag {
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );
            font-size: 12px;
            color: var(--color-text-secondary);
            width: fit-content;
        }

        .desc {
            margin-top: 8px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .foot {
            margin-top: 12px;
            display: flex;
            justify-content: flex-end;
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
                var(--color-surface) 88%,
                transparent
            );
            color: var(--color-text-muted);
            font-size: 12px;

            svg {
                width: 16px;
                height: 16px;
            }
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 90%,
                transparent
            );
            box-shadow: 0 18px 48px var(--color-shadow);

            &::after {
                opacity: 1;
            }

            .icon {
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    transparent
                );
            }

            .chip {
                color: var(--color-text-secondary);
            }
        }
    `,

    EmptyState: styled.div`
        margin-top: 12px;
        border: 1px dashed var(--color-border);
        border-radius: 18px;
        padding: 18px;
        display: grid;
        gap: 6px;
        place-items: center;
        text-align: center;
        background: color-mix(in srgb, var(--color-surface-2) 70%, transparent);

        .icon {
            width: 48px;
            height: 48px;
            display: grid;
            place-items: center;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .desc {
            color: var(--color-text-muted);
            font-size: 13px;
            max-width: 60ch;
        }
    `,

    MiniGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,

    MiniCard: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 18px;
        background: color-mix(in srgb, var(--color-surface-2) 82%, transparent);
        padding: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        .head {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .icon {
            width: 38px;
            height: 38px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        ul {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
            padding-left: 16px;
            position: relative;
        }

        li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: color-mix(
                in srgb,
                var(--color-accent) 70%,
                transparent
            );
            border: 1px solid var(--color-border);
        }

        .links {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .links a {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 90%,
                transparent
            );
            color: var(--color-text-secondary);
            transition:
                transform 140ms ease,
                border-color 140ms ease,
                background-color 140ms ease;

            svg {
                width: 18px;
                height: 18px;
                color: var(--color-text-muted);
            }
        }

        .links a:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface) 96%,
                transparent
            );
            color: var(--color-text-primary);
            text-decoration: none;

            svg {
                color: var(--color-text-secondary);
            }
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 90%,
                transparent
            );
        }
    `,
};
