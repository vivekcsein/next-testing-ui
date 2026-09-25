import {
  Geist,
  Geist_Mono,
  Inika,
  Inter,
  Kode_Mono,
  Montserrat,
  Oxanium,
  Poppins,
  Roboto,
} from "next/font/google";
import localFont from "next/font/local";

export const oxanium = Oxanium({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
});

export const inika = Inika({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const kode_mono = Kode_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

/**
 * Personal/brand font — not tied to any theme's --font-sans/--font-serif/
 * --font-mono slots. Mounted globally (see styles.config.ts's
 * PERSONAL_FONTS) and exposed as the `font-brilliant` utility class via
 * StyleTheme.css, so it's usable anywhere regardless of the active theme.
 * File: src/assets/fonts/brilliant-performer.otf ("Brilliant Performer",
 * Regular, single static weight).
 */

/**
 * Personal/brand font — not tied to any theme's --font-sans/--font-serif/
 * --font-mono slots. Mounted globally (see styles.config.ts's
 * PERSONAL_FONTS) and exposed as the `font-brilliant` utility class via
 * StyleTheme.css, so it's usable anywhere regardless of the active theme.
 * File: src/assets/fonts/brilliant-performer.otf ("Brilliant Performer",
 * Regular, single static weight).
 */

// custom fonts
export const brilliantPerformer = localFont({
  src: "../../assets/fonts/brilliant-performer.otf",
  variable: "--font-brilliant-performer",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const georgia = localFont({
  src: "../../assets/fonts/georgia.ttf",
  variable: "--font-georgia",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const consolasligaturizedv2 = localFont({
  src: "../../assets/fonts/consolas-ligaturized-v2.ttf",
  variable: "--font-consolas-ligaturized-v2",
  weight: "400",
  style: "normal",
  display: "swap",
});

const CustomFont = localFont({
  src: "../../assets/fonts/custom.ttf",
  variable: "--font-custom",
  weight: "400",
  style: "normal",
  display: "swap",
});

export default {
  sans: oxanium.variable,
  serif: inika.variable,
  mono: kode_mono.variable,
  custom: CustomFont.variable,
};
