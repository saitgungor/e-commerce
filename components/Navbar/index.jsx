"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-white group group-hover:bg-black hover:bg-black">
      <div className="container h-16 w-full flex justify-between items-center mx-auto group">
        <p className="text-black group-hover:text-white">Left Menu</p>
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              height={42}
              width={74}
              className="cursor-pointer transition-opacity duration-300 ease-in-out group-hover:invert"
            />
          </div>
        </Link>
        <p className="text-black group-hover:text-white">Right Menu</p>
      </div>
    </div>
  );
};

export default Navbar;
