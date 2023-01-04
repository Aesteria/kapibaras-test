import Layout from "../components/Layout/Layout";
import "../styles/normalize.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { useEffect } from "react";
import { fetchCart } from "../features/cartSlice";
import { getCartStateFromLocalStorage } from "../api/storage";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const cartState = getCartStateFromLocalStorage();
    console.log(cartState);
    if (cartState) {
      store.dispatch(fetchCart(cartState));
    }
  }, []);

  return (
    <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
}
