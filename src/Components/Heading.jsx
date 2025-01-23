import React from "react";
import { Link } from "react-router-dom";

function Heading() {



  return (
    <nav className="flex justify-between">
      <div className="flex p-2 gap-1">
        <h1 className="text-xl font-semibold">LoveCounselor</h1>
        <img className="w-7 h-7" src="/love.png" alt="Love Icon" />
      </div>

      <ul className="flex gap-10 p-2 mr-5">
        <li>
          <Link to="/" className="hover:underline hover:underline-offset-4 hover:text-red-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline hover:underline-offset-4 hover:text-red-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline hover:underline-offset-4 hover:text-red-500">
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/features" className="hover:underline hover:underline-offset-4 hover:text-red-500">
            Features
          </Link>
        </li>


      </ul>
    </nav>
  );
}

export default Heading;
