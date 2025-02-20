/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                orange: "#FF7235",
                C42: "#424242",
                gray1: "#f5f5f5",
                gray2: "#dbdbdb",
                gray3: "#c2c2c2",
                gray4: "#8f8f8f",
                black: "#292929",
            },
            fontSize: {
                F38: "38px",
                F68: "68px",
            },
            keyframes: {
                smallBounce: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" },
                },
            },
            animation: {
                smallBounce: "smallBounce 1.5s infinite",
            },
        },
    },
    plugins: [],
};
