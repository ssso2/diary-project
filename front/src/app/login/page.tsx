"use client";
import Footer from "@/component/Footer";
import HeaderB from "@/component/HeaderB";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

// import { Link, useNavigate } from "react-router-dom";

export default function login() {
    const URL = process.env.NEXT_PUBLIC_API_KEY;
    const router = useRouter();
    const [email, setemail] = useState("");
    const [pw, setpw] = useState("");
    const [errors, seterrors] = useState({ email: "", pw: "" });

    // 이메일 유효성검사
    const validateEmail = email => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // 비밀번호 유효성검사 (영문, 숫자, 특수문자 조합 & 8~16자)
    const validatePassword = password => {
        return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/.test(
            password
        );
    };

    const logingo = async e => {
        e.preventDefault();
        let errormessage = {};
        if (!email) {
            errormessage.email = "이메일을 입력해주세요.";
        } else if (!validateEmail(email)) {
            errormessage.email = "이메일 주소를 정확히 입력해주세요.";
        }
        if (!pw) {
            errormessage.pw = "비밀번호를 입력해주세요.";
        } else if (!validatePassword(pw)) {
            errormessage.pw =
                "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)";
        }
        seterrors(errormessage);

        //로그인요청
        if (Object.keys(errormessage).length === 0) {
            try {
                const res = await axios.post(`${URL}/login`, { email, pw });
                alert(`${res.data.name}님 로그인되었습니다.`);
                router.push("/");
            } catch (error) {
                console.error("로그인오류", error);
                const message =
                    error.response.data?.error || "로그인에 실패했습니다.";
                if (error.response) {
                    //서버응답
                    alert(message);
                } else if (error.request) {
                    // 요청후서버응답없음
                    alert("서버 응답이 없습니다. 잠시 후 다시 시도해주세요.");
                }
                //네트워크문제
                else
                    alert(
                        "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요."
                    );
            }
        }
    };
    return (
        <div>
            <header>
                <HeaderB />
            </header>
            <div className="fwrapper ">
                <main className="fwrap">
                    <div className="w-[590px] h-[668px] bg-white rounded-lg flex flex-col justify-center items-center my-24">
                        <div className="w-[400px]">
                            <div className="flex justify-center">
                                <Image
                                    src="/main/logoB.svg"
                                    alt="로고"
                                    width={116}
                                    height={32}
                                />
                            </div>
                            <div className="w-full bg-red-400 mt-10">
                                <form onSubmit={logingo}>
                                    <label
                                        htmlFor="email"
                                        className="text-gray4"
                                    >
                                        이메일
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="예) scene.naver.com"
                                        onChange={e => {
                                            setemail(e.target.value);
                                        }}
                                        className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full text-black"
                                    />
                                    {errors.email && (
                                        <p className="text-[#FF0000] mt-2">
                                            {errors.email}
                                        </p>
                                    )}
                                    <label
                                        htmlFor="pw"
                                        className="text-gray4 block mt-4"
                                    >
                                        비밀번호
                                    </label>
                                    <input
                                        type="password"
                                        id="pw"
                                        placeholder="비밀번호를 입력하세요."
                                        onChange={e => {
                                            setpw(e.target.value);
                                        }}
                                        className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full  text-black"
                                    />
                                    {errors.pw && (
                                        <p className="text-[#FF0000] mt-2">
                                            {errors.pw}
                                        </p>
                                    )}
                                    <button
                                        type="submit"
                                        className="font-semibold py-3 rounded-lg bg-orange h-12 text-center w-full mt-8 "
                                    >
                                        로그인
                                    </button>
                                </form>
                            </div>
                            <div className="flex w-full h-5 mt-7 text-sm text-black items-center justify-end">
                                <Link href="/join">회원가입</Link>
                                <span className="inline-block w-[1px] h-[12px] bg-gray3 mx-2"></span>
                                <Link href="#">아이디/비밀번호찾기</Link>
                            </div>
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
