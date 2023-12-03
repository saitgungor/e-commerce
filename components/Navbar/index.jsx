"use client";

import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent group-[header] group-hover:bg-black hover:bg-white">
      <div className="container h-16 w-full flex justify-between items-center mx-auto group">
        <DropdownMenu />
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              height={42}
              width={74}
              className="cursor-pointer transition-opacity duration-300 ease-in-out invert group-hover:invert-0"
            />
          </div>
        </Link>
        <p className="text-white group-hover:text-black">Right Menu</p>
      </div>
    </div>
  );
};

export default Navbar;
