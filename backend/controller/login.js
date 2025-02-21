const express = require("express");
const router = express.Router();
const db = require("../db");

// 로그인확인 API
router.post("/", async (req, res) => {
    const { email, pw } = req.body;
    console.log("데이터받나:", req.body);
    try {
        const [user] = await db.query(
            "select * from member where user_id = ? and pw = ?",
            [email, pw]
        );

        if (user.length === 0) {
            return res
                .status(404)
                .json({ error: "이메일 또는 비밀번호를 확인해주세요." });
        }
        return res.status(200).json({
            name: user[0].name,
        });
    } catch (error) {
        console.error("로그인오류:", error);
        res.status(500).json({ message: "로그인에 실패했습니다." });
    }
});
module.exports = router;
