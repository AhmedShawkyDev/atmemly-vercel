import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderSwiper from "../../headerSwiper/HeaderSwiper.jsx";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import Sections from "../../sectionslider/Sections.jsx";
import LastAdd from "../../lastadd/LastAdd.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contactusc from "../../Component/Contactusc/Contactusc.jsx";
import img1 from "../../../public/image/nodata.png"
import img2 from "../../../public/image/Group46974.svg"
import img3 from "../../../public/image/98877.svg"
import img4 from "../../../public/image/Group20570.svg"
import img5 from "../../../public/image/rotated-right-arrow-svgrepo-com2.svg"
import img6 from "../../../public/image/94539.png"
import img7 from "../../../public/image/Group20570.png"
import img8 from "../../../public/image/rotated-right-arrow-svgrepo-com.svg"
import img9 from "../../../public/image/logo-3.png"
import img10 from "../../../public/image/Group205703.png"
import img11 from "../../../public/image/Group20581.png"
import img12 from "../../../public/image/Group20582.png"
import img13 from "../../../public/image/Group20583.png"
import img14 from "../../../public/image/Group46951.png"

const Home = () => {
  const [howwe, setHowWe] = useState([]);
  const [start, setStart] = useState([]);
  const [upload, setUpload] = useState([]);
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);

  const changee = (event) => {
    setSearch(event.target.value);
    setResponse(null);
  };
  const [about, setAbout] = useState([]);

  const sent = () => {
    getdata();
  };
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://api-atmemly.luxurylivinghomes.ae/api/pages/home"
      );
      // console.log(res.data.data.upload_app.locales.en.description);
      setHowWe(res.data.data.how_do_we_work.en.description);
      setStart(res.data.data.start_your_project.en.description);
      setUpload(res.data.data.upload_app.locales.en.description);
    }
    getData();
  }, []);

  useEffect(() => {
    async function about() {
      const res = await axios.get(
        "https://api-atmemly.luxurylivinghomes.ae/api/pages/general"
      );
      setAbout(res.data.data.site_description.en.description);
    }
    about();
  }, []);

  async function getdata() {
    const res = await axios.get(
      `https://api-atmemly.luxurylivinghomes.ae/api/search/${search}`
    );

    setResponse(res.data.data);
    console.log(res.data.data);
  }
  console.log(response);
  return (
    <>
      <NavBar />

      <section id="hero">
        <div className="container mx-auto px-6 space-x-6 flex flex-row justify-between mt-[3rem]">
          <div className="flex flex-col justify-center w-1/2 2xl:ml-20 ">
            <h1 className="font-bold 2xl:text-5xl 2xl:leading-[75px] lg:text-6xl fonts-pops text-neutral-700 w-[88%] lg:leading-[5.625rem] md:text-5xl md:leading-normal ">
              We have a selection of the best{" "}
              <span className="text-sky-300">Freelancers</span> in the{" "}
              <span className="text-sky-300">Arab</span>
              World
            </h1>
            <h3 className=" 2xl:text-[27px] lg:text-3xl	 text-neutral-400 font-normal	fonts-pops pt-6   md:text-2xl">
              We have a selected group of freelancers from various Arab worlds.
              You can get your service here with high quality and efficiency in
              many fields
            </h3>
            <div className="flex justify-between gap-1 lg:mt-12 ">
              <input
                onChange={changee}
                value={search}
                type="text"
                placeholder="Search"
                className="border border-neutral-400  2xl:rounded-tl-lg  2xl:text-sm 2xl:rounded-bl-lg 2xl:py-1 lg:p-4 md:p-2 lg:pl-3  md:rounded-tl-lg  md:rounded-bl-lg lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-2xl lg:rounded-br-[100px] lg:text-2xl md:text-sm md:w-[100%] "
              />

              <button
                onClick={sent}
                className=" 2xl:py-4 2xl:text-base font-pops lg:bg-sky-300   hover:bg-white text-white  hover:text-sky-300   border border-sky-300 hover:border-sky-300  md:px-8 md:text-xs  md:pr-4  md:rounded-tr-lg  md:rounded-br-lg  lg:px-11 lg:py-4 lg:rounded-tl-[100px] lg:rounded-bl-xl lg:rounded-tr-2xl lg:rounded-br-xl lg:text-2xl transition-all ease-in-out duration-300"
              >
                Search
              </button>
            </div>
            <div>
              <ul>
                {response?.map((item) => {
                  if (item.slug === "test" && search !== "") {
                    return (
                      <li
                        key={item.id}
                        className="w-[100%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex-g"
                      >
                        {item.title}
                        <Link
                          to="/services"
                          className="bg-sky-300 hover:bg-white text-white hover:text-sky-300 border border-sky-300 hover:border-sky-300 px-4 py-2 rounded-lg transition-all ease-in-out duration-300 ml-[230px]"
                        >
                          Service
                        </Link>
                      </li>
                    );
                  }
                })}
                {response?.length === 0 && search !== "" && (
                  <li className="w-[100%] h-[300px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col">
                      <img
                        src={img1}
                        alt="No Data"
                        className="mx-auto my-auto mt-16"
                      />
                      <p className="mx-auto my-auto mt-4">No data found</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <HeaderSwiper />
          </div>
        </div>
      </section>

      <section id="how we">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center mt-11 w-[66%]  ">
          <h1 className="text-6xl font-medium fonts-pops text-neutral-700 text-sky-300">
            How we work ?
          </h1>

          <img src={img2} className="mt-6" alt="" />

          <span className="mt-3 ">
            <h1 className="font-medium  fonts-pops text-neutral-700  text-[14px] w-[909px] text-center leading-6 ">
              {howwe}
            </h1>
          </span>
        </div>
      </section>

      <section id="ask for" className="flex items-center justify-center mt-10">
        <div className="container border border-neutral-300 flex justify-center items-center p-[30px] w-[88%]">
          <div className="flex flex-col items-center justify-center w-1/3 py-12">
            <img src={img3} alt="" className="mt-3" />
            <img
              src={img4}
              alt=""
              className="mt-3"
            />
            <h1 className="mt-3 mb-2 text-3xl font-semibold text-sky-300 font-pops">
              Browse services
            </h1>
            <h2 className="mt-2 font-light text-center font-pops">
              Explore and compare services to choose what suite you the most
            </h2>
          </div>

          <img
            src={img5}
            alt=""
          />

          <div className="flex flex-col items-center justify-center w-1/3 py-12">
            <h1 className="mt-3 mb-2 text-3xl font-semibold text-sky-300 font-pops">
              Ask for service
            </h1>
            <h2 className="mt-2 font-light text-center font-pops">
              Make an order then follow up implementation with the freelancer
            </h2>
            <img src={img6} alt="" className="mt-3" />
            <img
              src={img7}
              alt=""
              className="mt-3"
            />
          </div>

          <img
            src={img8}
            alt=""
          />

          <div className="flex flex-col items-center justify-center w-1/3 py-12">
            <img src={img9} alt="" className="mt-3" />
            <img
              src={img10}
              alt=""
              className="mt-3"
            />
            <h1 className="mt-3 mb-2 text-3xl font-semibold text-sky-300 font-pops">
              Receive
            </h1>
            <h2 className="mt-2 font-light text-center font-pops">
              Receive your service with quality and time agreed on
            </h2>
          </div>
        </div>
      </section>

      <section
        id="about us"
        className="flex justify-center items-center  mt-10 bg-zinc-50 px-[220px] py-[62px] "
      >
        <div className="container flex items-center justify-center w-1/2 ">
          <img
            src={img11}
            alt="about-logo"
            className="mr-36"
          />
        </div>
        <div className="container flex flex-col w-1/2 place-items-start">
          <span className="px-8 py-3 text-sm rounded-lg bg-cyan-50 text-sky-300 font-pops text-bold ">
            Who we are
          </span>
          <h1 className="mt-3 text-5xl font-semibold text-sky-300 font-pops ">
            About Us
          </h1>
          <h3 className="mt-8 font-light font-pops mb-48 text-neutral-400 text-left w-[720px]">
            {about}
          </h3>
          <button className="py-3 text-center text-white transition-all duration-300 ease-in-out border rounded-lg bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300 px-14">
            Show More
            <FontAwesomeIcon icon={faAnglesRight} className="ml-4" />
          </button>
        </div>
      </section>

      <section
        id="sections  "
        className="flex items-center justify-center mt-9 "
      >
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold text-sky-300 font-pops">
            Sections
          </h1>
          <img
            src={img2}
            className="mt-4 pb-14"
            alt=""
          />
          <Sections />
        </div>
      </section>

      <section
        id="start your"
        className="flex items-center justify-center mt-16 align-center bg-zinc-50"
      >
        <div className="container flex flex-col pl-20 mt-16 place-items-start ">
          <h1 className="text-5xl font-semibold text-sky-300 font-pops ">
            Start your project
          </h1>
          <h3 className="mt-8 font-light font-pops mb-16 text-neutral-800 text-left w-[720px] ">
            {start}
          </h3>
        </div>
        <button className="py-3 text-center text-white transition-all duration-300 ease-in-out border rounded-lg bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300 px-14">
          Show More
          <FontAwesomeIcon icon={faAnglesRight} className="ml-4" />
        </button>
      </section>

      <section
        id="last add"
        className="flex items-center justify-center mb-16 mt-9 "
      >
        <div className="container flex flex-col items-center justify-center">
          <h1 className="mt-16 text-5xl font-semibold text-sky-300 font-pops">
            Latest Added services
          </h1>
          <img
            src={img2}
            className="mt-4 pb-14 "
            alt=""
          />
          <LastAdd />
        </div>
      </section>
      <section className="bg-zinc-50">
        <div
          id="upload"
          className="flex justify-center items-center mt-9  bg-zinc-50 gap-40 container mx-auto pt-[72px]"
        >
          <div className="container flex flex-col w-1/2 place-items-start ">
            <h1 className="text-5xl font-semibold text-sky-300 font-pops ">
              Upload app now
            </h1>
            <h4 className="mt-8 mb-16 font-light font-pops">{upload}</h4>
            <div className="flex gap-5">
              <img src={img12} alt="ios" />
              <img src={img13} alt="ios" />
            </div>
          </div>
          <div className="container w-1/2 ">
            <img
              src={img14}
              alt="atmemly-log"
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <Contactusc />
      <Footer />
    </>
  );
};

export default Home;
