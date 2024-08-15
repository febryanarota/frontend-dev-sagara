"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoClose, IoGridOutline } from "react-icons/io5";
import { LiaGraduationCapSolid } from "react-icons/lia";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="w-full flex flex-row justify-between lg:justify-end items-center py-5 px-10 bg-white-base shadow-sm">
        <button className="block lg:hidden font-extrabold hover:cursor-pointer text-red-accent"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!isOpen ? (
            <CiMenuBurger
              size={20}
            />
          ) : (
            <IoClose
              size={20}
            />
          )}
        </button>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-col text-right text-sm leading-4 font-bold">
            <p className="hover:cursor-pointer hover:text-red-accent">
              Thomas Anree
            </p>
            <p className="text-slate-accent">Admin</p>
          </div>
          <Image
            src={"/icons/profile.png"}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full hover:cursor-pointer"
          />
          <FaChevronDown className="hover:cursor-pointer hover:text-red-accent" />
        </div>
      </div>
      {isOpen && (
        <div ref={sidebarRef}>
          <Sidebar />
        </div>
      )}
    </div>
  );
}

function Sidebar() {
  const path = usePathname();
  const isActive = (pathname: string) =>
    path === pathname ? "bg-white-base text-black-base text-bold" : "";

  return (
    <div className="w-fit bg-red-accent z-10 text-white-base px-5  fixed rounded-md shadow-lg mt-5 ml-5 p-5 block lg:hidden">
      <div className="space-y-3">
        <p className="text-sm">MENU</p>
        <a
          href={"/dashboard"}
          className={`${isActive(
            "/dashboard"
          )} flex flex-row items-center space-x-2 rounded-[5px] px-3 py-2 hover:bg-white-base hover:cursor-pointer hover:text-black-base hover:text-bold`}
        >
          <IoGridOutline />
          <p>Dashboard</p>
        </a>
        <a
          href={"/students"}
          className={`${isActive(
            "/students"
          )} flex flex-row items-center space-x-2 rounded-[5px] px-3 py-2 hover:bg-white-base hover:cursor-pointer hover:text-black-base hover:text-bold`}
        >
          <LiaGraduationCapSolid />
          <p>Students</p>
        </a>
      </div>
    </div>
  );
}
