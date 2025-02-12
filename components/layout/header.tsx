"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-header">
      <nav className="flex flex-col p-4 text-sm xl:flex-row xl:justify-between">
        <div className="flex items-center justify-between xl:justify-normal">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-wide text-background">
              Consul<span className="text-emphasis">Corp.</span>
            </h1>
            <span className="text-xs text-description uppercase">
              Finance & Consultation
            </span>
          </div>
          <button className="p-2 xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="size-6" stroke="white" />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } xl:flex xl:items-center xl:px-2`}
        >
          <ul className="flex flex-col gap-4 p-2 text-background font-light xl:gap-8 xl:flex-row">
            <li className="lg:hover:text-emphasis">
              <a href="#">Home</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#concepts">About</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#pricing">Services</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Work</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Pricing</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Blog</a>
            </li>
            <li className="lg:hover:text-emphasis">
              <a href="#premium">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
