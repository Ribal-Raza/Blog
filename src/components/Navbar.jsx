import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image path={"logo.png"} alt={"B-log_logo"} width={32} height={32} />
        <span>B-log</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE MENU BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "≡"}
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
