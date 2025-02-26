import { useState } from "react";
import {
    validateName,
    validateEmail,
    validatePassword,
} from "../utils/Validation";
import { ErrorMessage, LoginInput } from "./common";
import Email from "./Email";
import AgreeCheck from "./AgreeCheck";

export default function JoinForm({ joinGo }) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [codeVerify, setcodeVerify] = useState(false);
    const [pw, setpw] = useState("");
    const [pwchk, setpwchk] = useState("");
    const [agree, setagree] = useState(false);
    const [errors, seterrors] = useState({
        name: "",
        // email: "",
        pw: "",
        pwchk: "",
    });

    // 이메일, 패스워드 변경시 에러메세지초기화
    const Change = (setinput, value, key) => {
        setinput(value);
        seterrors(prev => ({ ...prev, [key]: "" }));
    };

    // 로그인버튼으로 유효성 검사
    const joinchk = async e => {
        e.preventDefault();
        console.log(name, pw, pwchk);
        let errormessage = {};
        if (!codeVerify) {
            alert("이메일 인증이 필요합니다.");
            return;
        }
        if (!validateName(name)) {
            errormessage.name = "이름을 정확히 입력해주세요.";
        }
        if (!validatePassword(pw)) {
            errormessage.pw =
                "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)";
        }
        if (pw !== pwchk) {
            errormessage.pwchk = "비밀번호가 일치하지않습니다.";
        }
        if (pw !== pwchk) {
            errormessage.pwchk = "비밀번호가 일치하지않습니다.";
        }
        if (Object.keys(errormessage).length > 0) {
            seterrors(errormessage);
            return;
        }

        if (!agree) {
            alert("이용약관에 모두 동의해야 가입 가능합니다.");
            return;
        }
        joinGo(name, pw);
    };
    return (
        <form onSubmit={joinchk}>
            <LoginInput
                name="이름"
                id="name"
                type="text"
                value={name}
                placeholder="예) 김기록"
                onchange={e => Change(setname, e.target.value, "name")}
            />
            <ErrorMessage message={errors.name} />
            <Email
                email={email}
                setemail={setemail}
                codeVerify={codeVerify}
                setcodeVerify={setcodeVerify}
            />
            <LoginInput
                name="비밀번호"
                id="pw"
                type="password"
                value={pw}
                placeholder="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
                onchange={e => Change(setpw, e.target.value, "pw")}
            />
            <ErrorMessage message={errors.pw} />
            <LoginInput
                name="비밀번호 확인"
                id="pwchk"
                type="password"
                value={pwchk}
                placeholder="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
                onchange={e => Change(setpwchk, e.target.value, "pwchk")}
            />
            <ErrorMessage message={errors.pwchk} />
            <AgreeCheck setagree={setagree} />
            <button
                type="submit"
                disabled={!(name && pw && pwchk)}
                className={`font-semibold py-3 rounded-lg  h-12 text-center w-full mt-8 
                ${
                    name && email && pw && pwchk
                        ? "bg-orange cursor-pointer"
                        : "bg-gray3"
                }
                       
                      
                 `}
            >
                가입하기
            </button>
        </form>
    );
}
