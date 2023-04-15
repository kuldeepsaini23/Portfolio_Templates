import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
import {ImLinkedin2} from "react-icons/im";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/kuldeepsaini_23" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/kuldeepsaini23/" rel="noreferrer">
        <ImLinkedin2 />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/kuldeepsaini_23/" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
