import Layout from "../components/Layout/Layout";
import "../styles/normalize.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
}
