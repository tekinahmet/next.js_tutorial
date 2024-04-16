import { Roboto, Montserrat_Subrayada } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserratSubrayada = Montserrat_Subrayada({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-montserrat-subrayada",
});


export { roboto, montserratSubrayada } 