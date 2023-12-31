import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import Products from "./Products";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <div className="font-Inter text-[#424242] px-[20px] mt-32">
      <center>
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="home"
          className="w-3/5 mb-16"
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
      <div className="px-44 mt-10 sm:mt-28 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 sm:gap-36 pb-28 sm:pb-24">
        <div className="flex-shrink-0">
          <img
            className="max-w-xs sm:max-w-none w-full"
            src="https://zerodha.com/static/images/largest-broker.svg"
            alt=""
          />
        </div>

        <div className="w-full max-w-xs sm:max-w-none">
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

      <div className="flex flex-col justify-center items-center pb-28 px-44">
        <h2 className="text-3xl mb-[20px] font-medium">The Zerodha Universe</h2>
        <p className="text-xl text-center  mb-[20px]">
          A whole ecosystem of modern investment apps <br /> tailored to
          specific needs, built from the ground up
        </p>
        <img
          className="w-3/5 mb-6"
          src="https://zerodha.com/static/images/ecosystem.png"
          alt="zerodha-universe"
        />
        <div className="flex gap-16 font-medium text-[#387ed1]">
          <a href={<Products />} className="flex items-center">
            Explore our products
            <VscArrowRight className="ml-1" />
          </a>
          <a href={<Products />} className="flex items-center">
            Try Kite demo
            <VscArrowRight className="ml-1" />
          </a>
        </div>
      </div>

      {/* ------------------------------------4th page------------------------------------------------ */}
      <div className="flex justify-center items-center gap-28 pb-28 px-44">
        <div className=" flex flex-col">
          <h2 className="text-3xl font-medium mb-4">Unbeatable pricing</h2>
          <p className="text-lg mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href={<Pricing />}
            className="flex items-center text-[#387ed1] font-medium"
          >
            See Pricing <VscArrowRight className="ml-1" />
          </a>
        </div>

        <div className="flex">
          <div className="box-border h-90 w-64 border-2 p-8 rounded">
            <h3 className="font-semibold text-5xl text-center mb-4">₹0</h3>
            <p className="text-center">
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="box-border h-90 w-64 border-2 p-8 rounded">
            <h3 className="font-semibold text-5xl text-center mb-4">₹20</h3>
            <p className="text-center">Intraday and F&O</p>
          </div>
        </div>
      </div>

      {/* -----------------------------5th page-------------------------------------------------- */}
      <div className="flex justify-center items-center gap-28 pb-28 px-44">
        <img
          className="w-[432.66px] h-[317.45px]"
          src="https://zerodha.com/static/images/index-education.svg"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-medium mb-5">
            Free and open market education
          </h3>
          <div>
            <p className="text-lg">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href={<Pricing />}
              className="flex items-center text-[#387ed1] font-medium my-5"
            >
              Varsity <VscArrowRight className="ml-1" />
            </a>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href={<Pricing />}
              className="flex items-center text-[#387ed1] font-medium mt-5"
            >
              TradingQ&A <VscArrowRight className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* --------------------------------------6th------------------------------------------------- */}

      <div className="flex flex-col justify-center items-center gap-6 pb-10 px-44">
        <h2 className="text-3xl font-medium">Open a Zerodha account</h2>
        <p className="text-lg text-slate-600">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="border-2 rounded hover:bg-slate-800 bg-[#387ed1] text-white text-xl px-7 py-2">
          Sign up now
        </button>
      </div>
    </div>
  );
}
