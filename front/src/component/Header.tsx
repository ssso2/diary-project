import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed w-full bg-red-300 z-50">
            <nav className=" flex justify-between text-xl">
                <Link href="#">로고</Link>
                <Link href="/login">로그인/회원가입</Link>
            </nav>
        </div>
    );
}
