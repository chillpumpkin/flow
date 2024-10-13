"use client";

import { SignInButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className="flex justify-between items-center px-2 py-2">
            <div>
                Logo
            </div>
            <div>
                <Button variant="outline" className="bg-[#151414] border border-[#313131] text-white hover:text-white hover:bg-[#1f1f22] transition-colors duration-200">
                    <SignInButton />
                </Button>
            </div>
        </div>
    );
}
