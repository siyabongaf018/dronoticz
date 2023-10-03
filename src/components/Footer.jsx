import { FaPinterest, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer__socials">
      <ul className="footer__socialsIcon">
          <li>
            <a href="#footer"><FaTwitter size={32} /></a>

          </li>
          <li>
            <a href="#footer"><FaLinkedin size={32} /></a>
          </li>
          <li>
            <a href="#footer"><FaPinterest size={32}  /></a>
          </li>
        </ul>
        {/* <p>Social icons</p> */}
      </div>

      <div className="footer__nav">
        <ul className="footer__menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#article">Article</a>
          </li>
        </ul>
        <a href="#subscribe">
          <button className="footer__nav_btn "> SUBSCRIBE </button>
        </a>
      </div>
    </section>
  );
};

export default Footer;
