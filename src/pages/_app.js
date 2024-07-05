import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactLenis } from "@studio-freight/react-lenis";

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
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReactLenis>
  );
}
