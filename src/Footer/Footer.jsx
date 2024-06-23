import React from "react";
import { LuSend } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-footerColor">
      <div className="footer   pt-[40px] pb-[70px] md:px-[120px] text-white">
        <nav>
          <p className="md:w-[254px] mx-auto h-[72px] pt-16">
            <small>
              Lepeakers is a company in the field of technology, we were founded
              in 1998
            </small>
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Navigation</h6>
          <a className="link link-hover">Get Ticket</a>
          <a className="link link-hover">Schedule</a>
          <a className="link link-hover">Speakers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Learn More</h6>
          <a className="link link-hover">Terms Of Use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <p>
            <small>Don't miss the latest information on this platform</small>
          </p>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                d:max-
                placeholder="Email address"
                className="input input-bordered join-item bg-emailColor"
              />
              <button className="btn bg-red-600 join-item">
                <LuSend />
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
