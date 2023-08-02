'use client'

import {Card, Flowbite, Button} from 'flowbite-react';
import Image from 'next/image';

const customTheme = {
    card: {
        root: {
            base: "max-w-md flex rounded-full border border-gray-200 bg-white shadow-md",
            children: "flex flex-col justify-center gap-4 mx-14 h-[22rem]"
        }
    }
}

export default function CardWithImageAndButoon(props){
    return(
        <Flowbite theme={{theme: customTheme}}>
            <Card>
                <Image width={40} height={40} src={`icons/${props.image}.svg`} alt={`${props.image}`} className="mx-auto"/>
                <h5 className="text-xl font-bold tracking-tight text-center">{props.title}</h5>
                <p className="text-[0.9rem] text-center">{props.content}</p>
            </Card>
        </Flowbite>
    )
}