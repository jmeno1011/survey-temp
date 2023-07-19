import Banner from '@/components/common/Banner'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import rootReducer from '@/modules'
import '@/styles/globals.css'

const store = configureStore({
  reducer: rootReducer, devTools: true, middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className='layout'>
        <Banner />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
