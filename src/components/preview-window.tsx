"use client";

import { SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ArrowRightFromLine } from "lucide-react";
import { PageEditor } from "./page-editor";

interface PreviewWindowProps {
  code: string;
  onCodeChange: (newCode: string) => void;
}

const sampleCode = `
  import React from "react";

  const Section = () => (
    <div className="p-4">
      asdasd
    </div>
  );

  export default Section;
`;

export default function PreviewWindow() {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Button className="hover:text-white hover:bg-[#1f1f22]">
          <ArrowRightFromLine />
        </Button>
        {!isSignedIn ? (
          <SignInButton>
            <Button
              variant="outline"
              className="bg-[#151414] border border-[#313131] text-white hover:text-white hover:bg-[#1f1f22] transition-colors duration-200"
            >
              Sign in
            </Button>
          </SignInButton>
        ) : (
          <SignOutButton>
            <Button
              variant="outline"
              className="bg-[#151414] border border-[#313131] text-white hover:text-white hover:bg-[#1f1f22] transition-colors duration-200"
            >
              Sign out
            </Button>
          </SignOutButton>
        )}
      </div>
      <div className="py-10 mx-auto">
        <PageEditor code={sampleCode} />
      </div>
    </div>
  );
}
