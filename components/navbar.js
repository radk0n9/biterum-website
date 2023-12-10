"use client";
import Image from "next/image";
import { Dropdown, Navbar, Flowbite } from "flowbite-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { mobileChecker } from "@/components/mobile-checker";

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
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-2 px-4 md:pb-0 pb-2 md:mb-0 mb-2 flex flex-col rounded-lg border border-green-biterum bg-background-biterum/30 text-base font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-biterum14 2xl:font-semibold",
    },
    link: {
      base: "block py-3 hover:bg-transparent",
      active: {
        on: "text-white",
        off: "rounded border-b border-gray-100 text-white transition duration-300 ease-in-out hover:bg-gray-biterum2 md:border-0 md:text-white md:hover:bg-transparent md:hover:text-green-biterum",
      },
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

export default function DefaultNavbar() {
  const ref = useRef(null);
  const [dropDownShown, setDropDown] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const originalClasses = ref.current.className;

      ref.current.className = "";

      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);

      ref.current.className = originalClasses;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const buttonElement = document.querySelector(".dropDown-button");
      const dropdownElement = document.querySelector(".dropDown");
      const navbarCollapse = document.querySelector(".navbar-collapse");

      if (buttonElement && dropdownElement) {
        const rect = buttonElement.getBoundingClientRect();

        const setStyles = (element, displayValue, visibilityValue) => {
          const originalDisplay = element.style.display;
          const originalVisibility = element.style.visibility;

          element.style.display = displayValue;
          element.style.visibility = visibilityValue;

          const result = {
            originalDisplay,
            originalVisibility
          };

          return result;
        };
        
        const dropdownMetrics = () => {
          const {originalDisplay, originalVisibility} = setStyles(dropdownElement, "block", "hidden");

          var offsetWidth = dropdownElement.offsetWidth;
          var offsetLeft = dropdownElement.offsetLeft;
          
          setStyles(dropdownElement, originalDisplay, originalVisibility);

          return {
            width: offsetWidth,
            left: offsetLeft,
          };
        };

        const dropdownMetricsMobile = () => {
          const {originalDisplay, originalVisibility} = setStyles(navbarCollapse, "block", "hidden");

          let rectButtonElement = buttonElement.getBoundingClientRect();
          let left = rectButtonElement.left
          let top = rectButtonElement.top
          let height = rectButtonElement.height

          setStyles(navbarCollapse, originalDisplay, originalVisibility);

          dropdownElement.style.transform = `translate(${left}px, ${top + height - 5}px)`;
        };

        if (mobileChecker()) {

          dropdownMetricsMobile();

        } else {
          let left = rect.left + rect.width / 2 - dropdownMetrics().width / 2;

          if (left + dropdownMetrics().width > window.innerWidth) {
            left = window.innerWidth - dropdownMetrics().width - 5;
          }

          dropdownElement.style.transform = `translate(${left}px, ${rect.top + rect.height - 5}px)`;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  let tiemoutHideDropdown;

  const handleMouseLeave = (event) => {
    tiemoutHideDropdown = setTimeout(() => {
      setDropDown(false);
    }, 300);
  };

  const handleMouseOver = (event) => {
    clearTimeout(tiemoutHideDropdown);

    if (!dropDownShown) {
      setDropDown(true);
      const myDropDown = document.getElementsByClassName("dropDown");
    }
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
        <Navbar.Collapse className="navbar-collapse">
          <Navbar.Link href="/" className="" aria-current="page">
            Główna
          </Navbar.Link>
          <Navbar.Link href="/aktualnosci" className="">
            Aktualności
          </Navbar.Link>
          <div className="dropDown-button block rounded border-b border-gray-100 py-3 text-white transition duration-300 ease-in-out hover:bg-gray-biterum2 hover:bg-transparent md:border-0 md:text-white md:hover:bg-transparent md:hover:text-green-biterum">
            <div onMouseLeave={(event) => handleMouseLeave(event)}>
              <button
                onMouseOver={(event) => handleMouseOver(event)}
                className="flex items-center outline-none"
              >
                <span>Produkty</span>
              </button>
              <div
                aria-expanded={dropDownShown}
                className={`dropDown z-10 w-fit scale-125 divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white text-gray-700 shadow-xl focus:outline-none ${
                  dropDownShown ? `absolute left-0 top-0` : `hidden`
                } `}
                onMouseOver={() => handleMouseOver()}
                ref={ref}
              >
                <ul className={`py-1 focus:outline-none`}>
                  <li className="">
                    <a
                      href="#"
                      className="block w-full cursor-pointer rounded border-b border-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:bg-transparent hover:text-green-biterum focus:bg-gray-400 focus:outline-none md:border-0 md:hover:bg-transparent md:hover:text-green-biterum"
                    >
                      Produkt1
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Navbar.Link href="/galeria" className="">
            Galeria
          </Navbar.Link>
          <Navbar.Link href="/faq" className="">
            FAQ
          </Navbar.Link>
          <Navbar.Link href="/kontakt" className="">
            Kontakt
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}
