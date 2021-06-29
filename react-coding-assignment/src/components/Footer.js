import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>APIs</h1>
            <ul>
              <li>Creative Cloud</li>
              <li>Document Cloud</li>
              <li>Exerience Cloud</li>
            </ul>
          </div>
          <div className="col">
            <h1>Blogs and Community</h1>
            <ul>
              <li>Adobe Tech Blog</li>
              <li>Adobe on Github</li>
            </ul>
          </div>
          <div className="col">
            <h1>Developer Resources</h1>
            <ul>
              <li>Go To Adobe.io to create plugins</li>
              <li>Go To Exchange portal to publish plugins</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>User Resources</h1>
            <ul>
              <li>Fourm</li>
              <li>Help & Troubleshooting</li>
            </ul>
          </div>
          <div className="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Adobe Developer Support</li>
              <li>Release Notes</li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
