import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-lg  py-4 px-7 border-b  ">
      <div className="max-w-[1250px] mx-auto  ">
        <Link href={"/"}>
          <Image
            src="https://placehold.jp/000000/ffffff/150x150.png?text=B&css=%7B%22border-radius%22%3A%2215px%22%7D"
            alt="logo"
            width="50"
            height="40"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
