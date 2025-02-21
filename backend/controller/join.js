const express = require("express");
const router = express.Router();
// const conn = require("../db");
const nodemailer = require("nodemailer");

// Naver SMTP 서버 설정
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT), // TLS를 사용할 때
    secure: false, // TLS를 사용하면 false, SSL을 사용하면 true
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
// 메일 전송 API
router.post("/", async (req, res) => {
    const { email } = req.body;
    console.log("이메일받나:", req.body);
    const code = Math.random().toString(36).toUpperCase().slice(2, 8);
    const mailOptions = {
        from: `"[씬-기록]" <${process.env.EMAIL_USER}>`, // 보내는 사람
        // from: "[씬기록]", // 보내는 사람
        to: email, // 받는 사람
        subject: "[씬-기록] 이메일 인증코드를 확인해주세요.", // 이메일 제목
        text: `안녕하세요. 이메일 확인을 위한 인증코드를 보내드립니다. 씬-기록 인증코드는 ${code}입니다. 씬-기록 페이지로 돌아가 코드를 입력해주세요.`, // 이메일 본문
    };
    try {
        // 이메일 전송
        await transporter.sendMail(mailOptions);
        // 데이터베이스에 인증코드 저장
        return res.status(200).json({
            message: "인증번호가 발송되었습니다.",
            email: email,
            code: code,
        });
    } catch (error) {
        console.error("이메일 전송 오류:", error);
        res.status(500).json({ message: "인증번호 전송에 실패했습니다." });
    }
});
module.exports = router;
