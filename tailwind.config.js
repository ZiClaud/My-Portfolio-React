/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                phone: "320px",
                tablet: "696px",
                laptop: "1080px",
                notebook: "1366px",
                desktop: "1920px",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                "black-background": "#010208",
                "primary-color": "#3688FF",
                "white-color": "#FFFFFF",
                "neutral-1-color": "#E3E4E6",
                "neutral-2-color": "rgba(227,228,230,0.5)"
            },
        },
        plugins: [],
    },
}
