import React from 'react';

const FooterLinks = ({ title, links }) => (
    <div className="footer-links">
        <h4>{title}</h4>
        <ul>
            {links.map((link, index) => (
                <li key={index}><a href={link.href}>{link.label}</a></li>
            ))}
        </ul>
    </div>
);


const Footer = () => {
    const navLinks = [ {href: "#", label: "Home"}, {href: "#", label: "Tournaments"}, {href: "#", label: "Support"}, {href: "#", label: "Contact Us"}];
    const resourceLinks = [ {href: "#", label: "API"}, {href: "#", label: "Partners"}, {href: "#", label: "Blog"}];
    const legalLinks = [ {href: "#", label: "Terms of Service"}, {href: "#", label: "Privacy Policy"} ];

    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-left">
                    <a href="/" className="logo">ArenaGG</a>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-right">
                    <FooterLinks title="Navigation" links={navLinks} />
                    <FooterLinks title="Resources" links={resourceLinks} />
                    <FooterLinks title="Legal" links={legalLinks} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;