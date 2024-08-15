"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoGridOutline } from "react-icons/io5";
import { LiaGraduationCapSolid } from "react-icons/lia";

export function Sidebar() {
  const path = usePathname();
  const isActive = (pathname: string) => (path === pathname ? "bg-red-accent text-white-base text-bold" : "");

  return (
    <div className="h-screen min-w-[280px] bg-black-base  text-gray-accent px-5 hidden lg:block">
      <Image
        src="/icons/logo.png"
        alt="Logo"
        width={175}
        height={175}
        className="my-10"
      />
      <div className="space-y-3">
        <p className="text-sm">MENU</p>
        <a href={'/dashboard'} className={`${isActive("/dashboard")} flex flex-row items-center space-x-2 rounded-[5px] px-3 py-2 hover:bg-red-accent hover:cursor-pointer hover:text-white-base hover:text-bold`}>
          <IoGridOutline />
          <p>Dashboard</p>
        </a>
        <a href={'/students'} className={`${isActive("/students")} flex flex-row items-center space-x-2 rounded-[5px] px-3 py-2 hover:bg-red-accent hover:cursor-pointer hover:text-white-base hover:text-bold`}>
          <LiaGraduationCapSolid/>
          <p>Students</p>
        </a>
      </div>
    </div>
  );
}







