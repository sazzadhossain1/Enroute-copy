import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-grid-div">
        <div className="whth-over-img-text-div">
          <img
            src="https://enroute.com.bd/wp-content/uploads/2022/02/footer_logo.png"
            alt=""
          />
          <p className="text-common-color with-over ">
            With over 15 years of pioneering change Enroute is the name and
            brand you can trust for your next growth partnership
          </p>
        </div>
        <div className="contact-parent-footer-div">
          <h3 className="text-common-color text-common-siz">Contact Us</h3>
          <div className="blank-footer-div"></div>
          <div className="footer-flex-div">
            <img
              src="https://enroute.com.bd/wp-content/uploads/2022/02/location-icon.png"
              alt=""
            />
            <p className="text-common-color">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              excepturi eveniet?
            </p>
          </div>
          <div className="footer-flex-div">
            <img
              src="https://enroute.com.bd/wp-content/uploads/2022/02/phone-icon.png"
              alt=""
            />
            <div>
              <p className="text-common-color">+88 01735440814</p>
              <p className="text-common-color">+88 01915686124</p>
            </div>
          </div>
          <div className="footer-flex-div">
            <img
              src="https://enroute.com.bd/wp-content/uploads/2022/02/massage-icon.png"
              alt=""
            />
            <p className="text-common-color">sazzadtomal1@gmail.com</p>
          </div>
        </div>
        <div className="link-parent-div">
          <h3 className="text-common-color text-common-siz">Links</h3>
          <div className="blank-footer-div"></div>
          <div className="link-children-div">
            <Link className="text-common-color ">About Us</Link>
            <br />
            <Link className="text-common-color">Blog</Link>
            <br />
            <Link className="text-common-color">HRMS</Link>
            <br />
            <Link className="text-common-color">Hot Jobs</Link>
          </div>
        </div>
        <div className="footer-parent-media-logo-div">
          <h3 className="text-common-color text-common-siz">Newsletter</h3>
          <div className="blank-footer-div"></div>
          <div className="footer-input-btn-div">
            <input className="footer-input" type="email" placeholder="Email" />
            <button className="text-common-color subscribe">SUBSCRIBE</button>
          </div>
          <div className="footer-flex-parent-logo-div">
            <div className="footer-logo-div">
              <img
                className="footer-logo"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png"
                alt=""
              />
            </div>
            <div className="footer-logo-div">
              <img
                className="footer-logo"
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                alt=""
              />
            </div>
            <div className="footer-logo-div">
              <img
                className="footer-logo"
                src="https://cdn-icons-png.flaticon.com/512/48/48968.png"
                alt=""
              />
            </div>
            <div className="footer-logo-div">
              <img
                className="footer-logo"
                src="https://thumbs.dreamstime.com/b/linkedin-icon-iphone-realistic-texture-pulse-was-news-aggregation-app-originally-developed-android-ios-html-browsers-207165281.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
