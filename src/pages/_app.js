import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "320px",
    sm: "480px",
    md: "600px",
    lg: "768px",
    xl: "1024px",
    "2xl": "1280px",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
