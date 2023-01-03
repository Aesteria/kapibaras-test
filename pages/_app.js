import Layout from "../components/Layout/Layout";
import "../styles/normalize.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { useEffect } from "react";
import { fetchCart } from "../features/cartSlice";
import { getCartStateFromLocalStorage } from "../api/storage";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const cartState = getCartStateFromLocalStorage();
    if (cartState) {
      store.dispatch(fetchCart(cartState));
    }
  }, []);

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
