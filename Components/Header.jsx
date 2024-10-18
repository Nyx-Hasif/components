'use client'
import React,{ useState} from "react";
import Callback from "./Callback";
import { motion } from "framer-motion";
//parent component
const Header = () => {

    const [UIcolor,setUIcolor] = useState(false)

    const changeColor = (color) => {
        setUIcolor(color)
    }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="flex flex-1 flex-col border-b border-black "
    >
      {/* The div with the "TEST" content */}
      <div
        className="border border-black p-4 flex justify-center items-center   mx-auto mt-10 "
        style={{ backgroundColor: UIcolor }}
      >
        useState Background color behavior
      </div>
      {/* Centered input */}
      <Callback changeColor={changeColor} UIcolor={UIcolor} />
    </motion.div>
  );
};

export default Header;
