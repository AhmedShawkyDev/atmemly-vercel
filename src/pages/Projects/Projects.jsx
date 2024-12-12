import NavBar from "../../Component/NavBar/NavBar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import { useState } from "react";
const Projects = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const calls = {
    Name: name,
    Email: email,
    Message: message,
  };
  const handelSubmit = () => {
    if (name === "" || email === "" || message === "") {
      console.log("empty");
    } else if (
      name === "ahmed" &&
      email === "ahmedahmed" &&
      message === "ahmedahmedahmed"
    ) {
      console.log("ahmed");
    } else {
      console.log(calls);
    }
  };
  const change = (event) => {
    setName(event.target.value);
    // console.log(val);
  };
  const change2 = (event) => {
    setEmail(event.target.value);
  };
  const change3 = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <NavBar />
      <h1>Name</h1>
      <input
        onChange={change}
        value={name}
        type="text"
        placeholder="type here"
        className="border border-neutral-300 p-2   rounded text-xs font-pops "
      />
      <br />
      <h1>Email</h1>
      <input
        onChange={change2}
        value={email}
        type="text"
        placeholder="type here"
        className="border border-neutral-300 p-2   rounded text-xs font-pops "
      />
      <br />
      <h1>Message</h1>
      <input
        onChange={change3}
        value={message}
        type="text"
        placeholder="type here"
        className="border border-neutral-300 p-2   rounded text-xs font-pops "
      />
      <br />
      <button
        onClick={handelSubmit}
        className="bg-sky-300   hover:bg-white text-white  hover:text-sky-300   border border-sky-300 hover:border-sky-300  px-6 py-4 rounded-lg transition-all ease-in-out duration-300"
      >
        Click Here
      </button>
      <Footer />
    </>
  );
};

export default Projects;
