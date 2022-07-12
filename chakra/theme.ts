import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
};

const Container = {
  baseStyle: {
    w: "100%",
    px: "0",
    pb: [2, 4],
    pt: "0",
  },
  variants: {
    siteContainer: {
      mx: "auto",
      maxW: "100vw",
      display: "flex",
      flexDir: "column",
      justifyContent: "center",
    },
    headerContainer: {
      maxW: "100vw",
      pb: "0",
    },
  },
  defaultProps: {
    colorScheme: "teal",
    variant: "base",
  },
};

const Button = {
  baseStyle: {
    letterSpacing: "wider",
  },
  variants: {
    link: (props) => ({
      fontSize: "xl",
      fontWeight: "normal",
      _hover: {
        textDecoration: "none",
        color: mode("teal.600", "teal.300")(props),
      },
    }),
    submit: (props) => ({
      fontSize: "xl",
      fontWeight: "semibold",
      border: "1px solid",
      borderColor: mode("teal.600", "teal.300")(props),
      color: mode("teal.600", "teal.300")(props),
      _hover: {
        // backgroundColor: mode("gray.200", "gray.700")(props),
        backgroundColor: "blackAlpha.100",
      },
    }),
    transparent: (props) => ({
      fontSize: "xl",
      fontWeight: "semibold",
      color: mode("gray.600", "gray.700")(props),
      _hover: {
        textDecoration: "none",
        color: mode("teal.600", "teal.300")(props),
      },
    }),
  },
};

const Heading = {
  baseStyle: (props) => ({
    letterSpacing: "base",
    fontFamily: "'Roboto flex', sans-serif",
  }),
  variants: {
    teal: (props) => ({
      color: mode("teal.900", "teal.300")(props),
    }),
  },
  defaultProps: {
    variant: "teal",
  },
};

const Input = {
  baseStyle: (props) => ({
    _hover: {
      border: "3px solid",
      borderColor: mode("teal.600", "teal.300")(props),
    },
  }),
  variants: {
    outline: (props) => ({
      border: "3px solid",
      borderColor: mode("teal.600", "teal.300")(props),
    }),
  },
};

const Link = {
  baseStyle: (props) => ({
    letterSpacing: "wider",
    fontWeight: "semibold",
    textDecoration: "none",
    color: mode("teal.900", "teal.300")(props),
    borderY: "3px solid",
    borderColor: "transparent",
  }),
  variants: {
    navigation: (props) => ({
      color: mode("teal.900", "teal.300")(props),
      borderBottom: "3px solid",
      borderColor: "transparent",
      _hover: {
        textDecoration: "none",
        borderBottomColor: mode("teal.800", "teal.300")(props),
      },
    }),
    imageOverlay: (props) => ({
      textDecoration: "none",
      color: mode("teal.200", "teal.200")(props),
      _hover: {
        textDecoration: "none",
        borderBottom: "3px solid",
        color: mode("teal.300", "teal.300")(props),
      },
    }),
    logo: {
      borderY: "3px solid",
      borderBottomColor: "transparent",
      _hover: {
        textDecoration: "none",
      },
    },
  },
};

const Text = {
  baseStyle: {
    pb: "1.2rem",
  },
  variants: {
    teal: (props) => ({
      color: mode("teal.900", "teal.300")(props),
    }),
  },
  defaultProps: {
    variant: "teal",
  },
};

const Code = {
  baseStyle: {
    borderRadius: "sm",
    overflowY: "auto",
  },
};

const global = (props) => ({
  "html, body": {
    letterSpacing: "wider",
    lineHeight: "tall",
    fontFamily: "'Roboto flex', sans-serif",
  },
});

const theme = extendTheme({
  components: {
    Container,
    Button,
    Input,
    Link,
    Code,
    Heading,
    Text,
  },
  config,
  styles: {
    global,
  },
});
export default theme;
