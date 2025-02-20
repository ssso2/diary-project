"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
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
        <div
            className={`fixed w-full left-0 right-0 h-20 bg-transparent z-50 px-20 py-7 ${
                headerbg ? "bg-black" : ""
            }`}
        >
            <nav className=" flex justify-between text-xl font-medium">
                <Link href="#">
                    <Image
                        src="/main/logo.svg"
                        alt="기록로고"
                        width={68}
                        height={24}
                    />
                </Link>
                <Link href="/login" className="font-medium text-xl">
                    로그인 / 회원가입
                </Link>
            </nav>
        </div>
    );
}
