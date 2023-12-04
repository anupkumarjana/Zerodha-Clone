import React from "react";
import { VscMenu } from "react-icons/vsc";
import { Outlet, Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white">
      <div className="font-Inter text-[#424242]">
        <div className=" text-sm border-b-2">
          <nav className="flex justify-between align-middle mx-52 my-6">
            <a href="https://zerodha.com/">
              <img
                className="w-36 h-5"
                src="https://zerodha.com/static/images/logo.svg"
                alt="logo"
              />
            </a>

            <ul className="felx flex gap-11 justify-center items-center">
              <li className="cursor-pointer hover:text-[#387ed1]">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="cursor-pointer  hover:text-[#387ed1]">
                <Link to="/about">About</Link>
              </li>
              <li className="cursor-pointer  hover:text-[#387ed1]">
                <Link to="/products">Products</Link>
              </li>
              <li className="cursor-pointer  hover:text-[#387ed1]">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="cursor-pointer  hover:text-[#387ed1]">
                <Link to="/support">Support</Link>
              </li>
              <li className="cursor-pointer text-xl">{<VscMenu />}</li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </header>
  );
}
