"use client";
import Footer from "@/component/Footer";
import HeaderB from "@/component/HeaderB";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginForm from "@/component/LoginForm";

export default function login() {
    const URL = process.env.NEXT_PUBLIC_API_KEY;
    const router = useRouter();

    // 서버 요청
    const loginGo = async (email, pw) => {
        try {
            const res = await axios.post(`${URL}/login`, { email, pw });
            alert(`${res.data.name}님 로그인되었습니다.`);
            router.push("/");
        } catch (error) {
            console.error("로그인오류", error);
            const message =
                error.response.data?.error || "로그인에 실패했습니다.";
            if (error.response) {
                //서버요청받고응답보냈는데오류
                alert(message);
            } else if (error.request) {
                //요청후서버응답없음
                alert("서버 응답이 없습니다. 잠시 후 다시 시도해주세요.");
            }
            //네트워크문제
            else
                alert(
                    "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요."
                );
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
                                <LoginForm loginGo={loginGo} />
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
