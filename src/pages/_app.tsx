import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Merienda } from "@next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const merienda = Merienda({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={merienda.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
