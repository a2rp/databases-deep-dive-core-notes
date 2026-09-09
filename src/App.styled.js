// App.styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,

    Header: styled.header`
        height: 60px;
        flex-shrink: 0;
    `,

    Main: styled.main`
        flex: 1;
        overflow-y: auto;
        position: relative;

        .studyNav {
            position: fixed;
            top: 60px;
            bottom: 0;
            left: 0;
            width: 248px;
            padding: 22px 14px;
            overflow-y: auto;
            background: var(--color-surface-2);
            border-right: 1px solid var(--color-border);
            z-index: 4;
        }
        .studyNavLabel { padding: 0 10px 10px; color: var(--color-text-muted); font-size: 11px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
        .studyNav nav { display: grid; gap: 4px; }
        .studyNav button { display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px; border-radius: 10px; color: var(--color-text-secondary); text-align: left; font-size: 13px; font-weight: 800; transition: background .16s ease, color .16s ease, transform .16s ease; }
        .studyNav button svg { flex: 0 0 auto; font-size: 16px; }
        .studyNav button:hover, .studyNav button.active { background: var(--color-primary); color: #fff; }
        .studyNav button:hover { transform: translateX(2px); }
        .studyNav p { margin: 18px 10px 0; color: var(--color-text-muted); font-size: 12px; }

        .contentWrapper {
            min-height: 100%;
            max-width: 1440px;
            margin: 0 0 0 248px;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            flex-shrink: 0;
        }

        /* Topic wrappers - used for same-page scroll targeting */
        .topicWrapper {
            scroll-margin-top: 84px;
            display: none;
        }
        .topicWrapper.activeTopic {
            display: block;
        }

        @media (max-width: 800px) {
            .studyNav { position: static; width: auto; margin: 12px; border: 1px solid var(--color-border); border-radius: 16px; max-height: 220px; }
            .studyNav nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .contentWrapper { margin-left: 0 !important; }
        }

        /* Optional - tiny spacing consistency */
        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        /* Pulse highlight when About scrolls here */
        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 28%, transparent);
                border-radius: 18px;
            }
            50% {
                box-shadow: 0 0 0 8px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
                border-radius: 18px;
            }
            100% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 0%, transparent);
                border-radius: 18px;
            }
        }
    `,
};
