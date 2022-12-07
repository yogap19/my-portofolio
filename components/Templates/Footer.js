import Link from 'next/link';
import React from 'react';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiOutlineMail,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="bg-amber-500 py-5 flex place-content-center">
      <div className="grid grid-cols-4 gap-1">
        <Link href="https://www.instagram.com/yogapramana19/">
          <AiOutlineInstagram
            size={30}
            className="hover:scale-125"
            title="@yogapramana19"
          />
        </Link>
        <Link href="https://www.facebook.com/yogapramana.sd/">
          <AiFillFacebook
            size={30}
            className="hover:scale-125"
            title="yogapramana.sd"
          />
        </Link>
        <Link href="/">
          <AiOutlineMail
            size={30}
            className="hover:scale-125"
            title="yogapma19@gmail.com"
          />
        </Link>
        <Link href="https://github.com/yogap19">
          <AiFillGithub size={30} className="hover:scale-125" title="yogap19" />
        </Link>
      </div>
    </div>
  );
}
