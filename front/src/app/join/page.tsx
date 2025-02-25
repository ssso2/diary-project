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

// import { Link, useNavigate } from "react-router-dom";

export default function join() {
    const router = useRouter();
    const URL = process.env.NEXT_PUBLIC_API_KEY;

    const joingo = () => {
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
                            <form>
                                <label for="name" className="text-gray4 mt-4">
                                    이름
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" 예) 김기록"
                                    required
                                    className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full text-black"
                                />
                                <Email />
                                <p className="text-gray4 mt-4">비밀번호</p>
                                <input
                                    type="password"
                                    placeholder="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
                                    className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full text-black"
                                />
                                <p className="text-gray4  mt-4">
                                    비밀번호 확인
                                </p>
                                <input
                                    type="password"
                                    placeholder="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
                                    className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full text-black"
                                />
                            </form>
                            <AgreeCheck />
                            <button
                                type="button"
                                onClick={joingo}
                                className="font-semibold py-3 rounded-lg bg-[#c2c2c2] h-12 text-center w-full mt-8"
                            >
                                가입하기
                            </button>
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
