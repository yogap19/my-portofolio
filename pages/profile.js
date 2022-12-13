import Image from 'next/image';
import React, { useState } from 'react';
import boy from '../src/boy.png';
import { AiFillStar } from 'react-icons/ai';
export default function profile() {
  const [text, setText] = useState(true);

  const changeTextHandler = () => {
    setText(false);
    setTimeout(() => {
      setText(true);
    }, 5000);
  };
  return (
    <div className="flex mt-[15rem] xl:mt-0">
      <AiFillStar
        color="#fff"
        style={{ height: 500, width: 500 }}
        className="ml-[5rem] blur-md"
      />
      <button
        onClick={changeTextHandler}
        className="outline-amber-800 text-amber-800 font-bold px-2 py-2 rounded-md w-[15rem] h-fit hover:bg-amber-800 hover:text-white active:bg-amber-900 sm:mt-[5rem] sm:mr-[5rem]"
      >
        {text ? (
          <p>
            Hy, my name is <strong>Yoga</strong>
          </p>
        ) : (
          <p className="">Do you want to know me more? let's scroll down</p>
        )}
      </button>

      <Image
        src={boy}
        style={{ width: 200, height: 350 }}
        className="absolute ml-[11rem] mt-[2rem] md:ml-[9rem] xl:ml-[10rem]"
        alt="My profile"
      />
    </div>
  );
}
