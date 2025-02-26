import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/Validation";
import { ErrorMessage, LoginInput } from "./common";

export default function LoginForm({ loginGo }) {
    const [email, setemail] = useState("");
    const [pw, setpw] = useState("");
    const [errors, seterrors] = useState({ email: "", pw: "" });

    // 이메일, 패스워드 변경시 에러메세지초기화
    const Change = (setinput, value, key) => {
        setinput(value);
        seterrors(prev => ({ ...prev, [key]: "" }));
    };

    // 로그인버튼으로 유효성 검사
    const loginchk = async e => {
        e.preventDefault();

        let errormessage = {};
        if (!validateEmail(email)) {
            errormessage.email = "이메일 주소를 정확히 입력해주세요.";
        }
        if (!validatePassword(pw)) {
            errormessage.pw =
                "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)";
        }
        if (Object.keys(errormessage).length > 0) {
            seterrors(errormessage); // 한번만 실행
            return; // 에러있으면 서버요청막음
        }
        loginGo(email, pw); //호출
    };
    return (
        <form onSubmit={loginchk}>
            <LoginInput
                name="이메일"
                id="email"
                type="email"
                value={email}
                placeholder="예) scene.naver.cosm"
                onchange={e => Change(setemail, e.target.value, "email")}
            />
            <ErrorMessage message={errors.email} />
            <LoginInput
                name="비밀번호"
                id="pw"
                type="password"
                value={pw}
                placeholder="비밀번호를 입력하세요."
                onchange={e => Change(setpw, e.target.value, "pw")}
            />

            <ErrorMessage message={errors.pw} />
            <button
                type="submit"
                disabled={!(email && pw)}
                className={`font-semibold py-3 rounded-lg  h-12 text-center w-full mt-8 
                                       ${
                                           email && pw
                                               ? "bg-orange cursor-pointer"
                                               : "bg-gray3"
                                       }
                                              
                                             
                                        `}
            >
                로그인
            </button>
        </form>
    );
}
