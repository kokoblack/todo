import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import { TodoContextProvider } from "@/components/TodoContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TodoContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </TodoContextProvider>
  );
}
