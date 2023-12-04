import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" border-t-2 bg-[#fafafb] text-zinc-500">
      <div className="mx-48 py-8 flex gap-16">
        <div className="flex flex-col gap-5">
          <img
            className="w-36 h-5"
            src="https://zerodha.com/static/images/logo.svg"
            alt="logo"
          />
          <p className="text-sm font-light">
            © 2010 - 2023, Zerodha Broking Ltd. <br /> All rights reserved.
          </p>
          <div className="flex flex-row gap-6 text-2xl ">
            <AiOutlineTwitter className="hover:text-[#387ed1] cursor-pointer" />
            <AiFillFacebook className="hover:text-[#387ed1] cursor-pointer" />
            <AiOutlineInstagram className="hover:text-[#387ed1] cursor-pointer" />
            <AiOutlineLinkedin className="hover:text-[#387ed1] cursor-pointer" />
            <FaTelegram className="hover:text-[#387ed1] cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-lg text-zinc-700 font-medium mb-3">Company</h3>
          <ul className="flex flex-col gap-3 text-zinc-600">
            <li className="cursor-pointer hover:text-[#387ed1]">About</li>
            <li className="cursor-pointer hover:text-[#387ed1]">Products</li>
            <li className="cursor-pointer hover:text-[#387ed1]">Pricing</li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Referral Programme
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">Careers</li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Zerodha.tech
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Prress & Media
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Zerodha Cares(CSR)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-zinc-700 font-medium mb-3">Support</h3>
          <ul className="flex flex-col gap-3 text-zinc-600">
            <li className="cursor-pointer hover:text-[#387ed1]">Contact us</li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Support portal
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Z-Connect blog
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              List of charges
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Downloads & resources
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Market overview
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              How to file a complaint?
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Status of your complaints
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-zinc-700 font-medium mb-3">Account</h3>
          <ul className="flex flex-col gap-3 text-zinc-600">
            <li className="cursor-pointer hover:text-[#387ed1]">
              Open an account
            </li>
            <li className="cursor-pointer hover:text-[#387ed1]">
              Fund transfer
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-48 pt-4 flex flex-col gap-2 font-normal text-[11px] text-zinc-400">
        <p className="leading-[18px]">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
          no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          <span className="text-[#387ed1] font-normal cursor-pointer">
            {" "}
            complaints@zerodha.com
          </span>
          , for DP related to
          <span className="text-[#387ed1] font-normal cursor-pointer">
            {" "}
            dp@zerodha.com
          </span>
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>
        <p className="leading-[18px]">
          Procedure to file a complaint on
          <span className="text-[#387ed1] font-normal cursor-pointer">
            {" "}
            SEBI SCORES
          </span>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>
        <p className="text-[#387ed1] font-normal cursor-pointer leading-[18px]">
          Smart Online Dispute Resolution
        </p>
        <p className="leading-[18px]">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p className="leading-[18px]">
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p className="leading-[18px]">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          <span className="text-[#387ed1] font-normal cursor-pointer">
            {" "}
            create a ticket here
          </span>
          .
        </p>
      </div>
      <div className="mx-48 py-4 flex flex-row justify-center gap-8 font-medium text-xs text-zinc-400">
        <p className="cursor-pointer hover:text-[#387ed1]">NSE</p>
        <p className="cursor-pointer hover:text-[#387ed1]">BSE</p>
        <p className="cursor-pointer hover:text-[#387ed1]">MCX</p>
        <p className="cursor-pointer hover:text-[#387ed1]">
          Terms & conditions
        </p>
        <p className="cursor-pointer hover:text-[#387ed1]">
          Policies & procedures{" "}
        </p>
        <p className="cursor-pointer hover:text-[#387ed1]">Privacy policy </p>
        <p className="cursor-pointer hover:text-[#387ed1]">Disclosure</p>
        <p className="cursor-pointer hover:text-[#387ed1]">
          For investor's attention
        </p>
        <p className="cursor-pointer hover:text-[#387ed1]">Investor charter</p>
      </div>
    </div>
  );
}
