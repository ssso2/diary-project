"use client";
import Footer from "@/component/Footer";
import HeaderB from "@/component/HeaderB";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import AgreeCheck from "@/component/AgreeCheck";
import Email from "@/component/Email";
import { LoginInput } from "@/component/common";
import JoinForm from "@/component/JoinForm";

// import { Link, useNavigate } from "react-router-dom";

export default function join() {
    const router = useRouter();
    const URL = process.env.NEXT_PUBLIC_API_KEY;

    const joinGo = () => {
        alert("회원가입이 완료되었습니다.");
        router.push("/");
    };
    return (
        <div>
            <header>
                <HeaderB />
            </header>
            <div className="fwrapper">
                <main className="fwrap">
                    <div className="w-[590px] h-auto bg-white rounded-lg flex flex-col justify-center items-center px-7 py-8">
                        <p className="text-2xl text-black font-bold self-start">
                            회원가입
                        </p>
                        <div className="w-full bg-red-400 mt-10">
                            <JoinForm joinGo={joinGo} />
                        </div>
                    </div>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
