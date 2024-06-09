'use client';
import PersistentDrawerLeft from "@/components/MIUI/persistDrawer";
import React, {useEffect} from "react";
import {useAppSelector} from "@/redux/hooks";
import {useRouter} from "next/navigation";

export default function AppLayOut({ children }: { children: React.ReactNode }) {
    const auth = useAppSelector(state => state.auth.auth)
    const router = useRouter();
    useEffect(() => {
        if (!auth.isAuthenticated) {
            router.push("/auth/signin");
        }
    }, [auth, router]);
    return (
        <>
            {auth.isAuthenticated ? ( <PersistentDrawerLeft>
                {children}
            </PersistentDrawerLeft>): <></>}
        </>
    );
}