import React from "react";
import { LuSend } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer  bg-gray-800 p-2 pb-6 max-w-[1200px] mx-auto  text-white">
      <nav>
        <p className="max-w-[254px] mx-auto h-[72px] pt-16">
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
              placeholder="Enter your email address"
              className="input input-bordered join-item"
            />
            <button className="btn bg-red-600 join-item">
              <LuSend />
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
