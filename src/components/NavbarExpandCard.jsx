import React from "react";

export default function NavbarExpandCard({ imageURL, title, text }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {/* <div className="hover:opacity-95"> */}
      <img
        className="w-12 hover:opacity-85 cursor-pointer"
        src={imageURL}
        alt="card"
      />
      <h3 className="font-medium hover:text-[#387ed1] cursor-pointer">
        {title}
      </h3>
      {/* </div> */}
      <p className="text-[11px] font-light text-zinc-500">{text}</p>
    </div>
  );
}
