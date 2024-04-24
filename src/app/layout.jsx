import { montserratSubrayada, roboto } from "@/helpers/fonts";
import "../global.scss";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: {
    template: "%s | Cosmo Shop",
    default: "Cosmo Shop",
  },

  description: "High quality and cheap products",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserratSubrayada.variable} h-100`}
    >
      <body
        suppressHydrationWarning={true}
        className={`d-flex flex-column justify-content-between h-100`}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
