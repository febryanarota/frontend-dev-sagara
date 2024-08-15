import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export default function PublicNav() {
    return (
        <div className="w-full bg-white-base top-0 py-5 flex flex-row items-center justify-between px-10">
            <div className="flex flex-row items-center gap-5">
                <Image src={`/icons/dark-logo.svg`} alt="Logo" width={175} height={175} className=""/>
                <div className="text-gray-accent flex flex-row gap-5">
                    <p>IT Certification</p>
                    <p className="flex flex-row items-center">Careers <BiChevronDown/></p>
                    <p>FAQ</p>
                </div>
            </div>
            <button className="btn-primary">SIGN IN</button>
        </div>
    )
};
