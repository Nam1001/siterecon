import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../src/Redux/Store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <App />
        <CSSReset />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>
);
