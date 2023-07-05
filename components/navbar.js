'use client';
import Image from 'next/image';
import { Dropdown, Navbar, Flowbite } from 'flowbite-react';

const customTheme = {
    navbar: {
        root: {
            base: "",
            inner: {
                base: "max-w-6xl flex flex-wrap justify-between items-center container mx-auto",
            },
        },
        brand : {
            base: "flex items-center transition-all ease-in-out md:hover:scale-110 duration-300",
        },
        toggle: {
            base: "inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-green-biterum focus:outline-none focus:ring-2 focus:ring-green-biterum",
        },        
   },
}

export default function defaultNavbar(){
    return (
        <Flowbite theme={{theme: customTheme}}>
            <Navbar className="bg-gray-biterum14 mx-auto py-2">
                <Navbar.Brand href="/">
                    <Image 
                        src="/biterum-logo.png"
                        alt="biterum-logo"
                        width={105} //230
                        height={49} //101
                        className="bg-white rounded p-0.5"
                    />
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <div className="flex flex-col font-semibold text-base p-4 md:p-0 mt-4 border border-green-biterum rounded-lg bg-gray-biterum9 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-biterum14">
                        <Navbar.Link href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-biterum2 md:bg-transparent md:hover:text-green-biterum md:text-white md:p-0" aria-current="page">Główna</Navbar.Link>
                        <div className="flex py-2 pl-3 pr-4 text-white border-b border-gray-100 rounded hover:bg-gray-biterum2 md:hover:text-green-biterum md:hover:bg-transparent md:border-0 md:text-white md:p-0">
                            <Dropdown inline={true} label="Produkty" className="z-10 font-normal rounded-lg shadow w-44">
                                <Dropdown.Item href="#" className="block px-4 py-2 hover:text-green-biterum">
                                    Produkt1
                                </Dropdown.Item>
                                <Dropdown.Item href="#" className="block px-4 py-2 hover:text-green-biterum">
                                    Produkt2
                                </Dropdown.Item>
                                <Dropdown.Item href="#" className="block px-4 py-2 hover:text-green-biterum">
                                    Produkt3
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <Navbar.Link href="/galeria" className="block py-2 pl-3 pr-4 text-white rounded  hover:bg-gray-biterum2 md:hover:bg-transparent md:border-0 md:hover:text-green-biterum md:p-0">Galeria</Navbar.Link>
                        <Navbar.Link href="/faq" className="block py-2 pl-3 pr-4 text-white rounded  hover:bg-gray-biterum2 md:hover:bg-transparent md:border-0 md:hover:text-green-biterum md:p-0">FAQ</Navbar.Link>
                        <Navbar.Link href="/kontakt" className="block py-2 pl-3 pr-4 text-white rounded  hover:bg-gray-biterum2 md:hover:bg-transparent md:border-0 md:hover:text-green-biterum md:p-0">Kontakt</Navbar.Link>
                    </div>      
                </Navbar.Collapse>
            </Navbar>
        </Flowbite>
    )
}