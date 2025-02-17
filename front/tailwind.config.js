/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Corange: "#FF7235",
                C42: "#424242",
            },
            fontSize: {
                F38: "38px",
                F68: "68px",
            },
        },
    },
    plugins: [],
};
