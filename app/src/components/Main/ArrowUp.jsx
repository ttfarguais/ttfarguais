'use client';
import { TbCircleArrowUpFilled } from "react-icons/tb";

export default function ArrowUp() {
  return (
    <a
      href="#"
      className="static m-auto flex md:fixed items-center justify-center bottom-0 right-0 p-4 my-6 md:m-10 bg-contrast-1 text-solid rounded-full w-20 h-20"
    >
     <TbCircleArrowUpFilled size={40}/>
    </a>
  );
}