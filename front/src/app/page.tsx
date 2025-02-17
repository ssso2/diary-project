import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import Header from "../component/Header";

export default function Home() {
    return (
        <div className="wrapper">
            <div className="wrap">
                <header>
                    <Header />

                    <div className="w-full bg-green-400 relative">
                        {/* <Image
                            src="/sub/main6.svg"
                            alt="mainimg"
                            className="w-full"
                        /> */}
                        <img
                            src="/sub/main1.svg"
                            alt="메인이미지"
                            height={1080}
                        />
                        <div className="absolute top-20 left-11">
                            <div className="flex-col">
                                <p className="font-medium text-F38">
                                    내가 감상한
                                </p>
                                <div className="flex-col text-F68 font-semibold">
                                    <p>일상의 사소한 기록</p>
                                    <div className="flex">
                                        <p className="text-Corange">기록</p>
                                        <p>-</p>
                                    </div>
                                </div>

                                <Link
                                    href="/login"
                                    className="bg-Corange text-2xl p-4 rounded"
                                >
                                    로그인/회원가입
                                </Link>
                            </div>
                        </div>
                        <div className="absolute bottom-7 flex flex-col justify-center items-center w-[68px]">
                            <img src="/icon/mouse.svg" alt="" />
                            <img src="/icon/down.svg" alt="" />
                        </div>
                    </div>
                </header>
                <main>
                    <div>
                        메인랩
                        <p className="text-N42">당신이 느낀 감정</p>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            텍스트랩
                            <p>장면기록, 감정까지</p>
                            <p>소개2</p>
                            <p>소개3줄바꿈</p>
                        </div>
                        <div>
                            플렉스랩
                            <div>
                                플렉스랩
                                <img src="/main/main09.svg" alt="" />
                                <p></p>
                            </div>
                            <div>
                                플렉스랩
                                <img src="/main/main7.svg" alt="" />
                                <p></p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>{/* <Footer /> */}</footer>
            </div>
        </div>
    );
}
