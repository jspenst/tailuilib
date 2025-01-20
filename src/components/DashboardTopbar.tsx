import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export default function DashboardTopbar() {
  return (
    <div className="h-28 w-full bg-white fixed top-0 left-0 border border-b border-[#ededed] flex items-center justify-center ">
      <div className="flex mx-8 w-full gap-4">
        <Link href="/pt/dashboard" className="w-36 ">
          <Image src="/logo-small.png" alt="" width={200} height={74} />
        </Link>
        <div className="flex flex-1"></div>
        <button className="">
          <FaUserCircle className="text-4xl text-[#555555]" />
        </button>
        <button className="flex md:hidden items-center justify-center">
          <MdMenu className="text-4xl text-[#555555]" />
        </button>
      </div>
    </div>
  );
}
