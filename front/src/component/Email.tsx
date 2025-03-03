import axios from "axios";
import { useState } from "react";
import { validateEmail } from "../utils/Validation";
import { LoginInput } from "./common";

export default function Email({ email, setemail, codeVerify, setcodeVerify }) {
    const URL = process.env.NEXT_PUBLIC_API_KEY;
    const [emailValid, setemailValid] = useState(false);
    const [code, setcode] = useState("");
    const [codesend, setcodesend] = useState(false);
    const [codeValid, setcodeValid] = useState(false);
    const [codeInput, setcodeInput] = useState("");

    //이메일인증버튼활성화
    const emailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setemail(e.target.value);
        setemailValid(validateEmail(e.target.value));
    };

    //이메일인증
    const requestcode = async () => {
        try {
            console.log("이메일오나", email);
            const res = await axios.post(`${URL}/join`, {
                email,
            });
            setcodesend(true);
            setcode(res.data.code);
            setcodeValid(true);
            alert(`이메일로 인증코드를 보냈습니다. ${res.data.code}`);
        } catch (error) {
            console.log("이메일인증실패", error);
            alert(error.response.data.message);
        }
    };
    console.log("코드입력", codeInput);
    //코드인증
    const verifycode = async () => {
        try {
            const coderes = await axios.post(`${URL}/join/codecheck`, {
                email,
                codeInput,
            });
            setcodeVerify(true);
            alert(coderes.data.message);
        } catch (error) {
            console.error("인증오류", error);
            const message =
                error.response.data?.error || "인증에 실패했습니다.";
            if (error.response) {
                alert(message);
            } else if (error.request) {
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
        <>
            <LoginInput
                name="이메일"
                id="email"
                type="email"
                value={email}
                placeholder="예) scene@naver.com"
                onchange={emailchange}
                readOnly={codeVerify}
            />
            <button
                type="button"
                disabled={!emailValid}
                onClick={requestcode}
                className={`text-white bg-gray3 rounded-lg mt-2 py-3 w-full font-semibold ${
                    emailValid ? "bg-orange cursor-pointer" : "bg-gray3 "
                } ${codeVerify && "hidden"}`}
            >
                {codesend ? "재전송" : "이메일 인증"}
            </button>
            {codesend && !codeVerify && (
                <div className="mt-4">
                    <div className="flex w-full gap-2">
                        <input
                            type="text"
                            placeholder="인증번호 6자리 입력"
                            onChange={e => setcodeInput(e.target.value)}
                            maxLength={6}
                            readOnly={codeVerify}
                            className="border-gray3 rounded-lg py-3 pl-5 flex-1 text-black"
                        />
                        <button
                            type="button"
                            onClick={verifycode}
                            disabled={codeVerify || codeInput.length !== 6}
                            className={`text-white rounded-lg py-3 w-20 font-semibold ${
                                !codeVerify && codeInput.length == 6
                                    ? "bg-orange cursor-pointer"
                                    : "bg-gray3 "
                            }`}
                        >
                            {codeVerify ? "인증완료" : "확인"}
                        </button>
                    </div>
                </div>
            )}
            {codeVerify && (
                <p className="text-green-600 mb-2">
                    이메일 인증이 완료되었습니다.
                </p>
            )}
        </>
    );
}
