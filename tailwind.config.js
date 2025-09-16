/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Custom Color Palette
        cream: '#F3F3E0',      // Light cream background
        navy: '#133E87',       // Deep navy blue
        blue: '#608BC1',       // Medium blue
        lightBlue: '#CBDCEB',  // Light blue/gray
        
        // Updated primary colors based on new palette
        primary: {
          50: '#CBDCEB',   // lightBlue
          100: '#b8d0e6',
          200: '#9ac4df',
          300: '#7cb8d8',
          400: '#608BC1', // blue
          500: '#4a7ba8',
          600: '#3a6c94',
          700: '#2d5d81',
          800: '#214e6e',
          900: '#133E87', // navy
        },
        glass: {
          50: 'rgba(255, 255, 255, 0.1)',
          100: 'rgba(255, 255, 255, 0.05)',
          200: 'rgba(255, 255, 255, 0.02)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Updated gradients with new color palette
        'gradient-primary': 'linear-gradient(135deg, #608BC1 0%, #133E87 100%)',      // blue to navy
        'gradient-secondary': 'linear-gradient(135deg, #CBDCEB 0%, #608BC1 100%)',   // lightBlue to blue
        'gradient-hero': 'linear-gradient(135deg, #608BC1 0%, #CBDCEB 100%)',        // blue to lightBlue
        'gradient-glass': 'linear-gradient(135deg, rgba(203, 220, 235, 0.1) 0%, rgba(203, 220, 235, 0.05) 100%)',
        'gradient-dark': 'linear-gradient(135deg, #133E87 0%, #608BC1 50%, #CBDCEB 100%)',
        'gradient-cream': 'linear-gradient(135deg, #F3F3E0 0%, rgba(243, 243, 224, 0.8) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(19, 62, 135, 0.15)',      // navy with opacity
        'modern': '0 20px 25px -5px rgba(19, 62, 135, 0.1), 0 10px 10px -5px rgba(19, 62, 135, 0.04)',
        'glow': '0 0 20px rgba(96, 139, 193, 0.3)',           // blue glow
        'glow-lg': '0 0 30px rgba(96, 139, 193, 0.5)',        // stronger blue glow
        'inner-glass': 'inset 0 1px 0 0 rgba(203, 220, 235, 0.1)',  // lightBlue inner
      },
      keyframes: {
        wave: {
          "0%": { transform: "skew(0.0deg)" },
          "10%": { transform: "skew(14deg)" },
          "20%": { transform: "skew(-8deg)" },
          "30%": { transform: "skew(14deg)" },
          "40%": { transform: "skew(-4deg)" },
          "50%": { transform: "skew(10.0deg)" },
          "60%": { transform: "skew(0.0deg)" },
          "100%": { transform: "skew(0.0deg)" },
        },
        comeback: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(96, 139, 193, 0.3)' },  // blue glow
          '100%': { boxShadow: '0 0 30px rgba(96, 139, 193, 0.6)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        morphing: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%' },
          '34%': { borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%' },
          '67%': { borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
      },
      animation: {
        "waving-hand": "wave 10s linear infinite",
        "come-back": "comeback 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
        "slide-in-left": "slideInFromLeft 0.8s ease-out",
        "slide-in-right": "slideInFromRight 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "morphing": "morphing 8s ease-in-out infinite",
        "tilt": "tilt 10s infinite linear",
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
