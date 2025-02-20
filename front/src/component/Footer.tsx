import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full left-0 right-0 bottom-0 h-auto bg-red-300 text-gray4 z-50">
            <nav className="text-base font-medium">
                <div className="flex w-[447px] items-center gap-x-2 py-4 pl-14 box-content">
                    <Link href="/#">서비스 이용약관</Link>
                    <span className="w-[1px] h-[12px]  bg-gray2"></span>
                    <Link href="/#">개인정보처리방침</Link>

                    <span className="w-[1px] h-[12px] bg-gray2"></span>
                    <Link href="/#" className="inline-block">
                        공지사항
                    </Link>
                    <span className="w-[1px] h-[12px]  bg-gray2"></span>
                    <Link href="/#" className="inline-block">
                        자주묻는질문
                    </Link>
                </div>
                <div className="pl-14 py-7 border-y-[1px] border-gray1">
                    <Image
                        src="/main/logo.svg"
                        alt="기록로고"
                        width={68}
                        height={24}
                    />
                    <p className="text-sm py-5">문의 : </p>
                    <p className="text-sm ">
                        개인프로젝트로 운영되는 비상업적 서비스입니다.
                    </p>
                </div>

                <p className="text-sm text-end pr-8 py-5 ">
                    © 2025 log. 감성을 기록하고 공유하는 커뮤니티.
                </p>
            </nav>
        </div>
    );
}
