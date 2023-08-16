'use client'

import { debounce } from 'debounce';
import { Card, Flowbite } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';

const customTheme = {
    card: {
        root: {
            base: "lg:md:sm:max-w-md max-w-[16rem] flex rounded-full border border-gray-200 bg-white shadow-md hover:shadow-upside-down-md overflow-hidden cursor-pointer transition-all duration-700 hover:rotate-180 hover:transition-style-preserve-3d hover:bg-green-biterum",
            children: "flex flex-col justify-center gap-4 lg:md:sm:mx-14 lg:md:sm:h-[22rem] mx-6 h-[16rem]"
        }
    }
}

export default function CardWithImageAndButoon(props){

    const [show, updateShow] = useState(true);

    const debounceMouse = debounce (() => updateShow(false), 300)

    function handleMouseEnter() {
        debounceMouse()
    }

    function handleMouseLeave() {
        updateShow(true);
        debounceMouse.clear();
    }

    return(
        <>
            <Flowbite theme={{theme: customTheme}}>
                <button onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                    <Card>
                        {show ? 
                            <div className="inset-0 transition-all duration-100 delay-200 z-20 hover:opacity-0">
                                <Image width={40} height={40} src={`icons/${props.image}.svg`} alt={`${props.image}`} className="mx-auto"/>
                                <h5 className="lg:md:sm:text-xl text-md font-bold tracking-tight text-center">{props.title}</h5>
                                <p className="lg:md:sm:text-[0.9rem] text-[0.7rem] text-center">{props.content}</p>
                            </div>
                            :
                            <div className="inset-0 transition-all z-10 rotate-180 lg:md:sm:w-[16rem]">
                                <h5 className="lg:md:sm:text-xl text-md font-bold tracking-tight text-center">Przeczytaj więcej</h5> 
                            </div>
                        }
                    </Card>
                </button>
            </Flowbite>
        </>
    )
}