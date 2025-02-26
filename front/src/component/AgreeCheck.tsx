import { useState } from "react";

export default function AgreeCheck({ setagree }) {
    const [allcheck, setallcheck] = useState<boolean>(false);
    const [checkbox, setcheckbox] = useState<{ [key: string]: boolean }>({
        servicechk: false,
        privacychk: false,
    });
    //전체동의
    const allAgree = () => {
        setallcheck(!allcheck);
        setcheckbox({ servicechk: !allcheck, privacychk: !allcheck });
        // setagree(true);
        setagree(!allcheck);
    };
    //개별동의
    const singleAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        const newcheckbox = { ...checkbox, [id]: checked };
        setcheckbox(newcheckbox);
        //전체동의 상태 업데이트
        const allChecked = Object.values(newcheckbox).every(Boolean);
        setallcheck(allChecked);
        setagree(allChecked); // 모든 체크박스가 체크되면 true, 하나라도 해제되면 false
    };
    return (
        <div className="mt-8">
            <div className="h-12 bg-gray1 flex items-center">
                <input
                    type="checkbox"
                    id="all"
                    checked={allcheck}
                    onChange={allAgree}
                    className="rounded-full"
                />
                <label
                    htmlFor="all"
                    className="text-black font-medium cursor-pointer"
                >
                    전체 동의하기
                </label>{" "}
            </div>
            <div className="flex-col">
                <div className="h-12 flex items-center">
                    <input
                        type="checkbox"
                        id="servicechk"
                        checked={checkbox.servicechk}
                        onChange={singleAgree}
                    />
                    <label
                        htmlFor="servicechk"
                        className="text-black font-medium cursor-pointer"
                    >
                        [필수] 서비스 이용약관 동의
                    </label>
                </div>
                <div className="h-12 flex items-center">
                    <input
                        type="checkbox"
                        id="privacychk"
                        checked={checkbox.privacychk}
                        onChange={singleAgree}
                    />
                    <label
                        htmlFor="privacychk"
                        className="text-black font-medium cursor-pointer"
                    >
                        [필수] 개인정보 처리방침 동의
                    </label>
                </div>
            </div>
        </div>
    );
}
