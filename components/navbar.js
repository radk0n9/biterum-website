"use client";
import Image from "next/image";
import { Dropdown, Navbar, Flowbite } from "flowbite-react";
import { useRef, useState } from "react";

const customTheme = {
  navbar: {
    root: {
      base: "",
      inner: {
        base: "max-w-6xl flex flex-wrap justify-between items-center container mx-auto px-2 md:px-6",
      },
    },
    brand: {
      base: "flex items-center transition-all ease-in-out md:hover:scale-110 duration-300",
    },
    toggle: {
      base: "inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-green-biterum focus:outline-none focus:ring-2 focus:ring-green-biterum",
    },
  },
  dropdown: {
    floating: {
      base: "z-10 w-fit rounded-lg divide-y divide-gray-100 shadow focus:outline-none",
      content: "py-1 font-normal rounded-lg",
    },
    inlineWrapper: "flex items-center outline-none",
  },
};

export default function defaultNavbar() {
  // const handleMouseEnter = (event) => {
  //   const button = event.target.click();
  // };

  // const handleMouseLeave = (event) => {
  //  const targetName = event.target.localName;
  //  console.log(targetName)
  //  if (targetName === "a" || targetName === "div" || targetName === "svg"){
  //   document.querySelector("body > nav > div > div > ul > div > div > div > button").click()
  //  }
  // 

  const [dropDownShown, setDropDown] = useState(false);

  const handleMouseEnter = (event) => {
    const button = event;
    console.log(button.pageX)
    // button.getBoundingClientRect()
    setDropDown(true)
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar className="mx-auto bg-gray-biterum14 py-2">
        <Navbar.Brand href="/">
          <Image
            src="/biterum-logo.png"
            alt="biterum-logo"
            priority={true}
            width={105} //230
            height={49} //101
            className="rounded bg-white p-0.5"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="mt-2 flex flex-col rounded-lg border border-green-biterum bg-background-biterum/30 px-4 pb-3 pt-2 text-base font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-biterum14 md:p-0 2xl:font-semibold">
            <Navbar.Link
              href="/"
              className="easy-in-out block rounded py-2 pl-3 pr-4 text-white transition-colors duration-300 hover:bg-gray-biterum2 md:bg-transparent md:p-0 md:text-white md:hover:text-green-biterum"
              aria-current="page"
            >
              Główna
            </Navbar.Link>
            <Navbar.Link
              href="/aktualnosci"
              className="easy-in-out block rounded py-2 pl-3 pr-4 text-white transition-colors duration-300 hover:bg-gray-biterum2 md:bg-transparent md:p-0 md:text-white md:hover:text-green-biterum"
            >
              Aktualności
            </Navbar.Link>
            <div
              className="flex rounded border-b border-gray-100 py-2 pl-3 pr-4 text-white transition duration-500 ease-in-out hover:bg-gray-biterum2 md:border-0 md:p-0 md:text-white md:hover:bg-transparent md:hover:text-green-biterum"
            >
              <div>
                <Dropdown inline label="Produkty">
                  <Dropdown.Item
                    href="#"
                    className="block px-4 py-2 hover:text-green-biterum"
                  >
                    Produkt1
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    className="block px-4 py-2 hover:text-green-biterum"
                  >
                    Produkt2
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    className="block px-4 py-2 hover:text-green-biterum"
                  >
                    Produkt3
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <div
              className="flex rounded border-b border-gray-100 py-2 pl-3 pr-4 text-white transition duration-500 ease-in-out hover:bg-gray-biterum2 md:border-0 md:p-0 md:text-white md:hover:bg-transparent md:hover:text-green-biterum"
              onMouseEnter={(event) => {
                handleMouseEnter(event);
              }}
            >
            
              <button>Produkty</button>
              <div className="absolute left-0 top-0 min-w-[95px] z-fit rounded-lg divide-y divide-gray-100 shadow focus:outline-none transition-opacity duration-100 border-gray-200 bg-white text-gray-900">
              {dropDownShown ?
                <li>
                  <a href="#">Test</a>
                </li>
                : null
              }
              </div>
            </div>
            <Navbar.Link
              href="/galeria"
              className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-biterum2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-biterum"
            >
              Galeria
            </Navbar.Link>
            <Navbar.Link
              href="/faq"
              className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-biterum2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-biterum"
            >
              FAQ
            </Navbar.Link>
            <Navbar.Link
              href="/kontakt"
              className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-biterum2 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-biterum"
            >
              Kontakt
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}


