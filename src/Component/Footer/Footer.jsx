import img1 from "../../../public/image/Atmemly-Logo.svg";
import {
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section id="footer  " className="bg-zinc-50 ">
        <div className="container flex items-start justify-center mx-auto">
          <div className="container flex-col w-1/4 p-11 ">
            <img
              src={img1
                
              }
              alt="logo"
              width="85px"
              className="ml-16"
            />
            <h1 className="mt-16 place-items-start text-neutral-400">
              Atmemly is a buying and selling site for small services that
              benefit society and develop creativity skills. It was created in
              2022 and connects a seller who provides a service with a buyer who
              wants to buy the service. The benefit is for both sides, for young
              sellers who want to unleash innovative and unique work and buyers
              to provide distinctive services that benefit their emerging
              projects.
            </h1>
          </div>
          <div className="container w-1/4 ">
            <h1 className="text-2xl font-bold text-sky-300 font-pops mb-14 mt-14">
              My Account
            </h1>

            <ul>
              <li>
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link to="/about" className="hover:text-sky-300 text-zinc-800">
                  About
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link to="/faqs" className="hover:text-sky-300 text-zinc-800">
                  Faqs
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link to="/terms" className="hover:text-sky-300 text-zinc-800">
                  Terms of use
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link
                  to="/privacy"
                  className="hover:text-sky-300 text-zinc-800"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link
                  to="/atmemly"
                  className="hover:text-sky-300 text-zinc-800"
                >
                  Atmemly Guide
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500 "></span>
                <Link
                  to="/contactus"
                  className="hover:text-sky-300 text-zinc-800"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="container w-1/4 ">
            <h1 className="text-2xl font-bold text-sky-300 font-pops mb-14 mt-14">
              Sections
            </h1>

            <ul>
              <li>
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link
                  to="/programming"
                  className="hover:text-sky-300 text-zinc-800"
                >
                  Programming
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link
                  to="/graphicdesign"
                  className="hover:text-sky-300 text-zinc-800"
                >
                  Graphic Design
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link
                  to="/blogging"
                  className="hover:text-sky-300 text-zinc-800"
                >
                  Blogging
                </Link>
              </li>
              <li className="my-8">
                <span className="inline-block w-2 h-2 mr-4 rounded bg-neutral-500"></span>
                <Link
                  to="/marketing"
                  className="hover:text-sky-300 text-zinc-800"
                >
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="container w-1/4 ">
            <h1 className="text-2xl font-bold text-sky-300 font-pops mb-14 mt-14">
              Contact Us
            </h1>

            <ul>
              <li>
                <span className="inline-block mr-4 text-xl rounded text-sky-300">
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </span>
                <a href="#" className="hover:text-sky-300 text-zinc-800">
                  DUBAI - BUSINESS BAY
                </a>
              </li>
              <li className="my-8">
                <span className="inline-block mr-4 text-xl rounded text-sky-300">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a href="#" className="hover:text-sky-300 text-zinc-800">
                  info@atmemly.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="Atmemly" className="my-5 text-center">
        <a href="#" className="text-2xl text-zinc-800 font-pops">
          Atmemly &copy; 2023 Powered by{" "}
          <span className="text-yellow-600">Dubisign</span>
        </a>
      </section>
    </>
  );
};

export default Footer;
