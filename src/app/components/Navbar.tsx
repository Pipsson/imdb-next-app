import React from "react";
import MenuLink from "./MenuLink";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuLink title="home" address="/" Icon={AiFillHome} />
        <MenuLink title="about" address="/about" Icon={BsFillPersonFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="bg-amber-500 px-2  py-1 rounded-lg font-bold text-2xl">
            IMDb
          </span>
          <span className=" text-2xl hidden sm:inline ">Clone</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
