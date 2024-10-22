"use client";

import Image from "next/image";

export default function Header() {

    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div>
                <Image src={"/logo.png"} width={60} height={60} alt={"logo"}>

                </Image>
            </div>
        </div>
    );
}
