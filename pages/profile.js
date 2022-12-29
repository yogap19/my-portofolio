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
        className="ml-[5rem]  blur-xl"
      />

      <Image
        src={boy}
        style={{ width: 200, height: 350 }}
        className="absolute ml-[11rem] mt-[2rem] lg:ml-[23rem] xl:ml-[10rem]"
        alt="My profile"
        priority={true}
      />

      <button
        onClick={changeTextHandler}
        className="card font-bold px-2 py-2 mr-[11rem] mt-[3rem] max-w-fit text-amber-900 rounded-md h-fit hover:bg-amber-800 hover:text-white active:bg-amber-900 lg:mr-[17rem] xl:mt-[2rem] xl:mr-[9rem]"
      >
        {text ? (
          <p>
            Hy, my name is <strong>Yoga</strong>
          </p>
        ) : (
          <p className="">Do you want to know me more? let's scroll down</p>
        )}
      </button>
      <div className="absolute mt-[10rem] card font-bold px-2 py-2 text-amber-900 rounded-md h-fit xl:top-0 xl:ml-0">
        <strong className="font-bol text-amber-900">Framework</strong>
        <ul>
          <li className="text-amber-700 hover:text-amber-900">React / Next</li>
          <li className="text-amber-700 hover:text-amber-900">CodeIgniter</li>
          <li className="text-amber-700 hover:text-amber-900">Laravel</li>
        </ul>
      </div>
      <div className="absolute mt-[15rem] right-11 card font-bold px-2 py-2 text-amber-900 rounded-md h-fit lg:mr-[10rem] xl:top-0 xl:mr-0">
        <strong className="font-bol text-amber-900">
          Programming Language
        </strong>
        <ul>
          <li className="text-amber-700 hover:text-amber-900">html</li>
          <li className="text-amber-700 hover:text-amber-900">css</li>
          <li className="text-amber-700 hover:text-amber-900">javascript</li>
          <li className="text-amber-700 hover:text-amber-900">php</li>
        </ul>
      </div>
    </div>
  );
}
