import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger House</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <p>We give attention to genuine feedback.</p>

        <strong>All right received @burgerhouse</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
