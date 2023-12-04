import React, { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { Outlet, Link } from "react-router-dom";
import NavbarExpandCard from "./NavbarExpandCard";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white">
      <div className="font-Inter text-[#424242]">
        <div className=" text-sm border-b-2">
          <nav className="flex justify-between align-middle mx-48 my-6">
            <a href="/">
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
              <button className="cursor-pointer text-xl" onClick={toggleBox}>
                {<VscMenu />}
              </button>
              {isOpen && (
                <div className=" flex flex-col fixed mt-96 mr-[90px] bg-white pt-6 pr-6 pl-6 border shadow-md">
                  <div className="flex justify-center gap-20 mb-6 ">
                    <NavbarExpandCard
                      imageURL={
                        "https://zerodha.com/static/images/products/kite-logo.svg"
                      }
                      title={"Kite"}
                      text={"Trading Platform"}
                    />
                    <NavbarExpandCard
                      imageURL={
                        "https://zerodha.com/static/images/products/console.svg"
                      }
                      title={"Console"}
                      text={"Backoffice"}
                    />
                    <NavbarExpandCard
                      imageURL={
                        "https://zerodha.com/static/images/products/kite-connect.svg"
                      }
                      title={"Kite Connect"}
                      text={"Trading APIs"}
                    />
                    <NavbarExpandCard
                      imageURL={
                        "https://zerodha.com/static/images/products/coin.svg"
                      }
                      title={"Coin"}
                      text={"Mutual funds"}
                    />
                  </div>
                  <div className="flex flex-row gap-8 border-t">
                    <div className=" w-auto mb-6">
                      <h3 className="mb-3 mt-8 font-medium text-base">
                        Utilities
                      </h3>
                      <ul className="flex flex-col gap-2 font-light text-sm">
                        <li className="hover:text-[#387ed1] cursor-pointer">
                          Brokerage calculator
                        </li>
                        <li className="hover:text-[#387ed1] cursor-pointer">
                          Margin Calculator
                        </li>
                        <li className="hover:text-[#387ed1] cursor-pointer">
                          Holiday calender
                        </li>
                      </ul>
                    </div>
                    <div className=" w-auto mb-6">
                      <h3 className="mb-3 mt-8 font-medium text-base">
                        Updates
                      </h3>
                      <ul className="flex flex-col gap-2 font-light text-sm">
                        <li className="hover:text-[#387ed1] cursor-pointer">
                          Z-Connect blog
                        </li>
                        <li className="hover:text-[#387ed1] cursor-pointer">
                          Pulse News
                        </li>
                        <li className="hover:text-[#387ed1] cursor-pointer">
                          Circulars / Bulletine
                        </li>
                        <li className="hover:text-[#387ed1] cursor-pointer">
                          IPOs
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="mt-8 font-medium text-base">
                        Education
                      </h3>
                      <img
                        src="https://zerodha.com/static/images/products/varsity.png"
                        className="w-10 my-3"
                        alt="varsity"
                      />
                      <p className="hover:text-[#387ed1] cursor-pointer">
                        Varsity
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </header>
  );
}
