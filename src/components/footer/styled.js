import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 18px 15px 24px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copy {
            line-height: 1.6;
        }

        .copy a {
            color: var(--color-text-secondary);
            font-weight: 700;
        }

        .copy a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
        }

        .links a {
            display: inline-grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            color: var(--color-text-secondary);
            transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
        }

        .links a:hover {
            color: var(--color-text-primary);
            border-color: var(--color-accent);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 18%, transparent);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;

            .links {
                justify-content: flex-start;
            }
        }
    `,
};
