import React from "react";
import { LuSend } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-footerColor">
      <div className="footer   pt-[40px] pb-[70px] md:px-[120px] text-white">
        <nav>
          <p className="md:w-[254px] mx-auto h-[72px] pt-16 font-inter text-[16px]">
            Lepeakers is a company in the field of technology, we were founded
            in 1998
          </p>
        </nav>
        <nav>
          <h6 className="footer-title  font-inter font-bold">Navigation</h6>
          <a className="link link-hover font-inter font-normal">Get Ticket</a>
          <a className="link link-hover  font-inter font-normal">Schedule</a>
          <a className="link link-hover  font-inter font-normal">Speakers</a>
        </nav>
        <nav>
          <h6 className="footer-title font-inter font-bold">Learn More</h6>
          <a className="link link-hover  font-inter font-normal">
            Terms Of Use
          </a>
          <a className="link link-hover  font-inter font-normal">
            Privacy policy
          </a>
          <a className="link link-hover  font-inter font-normal">FAQ</a>
        </nav>
        <form>
          <h6 className="footer-title font-inter font-bold">Newsletter</h6>
          <p className=" font-inter font-normal">
            Don't miss the latest information on this platform
          </p>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                d:max-
                placeholder="Email address"
                className="input input-bordered join-item bg-emailColor font-roboto"
              />
              <button className="btn bg-buttonCustomColor join-item">
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
