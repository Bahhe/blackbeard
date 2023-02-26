import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Merienda } from "@next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { store } from "~/redux/store";
import { Provider } from "react-redux";

const merienda = Merienda({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <main className={merienda.className}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
