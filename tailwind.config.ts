import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais da marca
        brand: {
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
          warning: "var(--brand-warning)",
          danger: "var(--brand-danger)",
          success: "var(--brand-success)",
        },
        // Cores neutras
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
        // Cores específicas da marca
        steel: {
          DEFAULT: "var(--steel-blue)",
          blue: "var(--steel-blue)",
        },
        royal: {
          DEFAULT: "var(--royal-blue)",
          blue: "var(--royal-blue)",
          "blue-2": "var(--royal-blue-2)",
        },
        slate: {
          grey: "var(--dark-slate-grey)",
          "grey-2": "var(--dark-slate-grey-2)",
          blue: "var(--dark-slate-blue)",
          "blue-2": "var(--dark-slate-blue-2)",
          "blue-3": "var(--dark-slate-blue-3)",
        },
        grey: {
          DEFAULT: "var(--grey)",
          "2": "var(--grey-2)",
        },
        olive: {
          DEFAULT: "var(--dark-olive-green)",
          green: "var(--dark-olive-green)",
        },
        forest: {
          DEFAULT: "var(--forest-green)",
          green: "var(--forest-green)",
          "green-2": "var(--forest-green-2)",
        },
        gainsboro: "var(--gainsboro)",
        dim: {
          grey: "var(--dim-grey)",
          "grey-2": "var(--dim-grey-2)",
          "grey-3": "var(--dim-grey-3)",
          "grey-4": "var(--dim-grey-4)",
        },
        goldenrod: "var(--goldenrod)",
        burntsienna: "var(--burntsienna)",
        crimson: "var(--crimson)",
        chocolate: "var(--chocolate)",
        "olive-drab": "var(--olive-drab)",
        "orange-red": "var(--orange-red)",
        "orange-red-2": "var(--orange-red-2)",
        // Cores de estado
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",
      },
      fontFamily: {
        primary: ["var(--font-family-primary)", "sans-serif"],
        secondary: ["var(--font-family-secondary)", "sans-serif"],
        icons: ["var(--font-family-icons)", "monospace"],
        titillium: ["Titillium Web", "Titilliumweb", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        // Tamanhos específicos do design
        "25.5": "25.5px",
        "26": "26px",
        "27": "27px",
        "28": "28px",
        "30": "30px",
        "34": "34px",
        "36": "36px",
        "44": "44px",
        "49": "49px",
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        black: "var(--font-weight-black)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        // Espaçamentos específicos
        "9": "9px",
        "19": "19px",
        "26": "26px",
        "35": "35px",
        "39": "39px",
        "58": "58px",
        "68": "68px",
        "104": "104px",
        "106": "106px",
        "245": "245px",
        "334": "334px",
        "648": "648px",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      zIndex: {
        dropdown: "var(--z-dropdown)",
        sticky: "var(--z-sticky)",
        fixed: "var(--z-fixed)",
        modal: "var(--z-modal)",
        popover: "var(--z-popover)",
        tooltip: "var(--z-tooltip)",
        max: "var(--z-max)",
      },
      // Sistema de Container baseado no Webflow original
      container: {
        center: true,
        padding: {
          DEFAULT: "16px", // px-4
          sm: "16px",      // px-4
          lg: "16px",      // px-4
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",    // max-width do Webflow
          "2xl": "1140px", // max-width do Webflow
        },
      },
      maxWidth: {
        // Container principal do Webflow
        "webflow": "1140px",
        // Container responsivo do Webflow
        "webflow-md": "728px",   // @media (max-width: 991px)
        "webflow-sm": "100%",    // @media (max-width: 767px)
        "webflow-xs": "100%",    // @media (max-width: 479px)
        // Container legado (mantido para compatibilidade)
        container: "var(--container-max-width)",
      },
      // Sistema de Grid baseado no Webflow (12 colunas)
      gridTemplateColumns: {
        // Grid padrão de 12 colunas
        "12": "repeat(12, minmax(0, 1fr))",
        // Grid responsivo
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      // Larguras de colunas baseadas no Webflow
      width: {
        // Colunas de 1 a 12 (baseado no sistema Webflow)
        "col-1": "8.33333333%",    // 1/12
        "col-2": "16.66666667%",   // 2/12
        "col-3": "25%",            // 3/12
        "col-4": "33.33333333%",   // 4/12
        "col-5": "41.66666667%",   // 5/12
        "col-6": "50%",            // 6/12
        "col-7": "58.33333333%",   // 7/12
        "col-8": "66.66666667%",   // 8/12
        "col-9": "75%",            // 9/12
        "col-10": "83.33333333%",  // 10/12
        "col-11": "91.66666667%",  // 11/12
        "col-12": "100%",          // 12/12
      },
      // Gap do grid baseado no Webflow (10px de padding + 10px de margin)
      gap: {
        "webflow": "20px",         // 10px + 10px (padding + margin)
        "webflow-sm": "16px",      // 8px + 8px para mobile
      },
      // Margens negativas para compensar o padding das colunas (como no Webflow)
      margin: {
        "webflow-row": "-10px",    // margin-left: -10px; margin-right: -10px
        "webflow-row-sm": "0",     // margin: 0 para mobile
      },
      // Padding das colunas (como no Webflow)
      padding: {
        "webflow-col": "10px",     // padding-left: 10px; padding-right: 10px
        "webflow-col-sm": "8px",   // padding reduzido para mobile
      },
      lineHeight: {
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
        "26": "26px",
        "27": "27px",
        "28": "28px",
        "30": "30px",
        "34": "34px",
        "36": "36px",
        "44": "44px",
        "49": "49px",
      },
      letterSpacing: {
        "1": "1px",
        "1.1": "1.1px",
      },
      textTransform: {
        uppercase: "uppercase",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, var(--royal-blue), var(--steel-blue))",
        "gradient-success": "linear-gradient(to bottom, var(--forest-green), var(--dark-olive-green))",
        "gradient-warning": "linear-gradient(to bottom, var(--goldenrod), var(--dark-olive-green))",
        "gradient-overlay": "linear-gradient(135deg, rgba(38, 90, 153, 0.85), rgba(16, 143, 206, 0.85))",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    // Plugin para utilitários de grid do Webflow
    function({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const webflowGridUtilities = {
        // Container principal
        '.webflow-container': {
          maxWidth: theme('maxWidth.webflow'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('padding.webflow-col'),
          paddingRight: theme('padding.webflow-col'),
        },
        // Row do grid
        '.webflow-row': {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: theme('margin.webflow-row'),
          marginRight: theme('margin.webflow-row'),
        },
        // Coluna base
        '.webflow-col': {
          position: 'relative',
          paddingLeft: theme('padding.webflow-col'),
          paddingRight: theme('padding.webflow-col'),
          minHeight: '1px',
        },
        // Colunas responsivas
        '.webflow-col-1': { width: theme('width.col-1') },
        '.webflow-col-2': { width: theme('width.col-2') },
        '.webflow-col-3': { width: theme('width.col-3') },
        '.webflow-col-4': { width: theme('width.col-4') },
        '.webflow-col-5': { width: theme('width.col-5') },
        '.webflow-col-6': { width: theme('width.col-6') },
        '.webflow-col-7': { width: theme('width.col-7') },
        '.webflow-col-8': { width: theme('width.col-8') },
        '.webflow-col-9': { width: theme('width.col-9') },
        '.webflow-col-10': { width: theme('width.col-10') },
        '.webflow-col-11': { width: theme('width.col-11') },
        '.webflow-col-12': { width: theme('width.col-12') },
        // Responsividade para tablet (md)
        '@media (max-width: 991px)': {
          '.webflow-container': {
            maxWidth: theme('maxWidth.webflow-md'),
          },
        },
        // Responsividade para mobile (sm)
        '@media (max-width: 767px)': {
          '.webflow-row': {
            marginLeft: '0',
            marginRight: '0',
          },
          '.webflow-col': {
            width: '100%',
            paddingLeft: theme('padding.webflow-col-sm'),
            paddingRight: theme('padding.webflow-col-sm'),
          },
        },
        // Responsividade para mobile pequeno (xs)
        '@media (max-width: 479px)': {
          '.webflow-container': {
            maxWidth: '100%',
          },
        },
      };
      
      addUtilities(webflowGridUtilities);
    },
  ],
};

export default config;
