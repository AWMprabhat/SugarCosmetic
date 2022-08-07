import React from "react";
import "./footer.css";

function Fotter() {
  return (
    <div id="footer">
    <div className="footer-container">
      <div className="footer-company-logo">
        <div>
          <img
            src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
            alt="company logo"
          />
        </div>
      </div>
      <div className="footer-reachout-links">
        <div>
          <div>
            <a href="https://www.facebook.com/trySUGAR/">
              <img
                src="https://in.sugarcosmetics.com/desc-images/facebook.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Check+this+https://in.sugarcosmetics.com/pages/offer">
            {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRyTRQhT65ho12hl8YXcH7domm8Bx1An3-g&usqp=CAU" 
                 alt=""
              /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
               class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>

              
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/trysugar/?hl=en">
              <img
                src="https://in.sugarcosmetics.com/desc-images/Instagram.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.pinterest.com/sugarcosmetics/">
              <img
                src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://sugarcosmetics-blog.tumblr.com/">
              <img
                src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g">
              <img
                src="https://in.sugarcosmetics.com/desc-images/Youtube.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/trySUGAR">
              <img
                src="https://in.sugarcosmetics.com/sharebtn/Twitter.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-signup-app">
        <div>
          <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <div>
            <input
              type="email"
              placeholder="Your email address"
              role="textbox"
            />
            <div className="footer-signup-app-button">
              <button role="button">SIGN UP</button>
            </div>
          </div>
        </div>
        <div>
          <h5>GET THE NEW SUGAR APP TODAY.</h5>
          <div>
            <div id="footer-para">
              <p>Tap into a better shopping experience.</p>
            </div>
            <div id="footer-play-store">
              <a href="https://sugarcosmetics.app.link/WebFApp">
                <img
                  src="https://in.sugarcosmetics.com/playstore.png"
                  alt=""
                />
              </a>
            </div>
            <div id="footer-apple-store">
              <a href="https://sugarcosmetics.app.link/WebFApp">
                <img
                  src="https://in.sugarcosmetics.com/apple-store.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-information">
        <div>
          <h5>INFORMATION</h5>
        </div>
        <div>
          <div>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@sugarcosmetics.com">
              Contact Us
            </a>
          </div>
          <div>
            <a href="https://in.sugarcosmetics.com/pages/terms-conditions">
              Terms & Consitions
            </a>
          </div>
          <div>
            <a href="https://in.sugarcosmetics.com/pages/returns-refunds">
              Returns
            </a>
          </div>
          <div>
            <a href="https://in.sugarcosmetics.com/pages/faqs">FAQs</a>
          </div>
          <div>
            <a href="https://in.sugarcosmetics.com/pages/about-us">
              About Us
            </a>
          </div>
        </div>
      </div>
      <div className="footer-get-in-touch">
        <div>
          <h5>GET IN TOUCH</h5>
        </div>
        <div>
          <div className="footer-get-in-touch-box1">
            <div>
              <img
                src="https://in.sugarcosmetics.com/desc-images/phone_android_white.svg"
                alt=""
              />
              <div>Call us at</div>
            </div>
            <a href="">1800-209-9933</a>
            <div>Monday to Friday : 9 AM to 7 PM</div>
          </div>
          <div className="footer-get-in-touch-box2">
            <div>Support</div>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@sugarcosmetics.com">
              hello@sugarcosmetics.com
            </a>
          </div>
          <div className="footer-get-in-touch-box3">
            <div>WORK WITH US</div>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=careers@sugarcosmetics.com">
              careers@sugarcosmetics.com
            </a>
          </div>
          <div className="footer-get-in-touch-box4">
            <div>PRESS & MEDIA</div>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pr@sugarcosmetics.com">
              pr@sugarcosmetics.com
            </a>
          </div>
          <div className="footer-get-in-touch-box5">
            <div>INFLUENCER COLLAB</div>
            <a href="https://blog.sugarcosmetics.com/collab">JOIN US</a>
          </div>
        </div>
      </div>
      <hr/>
      <div>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</div>
      
    </div>
  </div>
  );
}

export default Fotter;
