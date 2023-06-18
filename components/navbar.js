'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown, Navbar } from 'flowbite-react';

export default function NavBar(){
    return (
        <div>
            <Navbar className="bg-gray-biterum1 mx-auto p-1 ">
                <div className="mx-auto flex flex-wrap items-center justify-between container m-1 mx-7">
                    <Navbar.Brand href="/">
                        <Image 
                            src="/biterum-logo.png"
                            alt="biterum-logo"
                            width={115} //230
                            height={59} //101
                            className="bg-white rounded ml-2 p-0.5"
                        />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap m-2"></span> */}
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <div className="flex flex-col font-semibold text-lg p-4 md:p-0 mt-4 border border-green-biterum rounded-lg bg-gray-biterum5 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-biterum1">
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
                        </div>
                    </Navbar.Collapse>
                   

                    {/* <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg md:hidden hover:bg-green-biterum focus:outline-none focus:ring-2 focus:ring-green-biterum" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-semibold text-lg p-4 md:p-0 mt-4 border border-green-biterum rounded-lg bg-gray-biterum5 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-biterum1">
                            <li>
                                <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-biterum1 md:bg-transparent md:hover:text-green-biterum md:text-white md:p-0" aria-current="page"></Link>
                            </li>
                            <li> */}
                                {/* <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-biterum-4 rounded hover:bg-gray-biterum11 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto"><svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button> */}
                                {/* <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-biterum11 rounded-lg shadow w-44">
                                    <ul className="py-2 text-sm text-gray-biterum7" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-biterum-11">Produkt1</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-biterum-11">Produkt2</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-biterum-11">Produkt3</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-biterum1 md:hover:bg-transparent md:border-0 md:hover:text-green-biterum md:p-0"></Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-biterum1 md:hover:bg-transparent md:border-0 md:hover:text-green-biterum md:p-0"></Link>
                            </li>
                        </ul>
                    </div>*/}
                </div>

            </Navbar>
        </div>
    )
}