import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div>
        <div>
          <img
            src="https://enroute.com.bd/wp-content/uploads/2022/02/footer_logo.png"
            alt=""
          />
          <p>
            With over 15 years of pioneering change Enroute is the name and
            brand you can trust for your next growth partnership
          </p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div></div>
          <div>
            <img
              src="https://enroute.com.bd/wp-content/uploads/2022/02/location-icon.png"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              excepturi eveniet?
            </p>
          </div>
          <div>
            <img
              src="https://enroute.com.bd/wp-content/uploads/2022/02/phone-icon.png"
              alt=""
            />
            <div>
              <p>+8801735440814</p>
              <p>+8801915686124</p>
            </div>
          </div>
          <div>
            <img
              src="https://enroute.com.bd/wp-content/uploads/2022/02/massage-icon.png"
              alt=""
            />
            <p>sazzadtomal1@gmail.com</p>
          </div>
        </div>
        <div>
          <h3>Links</h3>
          <div></div>
          <Link>About Us</Link>
          <Link>Blog</Link>
          <Link>HRMS</Link>
          <Link>Hot Jobs</Link>
        </div>
        <div>
          <h3>Newsletter</h3>
          <div></div>
          <input type="email" placeholder="Email" />
          <button>SUBSCRIBE</button>
          <div>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
              alt=""
            />
            <img
              src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/48/48968.png"
              alt=""
            />
            <img
              src="https://thumbs.dreamstime.com/b/linkedin-icon-iphone-realistic-texture-pulse-was-news-aggregation-app-originally-developed-android-ios-html-browsers-207165281.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
