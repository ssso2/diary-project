"use client";
import Footer from "@/component/Footer";
import HeaderB from "@/component/HeaderB";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import AgreeCheck from "@/component/AgreeCheck";

// import { Link, useNavigate } from "react-router-dom";

export default function join() {
    const router = useRouter();
    const URL = process.env.NEXT_PUBLIC_API_KEY;
    const [email, setemail] = useState("");
    // const code = () => {
    //     return Math.random().toString(36).toUpperCase().slice(2, 8);
    // };
    // const bb = Math.random().toString(36).toUpperCase().slice(2, 8);

    const requestcode = async () => {
        try {
            console.log("이메일오나", email);
            const res = await axios.post(`${URL}/emailcheck`, {
                email,
            });
            alert(
                `이메일로 인증코드를 보냈습니다. ${res.data.message} 플러스 ${res.data.code}`
            );
            // navigate("emailjoin", { state: { email: email } });
        } catch (error) {
            console.log("에러메세지", error);
            // console.error("에러 응답:", error.response);
            // console.error("에러 요청:", error.request);
        }
    };
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
                                <p className="text-gray4">이메일</p>
                                <input
                                    type="email"
                                    placeholder="예) scene@naver.com"
                                    className="border-gray3 rounded-lg py-3 my-2 pl-5 w-full"
                                    onChange={e => setemail(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={requestcode}
                                    className="text-white bg-gray3 rounded-lg py-3 w-full font-semibold"
                                >
                                    이메일 인증
                                </button>
                                <p className="text-gray4 mt-4">비밀번호</p>
                                <input
                                    type="text"
                                    placeholder="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
                                    className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full"
                                />
                                <p className="text-gray4  mt-4">
                                    비밀번호 확인
                                </p>
                                <input
                                    type="text"
                                    placeholder="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
                                    className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full"
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
