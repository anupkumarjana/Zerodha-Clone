import React from "react";
import { Outlet, Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="font-Inter text-[#424242] px-[20px]">
      <div className=" text-sm border-b-2 ">
        <nav className="flex justify-between align-middle mx-52 my-6 ">
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
      <center>
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="home"
          className="w-3/5 my-16"
        />
      </center>
      <div className="flex flex-col justify-center items-center text-center text-zinc-700 font-medium ">
        <h1 className="text-[2.5rem]">Invest in everything</h1>
        <p className="my-2 text-xl font-light">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="border-2 rounded hover:bg-slate-800 bg-[#387ed1] text-white text-xl px-7 py-2 mt-6">
          Sign up now
        </button>
      </div>

      {/* ---------------------------------2nd page------------------------------------------ */}
      <div className="mt-10 sm:mt-28 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 sm:gap-36 pb-8 sm:pb-24">
        <div className="pl-44 flex-shrink-0">
          <img
            className="max-w-xs sm:max-w-none w-full"
            src="https://zerodha.com/static/images/largest-broker.svg"
            alt=""
          />
        </div>

        <div className="pr-36 w-full max-w-xs sm:max-w-none">
          <h2 className="text-3xl font-medium mb-[20px]">
            Largest stock broker in India
          </h2>
          <p className="mt-[16px] mb-[15px] pr-16">
            1+ Crore Zerodha clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>
          <div className="flex gap-16 my-9">
            <ul className="list-disc ml-5">
              <li className="py-[3%]">Futures and Options</li>
              <li className="py-[3%]">Commodity derivatives</li>
              <li className="py-[3%]">Currency derivatives</li>
            </ul>
            <ul className="list-disc ml-5">
              <li className="py-[3%]">Stocks & IPOs</li>
              <li className="py-[3%]">Direct mutual funds</li>
              <li className="py-[3%]">Direct mutual funds</li>
            </ul>
          </div>
          <div>
            <img
              className="w-[528px] h-[29.74px]"
              src="https://zerodha.com/static/images/press-logos.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ----------------------------------------3rd page------------------------------------------------ */}

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-[20px] font-medium">
          The Zerodha Universe
        </h2>
        <p className="text-xl text-center  mb-[20px]">
          A whole ecosystem of modern investment apps <br /> tailored to
          specific needs, built from the ground up
        </p>
        <img
          className="w-3/5"
          src="https://zerodha.com/static/images/ecosystem.png"
          alt="zerodha-universe"
        />
      </div>
    </div>
  );
}
