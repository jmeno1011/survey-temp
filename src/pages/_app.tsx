import Banner from "@/components/common/Banner";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import rootReducer from "@/modules";
import "@/styles/globals.css";
import Header from "@/components/common/Header/Header";
import { useRouter } from "next/router";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <div className="layout">
        <Banner />
        {router.pathname.includes("/result") ? null : <Header />}
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
