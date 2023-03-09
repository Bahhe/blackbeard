import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Merienda } from "@next/font/google";
import { PersistGate } from "redux-persist/integration/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { persistor, store } from "~/redux/store";
import { Provider } from "react-redux";
import Footer from "~/components/Footer";
import Cart from "~/components/Cart";
import Header from "~/components/Header";

const merienda = Merienda({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => (
            <main className={merienda.className}>
              <Header />
              <Cart />
              <Component {...pageProps} />
              <Footer />
            </main>
          )}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
