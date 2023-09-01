import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <div className="contactUs-background-img-div">
        <h2 className="contactUs-heading">Contact Us</h2>
      </div>
      <div className="contactUs-cart-grid-div">
        <div>
          <h2 className="commonColor-siz">Get in Touch</h2>

          <div>
            <h4>Contact</h4>
            <p>+88 01700000000</p>
            <p>+88 017xxxxxxxx</p>
            <p>+88 01708080808</p>
          </div>
          <div>
            <div>
              <h4>Assistance Hour:</h4>
              <p>Sat - Thu 09:00am - 5:00pm</p>
              <p>Friday - CLOSED</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="commonColor-siz">Address and Mail</h2>

          <div>
            <h4>Address</h4>
            <p>lorem Business Center (Level 4)</p>
            <p>Ka-217/3, lorem address</p>
            <p>Dhaka 1217</p>
          </div>
          <div>
            <h4>E-mail</h4>
            <p>infolorem@gmail.com</p>
            <p>supportlorem@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="commonColor-siz">Social Media</h2>
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

export default ContactUs;
