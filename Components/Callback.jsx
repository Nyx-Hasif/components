import React,{useState} from 'react'

//child component
const Callback = ({changeColor,UIcolor}) => {

const [color,setColor] = useState('');
const [addColor,setAddColor] = useState('');

const onSubmit = (e) => {
    e.preventDefault();
    if(UIcolor === false){
        changeColor("red");
    }else{
        changeColor(false);
    }
}

const HandleChange = (e) => {
    const {value} = e.target;
    setColor(value);
    changeColor(value);
}

const HandlerColor = (e) => {
  e.preventDefault();
  setAddColor(addColor);
  changeColor(addColor);
  setAddColor('');
 
}



  return (
    <div className="  flex flex-1 flex-col max-w-[500px] scale-75 sm:scale-100 mx-auto mt-4 ">
      {/* input with click button */}
      <button
        onClick={onSubmit}
        type="submit"
        className="border border-black py-4 px-4 sm:px-6"
      >
        {UIcolor === false ? "ChangeToRed" : "ResetToDefault"}
      </button>

      {/* input with value input */}
      <div className="mt-4">
        <input
          type="text"
          className="flex-1 pl-4 border w-full border-black py-4 px-4 sm:px-6 outline-none "
          value={color}
          onChange={HandleChange}
          placeholder="Enter a color"
        />
      </div>

      {/* input with button click with input field */}
      <form onSubmit={HandlerColor} className="flex flex-row mt-4">
        <input
          type="text"
          className="flex-1 pl-4 border border-black py-4 px-4 sm:px-6 outline-none "
          placeholder="Enter a color"
          value={addColor}
          onChange={(e) => setAddColor(e.target.value)}
          required
        />
        <button type="submit" className="border border-black py-4 px-4 sm:px-6">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Callback
