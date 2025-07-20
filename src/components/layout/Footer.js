import React from 'react';
import './Footer.css'; // Import the styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>buyandsell Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* <div className="footer-col">
          <h4>GROUP COMPANIES</h4>
          <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div> */}

        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONSUMER POLICY</h4>
          <ul>
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        <div className="footer-col mail-section">
          <h4>Mail Us:</h4>
          <p>
            buyandsell Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Hinjewadi Village,<br />
            Pune, 414003,<br />
            Maharashtra, India
          </p>
        </div>

        <div className="footer-col mail-section">
          <h4>Registered Office Address:</h4>
          <p>
            buyandsell Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Hinjewadi,<br />
            Pune, 414003,<br />
            Maharashtra, India<br />
            CIN : U51109KA2012PTC066107<br />
            Telephone: <a href="tel:08845614700">088-45614700</a> / <a href="tel:08867415800">088-67415800</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <span>🧳 Become a Seller</span>
          <span>🌟 Advertise</span>
          <span>🎁 Gift Cards</span>
          <span>❓ Help Center</span>
        </div>
        <div className="footer-copy">
          © 2007-{new Date().getFullYear()} buyandsell.com
        </div>
        <div className="footer-payment-icons">
          {/* Replace these spans with actual icons/images if needed */}
          <span>🧾</span> <span>💳</span> <span>💰</span> <span>🚚</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
