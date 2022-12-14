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
    <div className="flex relative">
      <AiFillStar
        color="yellow"
        style={{ height: 500, width: 500 }}
        className="ml-[5rem] blur-xl"
      />
      <button
        onClick={changeTextHandler}
        className="card font-bold px-2 py-2 text-amber-900 rounded-md w-[15rem] h-fit hover:bg-amber-800 hover:text-white active:bg-amber-900 sm:mt-[5rem] sm:mr-[5rem]"
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
        className="absolute ml-[11rem] mt-[2rem] xl:ml-[10rem]"
        alt="My profile"
      />
      <div className="absolute mt-[10rem] left-5 card font-bold px-2 py-2 text-amber-900 rounded-md h-fit xl:top-0 xl:left-0">
        <strong className="font-bol text-amber-900">Framework</strong>
        <ul>
          <li className="text-amber-900">React / Next</li>
          <li className="text-amber-900">CodeIgniter</li>
          <li className="text-amber-900">Laravel</li>
        </ul>
      </div>
      <div className="absolute mt-[15rem] right-11 card font-bold px-2 py-2 text-amber-900 rounded-md h-fit xl:top-0">
        <strong className="font-bol text-amber-900">
          Programming Language
        </strong>
        <ul>
          <li className="text-amber-900">html</li>
          <li className="text-amber-900">css</li>
          <li className="text-amber-900">javascript</li>
          <li className="text-amber-900">php</li>
        </ul>
      </div>
    </div>
  );
}
