import  img1 from "../../../public/image/Atmemly-Logo.svg"
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="p-4 border-b-2 md:p-5 2xl:p-1 xl:p-1">
      <div className="container mx-auto w-[85.4%]">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={img1}
              alt="logo"
              width="120px"
              className="2xl:w-[100px] 2xl:my-3 xl:w-[95px] xl:my-1"
            />
          </div>
          <div className="flex 2xl:space-x-6 xl:space-x-4">
            <Link
              to="/home"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Services
            </Link>
            <Link
              to="/freelancers"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Freelancers
            </Link>
          </div>

          <div className="flex 2xl:space-x-6 xl:space-x-4">
            <Link
              to="/createa"
              className="text-white transition-all duration-300 ease-in-out border rounded-lg 2xl:text-sm 2xl:px-8 2xl:py-4 xl:text-sm xl:px-8 xl:py-4 bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="transition-all duration-300 ease-in-out border rounded-lg 2xl:text-sm 2xl:px-8 2xl:py-4 xl:text-sm xl:px-8 xl:py-4 bg-cyan-50 hover:bg-white text-sky-300 hover:text-sky-400 border-sky-100 hover:border-slate-100"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
