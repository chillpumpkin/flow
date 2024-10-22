"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";

export default function Providers({children} : {children: ReactNode}) {

    const convex = new ConvexReactClient("https://courteous-armadillo-947.convex.cloud");
    return (
        <ClerkProvider publishableKey={"pk_test_bm90ZWQtcmhpbm8tODkuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}