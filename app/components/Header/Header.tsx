"use client";
import Link from "next/link";

import { useState } from "react";
import cssStyle from "./header.module.css";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={cssStyle.header}>
      <Link href={"/"}>
      <div className={cssStyle.logo}>Bashar Motors </div>
            </Link>
      <div className={`${cssStyle.navbar}`}>
        <nav>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"#about"}>
              <li>About</li>
            </Link>
            <Link href={"#services"}>
              <li>Services</li>
            </Link>
            <Link href={"#footer"}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <Link href={"/services"}>
      <div className={`${cssStyle.btn1}`}>Get Started</div>
            </Link>
      <div className="md:hidden">
        <button onClick={toggleBar} className="focus:outline-none text-black h-full w-20">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-[10vh] w-full bg-[#060505d7] text-white transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 font-semibold">
          <Link href={"/"}>
            <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >Home</li>
            </Link> 
            <Link href={"#about"}>
             <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >About</li>
            </Link>
            <Link href={"#services"}>
             <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >Services</li>
            </Link>
            <Link href={"#footer"}>
             <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >Contact</li>
            </Link>
        </ul>
      </div>
    </div>
  );
}
