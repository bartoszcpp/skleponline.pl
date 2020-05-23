import "bootstrap/dist/css/bootstrap.css";
import "../style/style.css";
import "cross-fetch/polyfill";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { AppProvider } from "../components/contex/AppContex";

const client = new ApolloClient({
  uri: "http://127.0.0.1/wordpress/graphql",
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppProvider>
  );
}
