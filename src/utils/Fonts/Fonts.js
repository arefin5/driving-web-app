import { Roboto, Roboto_Serif } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto_serif",
  weight: ["400", "500", "700"],
});

// local font li  ador
export const liAdor = localFont({
  src: [
    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_Bold_Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_ExtraLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_ExtraLight_Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Fonts/liAdorfont/LiAdorNoirritA-V1SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_SemiBold_Italic.ttf",
      weight: "600",
      style: "italic",
    },

    {
      path: "../Fonts/liAdorfont/Li_Ador_Noirrit_SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-liAdor",
});
