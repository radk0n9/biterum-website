'use client'

import { debounce } from 'debounce';
import { Card, Flowbite } from 'flowbite-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const customTheme = {
    card: {
        root: {
            base: "lg:md:sm:max-w-md max-w-[16rem] flex rounded-full border border-gray-200 bg-white shadow-md hover:shadow-upside-down-md overflow-hidden cursor-pointer transition-all duration-700 hover:rotate-180 hover:transition-style-preserve-3d hover:bg-green-biterum",
            children: "flex flex-col justify-center gap-4 lg:md:sm:mx-14 lg:md:sm:h-[22rem] mx-6 h-[16rem]"
        }
    }
}
// transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-biterum duration-300
const customThemeMouse = {
    card: {
        root: {
            base: "lg:md:sm:max-w-md max-w-[16rem] flex rounded-full border border-gray-200 shadow-md transition-all rotate-180 z-10 hover:shadow",
            children: "flex flex-col justify-center gap-4 lg:md:sm:mx-14 lg:md:sm:h-[22rem] lg:md:sm:w-[16rem] mx-6 h-[16rem]"
        }
    }
}

export default function CardWithImageAndButoon(props){

    const [whatStatus, updateStatus] = useState(true);
    // const [delayFunc, setDelay] = useState(false);
    const [show, updateShow] = useState(true);

    // useEffect(() => {
    //     if (!delayFunc) {
    //         return;}

    //     const timeoutID = setInterval(() => {
    //         updateShow(false)
    //         setDelay(false)
    //     }, 300);

    //     return () => {clearInterval(timeoutID)};
    // }, [delayFunc]);

    const debounceMouse = debounce (() => updateShow(false), 300)


    function handleMouseEnter() {
        //updateStatus(false);
        //setDelay(true);
        debounceMouse()
    }

    function handleMouseLeave() {
        //updateStatus(true);
        //setDelay(false);
        updateShow(true);
        debounceMouse.clear();
    }

    return(
        // <div className="overflow-hidden cursor-pointer transition-all duration-700 hover:rotate-180 hover:transition-style-preserve-3d hover:bg-green-biterum">
        <>
        {/* { whatStatus ?
        
        <Flowbite theme={{theme: customTheme}} >
            <button onMouseEnter={() => handleMouseEnter()} >
                <Card>
                   
                        <Image width={40} height={40} src={`icons/${props.image}.svg`} alt={`${props.image}`} className="mx-auto"/>
                        <h5 className="lg:md:sm:text-xl text-md font-bold tracking-tight text-center">{props.title}</h5>
                        <p className="lg:md:sm:text-[0.9rem] text-[0.7rem] text-center">{props.content}</p>
                    
                </Card>
            </button>
        </Flowbite>
        :  */}
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