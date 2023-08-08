import Banner from "@/components/common/Banner/Banner";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { Provider } from "react-redux";
import rootReducer from "@/modules";
import "@/styles/globals.css";
import Header from "@/components/common/Header/Header";
import { useRouter } from "next/router";
import App from "next/app";
import { bannerUrl } from "@/lib/const/common";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

interface AppInitProps {
  bannerState: boolean;
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

let persistor = persistStore(store)

export default function MyApp({
  Component,
  pageProps,
  bannerState,
}: AppProps & AppInitProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="layout">
          {bannerState && <Banner srcUrl={bannerUrl} />}
          {router.pathname.includes("/result") ? null : <Header />}
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  return {
    ...ctx,
    bannerState: true,
  };
};
