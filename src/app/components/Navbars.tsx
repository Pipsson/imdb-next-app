import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbars() {
  return (
    <div className="dark:bg-black bg-amber-500 text-white flex py-4 lg:text-lg justify-center items-center gap-4">
      <NavbarItem title="Trending" param=" fetchTrending" />
      <NavbarItem title="Top Rated" param=" fetchTopRated" />
    </div>
  );
}
