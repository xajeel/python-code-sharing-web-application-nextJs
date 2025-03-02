"use client"

import Link from "next/link";
import { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FaHome } from "react-icons/fa";


const NavbarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 32 32"
            style={{ fill: "#875bf9" }} >
            <path d="M 5.6875 5 C 5.6875 5 5 6.207031 5 8.25 C 5 9.605469 5.308594 10.320313 5.53125 10.6875 C 3.96875 12.3125 3 14.515625 3 17.34375 C 3 24.585938 7.589844 27 16 27 C 24.410156 27 29 24.585938 29 17.34375 C 29 14.417969 28.085938 12.21875 26.59375 10.625 C 26.964844 9.515625 27.382813 7.421875 26.34375 5 C 23.242188 5 20.65625 7.382813 20.5625 7.46875 C 19.113281 7.152344 17.574219 7 16 7 C 14.394531 7 12.820313 7.195313 11.34375 7.5625 C 9.265625 5.503906 6.757813 5 5.6875 5 Z M 20.6875 15.4375 C 21.53125 15.429688 22.3125 15.5 23 15.71875 C 24.832031 16.300781 26 17.984375 26 19.875 C 26 25.109375 23.191406 26 16 26 C 10.65625 26 6.3125 25.058594 6.3125 20.0625 C 6.3125 18.15625 7.347656 17.078125 8.09375 16.40625 C 9.734375 14.929688 12.324219 15.65625 16 15.65625 C 17.671875 15.65625 19.277344 15.453125 20.6875 15.4375 Z M 10.5 18 C 9.671875 18 9 18.894531 9 20 C 9 21.105469 9.671875 22 10.5 22 C 11.328125 22 12 21.105469 12 20 C 12 18.894531 11.328125 18 10.5 18 Z M 21.5 18 C 20.671875 18 20 18.894531 20 20 C 20 21.105469 20.671875 22 21.5 22 C 22.328125 22 23 21.105469 23 20 C 23 18.894531 22.328125 18 21.5 18 Z M 10.34375 18.84375 C 10.578125 18.84375 10.75 19.042969 10.75 19.28125 C 10.75 19.519531 10.578125 19.71875 10.34375 19.71875 C 10.109375 19.71875 9.90625 19.519531 9.90625 19.28125 C 9.90625 19.042969 10.109375 18.84375 10.34375 18.84375 Z M 21.34375 18.84375 C 21.578125 18.84375 21.75 19.042969 21.75 19.28125 C 21.75 19.519531 21.578125 19.71875 21.34375 19.71875 C 21.109375 19.71875 20.90625 19.519531 20.90625 19.28125 C 20.90625 19.042969 21.109375 18.84375 21.34375 18.84375 Z"></path>
          </svg>

        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className={`absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 p-4 md:p-0 shadow-md md:shadow-none ${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 text-sm">
              <li><Link className="text-gray-500 hover:text-gray-500/75 transition flex gap-2 items-center" href="/"><FaHome />
            Home</Link></li>
              <li><Link className="text-gray-500 transition hover:text-gray-500/75" href="/home">Snippets</Link></li>
              <li><Link className="text-gray-500 transition hover:text-gray-500/75" href="/contact">Contact Us</Link></li>
              <li><Link className="text-gray-500 transition hover:text-gray-500/75" href="/about">About</Link></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
            
              
              <SignedOut >
              <div className="rounded-md bg-[#875bf9] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#874bf9]">
                <SignInButton />
                </div>
              </SignedOut>
            
              <SignedIn>
                <div className="scale-150">
                <UserButton />
                </div>
              </SignedIn>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarResponsive;
