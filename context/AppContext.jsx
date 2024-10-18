'use client'
//first import createContext from react
import { createContext, useState } from "react";

//create a context Name and export it
export const AppContext = createContext();

//create a context Provider and export it
const ContextProvider =({children})=>{


    //can add any variables u like to pass to the components
    //for example number phone
    //can also pass functions
    //can also pass objects
    //can also pass arrays
    //can also pass useState variables
    //if more variables wrap in object {}
    const phone = '012-3456789';
    const name = 'Hasif'
    const [content,setContent] = useState(true)
    const [title,setTitle] = useState('Click me')

    //create a function
    const changeNumber = () =>{
        setContent(false);
        setTitle("Click Back");
        if(content === false && title === "Click Back"){
             setContent(true);
             setTitle("Click me");
        }
    }

    return(
        //put variables inside the provider in the value
        //if more variables wrap in object {}
        <AppContext.Provider value={{phone,name,changeNumber,title,content}}>
                {children}
        </AppContext.Provider>
    )
}

//export the provider
export default ContextProvider