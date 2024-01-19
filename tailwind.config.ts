import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "dark-1": "#2E3440",
            "dark-2": "#3B4252",
            "dark-3": "#434C5E",
            "dark-4": "#4C566A",
            "white-1": "#D8DEE9",
            "white-2": "#E5E9F0",
            "white-3": "#ECEFF4",
            "frost-1": "#8FBCBB",
            "frost-2": "#88C0D0",
            "frost-3": "#81A1C1",
            "frost-4": "#5E81AC",
            "aurora-1": "#BF616A",
            "aurora-2": "#D08770",
            "aurora-3": "#EBCB8B",
            "aurora-4": "#A3BE8C",
            "aurora-5": "#B48EAD",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
}
export default config
