import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#000",
        blue:"#1D7AE7",
      },
      black: {
        500:"#000",
      },
    },
    fonts: {
      heading: `Roboto Mono`,
      body: "Roboto Mono",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "24px",
          md: "30px",
        },
        color: "p.black",
        lineHeight: {
          base: "32px",
          md: "40px",
        },
        fontWeight:"700"
      },
      h2: {
        fontSize: {
          base: "24px",
          md: "28px",
        },
        color: "p.black",
        lineHeight: { base: "28px", md: "32px" },
      },

      h3: {
        fontSize: {
          base: "22px",
          md: "24px",
          xl: "32px",
        },
        color: "p.black",

        lineHeight: { base: "26px", md: "28px", xl: "36px" },
      },

      h4: {
        fontSize: {
          base: "20px",
          md: "22px",
        },
        color: "p.black",

        lineHeight: { base: "24px", md: "26px" },
      },
      h5: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.black",

        lineHeight: { base: "22px", md: "24px" },
      },
      h6: {
        fontSize: {
          base: "14px",
          md: "18px",
        },
        color: "p.black",

        lineHeight: { base: "20px", md: "24px" },
      },
      p3:{
        fontSize: {
          base: "12px",
        },
        color: "p.black",
        lineHeight: { base: "14px"},
      },
      p2:{
        fontSize: {
          base: "14px",
        },
        color: "p.black",

        lineHeight: { base: "18px"},
      },
      b1:{
        fontSize: {
            base: "14px",
          },
          color: "p.black",
          fontWeight:"100",
          lineHeight: { base: "18px"},
      },
    },

    fontSizes: {
      xs: "12px",
      sm: "14px",
      base: { base: "16px", md: "18px" },
      lg: { base: "18px", md: "20px" },
      xl: { base: "20px", md: "22px" },
      "2xl": { base: "22px", md: "24px" },
      "3xl": { base: "24px", md: "28px" },
      "4xl": { base: "30px", md: "32px" },
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "lightGray",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          py:"3",
          borderRadius:"0",
          fontSize:"8px"
        },
        sizes:{
          md:{fontSize: "14px"},
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              borderRadius: "0px",
              fontSize: "md",
              pb: "0",
              py:"19px",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "black" })
);
