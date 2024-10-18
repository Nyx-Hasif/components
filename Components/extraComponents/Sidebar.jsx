'use client'
import { MdOutlineDataObject } from "react-icons/md";
import { SiCounterstrike, SiCountingworkspro,SiMicrosoftaccess,SiModal } from "react-icons/si";
import { FiLoader } from "react-icons/fi";
import { LuTimerReset } from "react-icons/lu";
import { ImAccessibility } from "react-icons/im";
import { VscReferences } from "react-icons/vsc";
import { MdOutlineTimer3Select } from "react-icons/md";
import { BiExpand, BiCollapse } from "react-icons/bi";
import { TbCarouselHorizontal, TbLayoutNavbarInactive } from "react-icons/tb";
import { FaShareSquare } from "react-icons/fa";
import { IoInfiniteSharp } from "react-icons/io5";




import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dataName = [
    {
      name: "Object (useState)",
      icon: <MdOutlineDataObject className={"text-2xl"} />,
      link: "/dashboard/object",
    },
    {
      name: "Counter (useState) ",
      icon: <SiCounterstrike className={"text-2xl"} />,
      link: "/dashboard/counter",
    },
    {
      name: "SetTimeout (useEffect)",
      icon: <LuTimerReset className={"text-2xl"} />,
      link: "/dashboard/settimeout",
    },
    {
      name: "Count Variable (useEffect)",
      icon: <SiCountingworkspro className={"text-2xl"} />,
      link: "/dashboard/count",
    },
    {
      name: "Timer (useEffect)",
      icon: <MdOutlineTimer3Select className={"text-2xl"} />,
      link: "/dashboard/timer",
    },
    {
      name: "Counter_Ref (useRef)",
      icon: <VscReferences className={"text-2xl"} />,
      link: "/dashboard/counter_ref",
    },
    {
      name: "Access_DOM (useRef)",
      icon: <ImAccessibility className={"text-2xl"} />,
      link: "/dashboard/access_dom",
    },
    {
      name: "Carousel Epic",
      icon: <TbCarouselHorizontal className={"text-2xl"} />,
      link: "/dashboard/carousel",
    },
    {
      name: "Preloader (useState + useEffect)",
      icon: <FiLoader className={"text-2xl"} />,
      link: "/dashboard/preloader",
    },
    {
      name: "(useContext)",
      icon: <SiMicrosoftaccess className={"text-2xl"} />,
      link: "/dashboard/useContext",
    },
    {
      name: "(useContext + useState)",
      icon: <FaShareSquare className={"text-2xl"} />,
      link: "/dashboard/useContext_State",
    },
    {
      name: "Modal + Props (useState)",
      icon: <SiModal className={"text-2xl"} />,
      link: "/dashboard/modal_useState",
    },
    {
      name: "Marquee Animation ",
      icon: <IoInfiniteSharp className={"text-2xl"} />,
      link: "/dashboard/marquee",
    },
    {
      name: "Navbar Framer Motion",
      icon: <TbLayoutNavbarInactive className={"text-2xl"} />,
      link: "/dashboard/navbar_framer_motion",
    },
  ];

  return (
    <div
      className={`overflow-hidden  flex flex-col border border-black h-[100vh] ${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-width duration-300 ease-in-out`}
    >
      <button className=" py-2 text-white bg-gray-800 hidden sm:block " onClick={toggleSidebar}>
        {isSidebarOpen ? <BiCollapse className="m-auto text-2xl" /> : <BiExpand className="m-auto text-2xl "/>}
      </button>

      <div className="text-center ">
        {/* Your sidebar items go here */}
        {dataName.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <div className="  hover:bg-blue-300 cursor-pointer py-3 flex justify-center items-center ">
                {isSidebarOpen ? item.name : item.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
