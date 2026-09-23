import React from "react";
import {
    FiCoffee,
    FiCode,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiStar,
    FiYoutube,
} from "react-icons/fi";
import { Styled } from "./styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FiCode],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook],
    [
        "YouTube",
        "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        FiYoutube,
    ],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FiStar],
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="copy">
                Copyright © {year}{" "}
                <a
                    href="https://www.ashishranjan.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ashish Ranjan
                </a>
            </div>

            <nav className="links" aria-label="Social and support links">
                {links.map(([label, href, Icon]) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={
                            href.startsWith("mailto:")
                                ? undefined
                                : "noopener noreferrer"
                        }
                        aria-label={label}
                        title={label}
                    >
                        <Icon aria-hidden="true" />
                    </a>
                ))}
            </nav>
        </Styled.Wrapper>
    );
};

export default Footer;
