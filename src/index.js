import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById("root")
);
