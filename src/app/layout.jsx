import { montserratSubrayada, roboto } from "@/helpers/fonts";
import "../global.scss";

export const metadata = {
  title: { 
	template: "%s | Cosmo Shop",
	default: "Cosmo Shop",
},
  description: "High quality products",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${montserratSubrayada.variable} h-100`}
    >
      <body
        suppressHydrationWarning={true} 
        className={`${roboto.className} d-flex flex-column justify-content-between h-100`}
      >
        {children}
      </body>
    </html>
  );
}
