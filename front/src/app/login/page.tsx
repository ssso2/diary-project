import Link from "next/link";
// import { Link, useNavigate } from "react-router-dom";

export default function login() {
    // const navigate = useNavigate();
    // const logingo = () => {
    //     alert("님 로그인되었습니다.");
    //     navigate("/main");
    // };
    return (
        <div>
            래퍼
            <main>
                랩
                <div>
                    로그인창화이트배경패딩플렉스
                    <div>
                        제목플렉스랩
                        <p>씬</p>
                        <p>-</p>
                    </div>
                    <div>
                        이메일비밀번호랩
                        <form>
                            <p>이메일</p>
                            <input
                                type="text"
                                placeholder="예) scene.naver.com"
                            />
                            <p>비밀번호</p>
                            <input
                                type="text"
                                placeholder="비밀번호를 입력하세요."
                            />
                        </form>
                    </div>
                    {/* <button type="button" onClick={logingo}> */}
                    <button type="button">로그인</button>
                    <div>
                        하단랩플렉스로우
                        <Link href="/join">회원가입</Link>
                        <Link href="#">비포로 막대 아이디/비밀번호찾기</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
