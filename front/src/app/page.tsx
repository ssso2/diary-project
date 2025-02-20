import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import Header from "../component/Header";
import Footer from "@/component/Footer";

export default function Home() {
    return (
        <div>
            <header>
                <Header />
                <div className="w-full bg-green-400 relative">
                    {/* <Image
                            src="/sub/main6.svg"
                            alt="mainimg"
                            className="w-full"
                        /> */}
                    <img src="/main/main1.svg" alt="메인이미지" height={1080} />
                    <div className="absolute top-[30%] left-[10%]">
                        <div className="flex-col">
                            <p className="font-medium text-4xl">내가 감상한</p>
                            <div className="flex-col gap-y-0 text-6xl font-semibold mt-10 mb-8">
                                <p className="">일상의 사소한 기록</p>
                                <div className="flex">
                                    <p className="text-orange">ㅆ</p>
                                    <p>-기록</p>
                                </div>
                            </div>

                            <Link
                                href="/login"
                                className="bg-orange text-2xl p-4 rounded"
                            >
                                로그인 / 회원가입
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-7 left-1/2 flex flex-col items-center w-[68px] animate-smallBounce">
                        <img src="/icon/mouse.svg" alt="mouse" />
                        <img
                            src="/icon/down.svg"
                            alt="arrowbottom"
                            width={32}
                        />
                    </div>
                </div>
            </header>
            <div className="wrapper">
                <div className="wrap">
                    <main>
                        <div>
                            <div className="font-medium text-center m-40">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quae magnam vero,{" "}
                                </p>
                                <p>
                                    esse officia dicta cum officiis odio
                                    adipisci dolores incidunt omnis consequuntur
                                </p>
                            </div>
                            <div className="relative w-[488px] h-auto ml-auto flex flex-col right-[100px] mb-[168px]">
                                <div className="relative w-[488px] h-[545px]">
                                    <Image
                                        src="/main/main4.svg"
                                        alt="다이어리 적고있는 모습"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="font-semibold text-3xl mt-8">
                                    <p className="text-gray3">
                                        장면기록, 감정까지
                                    </p>
                                    <p className="text-C42">기록에서 한번에</p>
                                    <p className="text-xl font-medium">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Culpa quam officia
                                        repellat illum eveniet?
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="relative w-[590px] h-auto flex flex-col mb-[168px]">
                                    <div className="relative w-[590px] h-[700px]">
                                        <Image
                                            src="/main/main2.svg"
                                            alt="노트북에서 이미지찾는 모습"
                                            width={590}
                                            height={700}
                                        />
                                    </div>
                                    <div className="flex font-semibold text-2xl text-C42 mt-10">
                                        <p>단순한 감상이 아닌,</p>
                                        <p className="text-orange">
                                            &nbsp;감정
                                        </p>
                                        <p>을</p>
                                        <p className="text-orange">
                                            &nbsp;기록
                                        </p>
                                        <p>하는 공간.</p>
                                    </div>
                                </div>
                                <div className="relative w-[590px] h-auto flex flex-col mb-[168px]">
                                    <div className="relative w-[488px] h-[394px] mt-20 ml-10">
                                        <Image
                                            src="/main/main3.svg"
                                            alt="노트북에서 이미지찾는 모습"
                                            width={488}
                                            height={394}
                                        />
                                    </div>
                                    <div className="flex font-normal text-xl ml-10 mt-6">
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit.
                                            Aliquam adipisci,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
