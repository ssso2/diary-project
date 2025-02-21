"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ className }: { className: string }) {
    const [headerbg, setheaderbg] = useState(false);

    useEffect(() => {
        const headershow = () => {
            const y = window.scrollY;
            console.log("스크롤", y);
            if (y > 80) {
                setheaderbg(true);
            } else setheaderbg(false);
        };
        window.addEventListener("scroll", headershow);
        return () => {
            window.removeEventListener("scroll", headershow);
        };
    }, []);
    return (
        <div className="fixed w-full left-0 right-0 top-0 h-20 bg-white z-50 px-20 py-7">
            <nav className=" flex justify-between text-xl font-medium">
                <Link href="/">
                    <Image
                        src="/main/logoB.svg"
                        alt="로고"
                        width={68}
                        height={24}
                    />
                </Link>
                <Link href="/login" className="font-medium text-xl text-black">
                    로그인 / 회원가입
                </Link>
            </nav>
        </div>
    );
}
