import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function FooterSocialLinks() {
  return (
    <div>
      <ul className="flex gap-8 justify-center">
        <li className="w-8 h-8">
          <a
            href="https://www.facebook.com/profile.php?id=100086238966585"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-full h-full" />
          </a>
        </li>
        <li className="w-8 h-8">
          <a
            href="https://www.instagram.com/tt_farguais/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-full h-full" />
          </a>
        </li>
      </ul>
    </div>
  );
}
