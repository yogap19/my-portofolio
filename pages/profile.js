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
    <div className="container">
      <AiFillStar
        color="#fff"
        size={500}
        className="absolute right-[7rem] top-[6rem] blur-md"
      />
      <Image
        src={boy}
        style={{ width: 200, height: 400 }}
        className="absolute right-[16rem] top-[6rem]"
      />
      <button
        onClick={changeTextHandler}
        className="border border-amber-800 text-amber-800 font-bold px-2 py-2 rounded-md max-w-fit absolute right-[7rem] top-[10rem] hover:bg-amber-800 hover:text-white active:bg-amber-900"
      >
        {text ? (
          <p>
            Hy, my name is <strong>Yoga</strong>
          </p>
        ) : (
          <p className="max-w-[10rem]">
            Do you want to know me more? let's scroll down
          </p>
        )}
      </button>
    </div>
  );
}
