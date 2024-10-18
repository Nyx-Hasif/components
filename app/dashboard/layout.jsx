'use client'
import Sidebar from "@/Components/extraComponents/Sidebar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContextProvider from "@/context/AppContext";
import Navbar from "@/Components/Navbar";



export default function Layout({ children }) {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

    return (
      <ContextProvider>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </ContextProvider>
    );
}

