import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    let navlinks = document.querySelectorAll(".social-network a");

    navlinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate(${attrX}px, ${attrY}px)`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <img
              className="imageFooter"
              src={`${require("../image/contact/facebook.png")}`}
              alt="facebook"
            />
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <img
              className="imageFooter"
              src={`${require("../image/contact/twitter.png")}`}
              alt="twitter"
            />
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <img
              className="imageFooter"
              src={`${require("../image/contact/instagram.png")}`}
              alt="instagram"
            />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
