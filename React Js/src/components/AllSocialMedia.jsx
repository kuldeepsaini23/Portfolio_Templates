import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import {SiLeetcode, SiHackerrank, SiGeeksforgeeks, SiValorant} from 'react-icons/si';


const AllSocialMedia = () => (
  <div className="app__all-social">
    <div>
      <a href="https://www.facebook.com/KuldeepSaini2311/" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/kuldeepsaini23/" target="_blank" rel="noreferrer">
        <ImLinkedin2 />
      </a>
    </div>
    <div>
      <a href="https://leetcode.com/kuldeepsaini23/" target="_blank" rel="noreferrer">
        <SiLeetcode />
      </a>
    </div>
    <div>
      <a
        href="https://twitter.com/kuldeepsaini_23"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/kuldeepsaini23"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/kuldeepsaini_23/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>

    <div>
      <a href="https://www.youtube.com/@UltraFlick" target="_blank" rel="noreferrer">
        <BsYoutube />
      </a>
    </div>

    <div>
      <a href="https://www.hackerrank.com/kuldeepsaini0231" target="_blank" rel="noreferrer">
        <SiHackerrank />
      </a>
    </div>

    <div>
      <a href="https://auth.geeksforgeeks.org/user/kuldeepsaini23" target="_blank" rel="noreferrer">
        <SiGeeksforgeeks />
      </a>
    </div>


    <div>
      <a href="https://tracker.gg/valorant/profile/riot/deku%232311/overview" target="_blank" rel="noreferrer">
        <SiValorant />
      </a>
    </div>

  </div>
);

export default AllSocialMedia;
