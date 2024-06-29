import "./globals.css";
import {Footer} from "@/components/Footer";
import {Menu} from "@/components/Menu";
import {ModalProvider} from "@/contexts/ModalContext";
import localFont from "next/font/local";

const proximaNova = localFont({src: [
        {
            path: '../fonts/ProximaNova-Black.ttf',
            weight: '900'
        },
        {
            path: '../fonts/ProximaNova-Extrabld.ttf',
            weight: '800'
        },
        {
            path: '../fonts/ProximaNova-Bold.ttf',
            weight: '700'
        },
        {
            path: '../fonts/ProximaNova-Semibold.ttf',
            weight: '600'
        },
        {
            path: '../fonts/ProximaNova-Regular.ttf',
            weight: '400'
        },
        {
            path: '../fonts/ProximaNova-Light.ttf',
            weight: '300'
        },
    ]})

export const metadata = {
  title: "TermoGroup",
  description: "Фасадные панели TermoGroup - созданы дарить тепло!",
};

export default function RootLayout({ children }) {
  return (
      <ModalProvider>
        <html lang="ru">

        <body className={`${proximaNova.className} relative`}>

        <Menu/>
        {children}
        <Footer/>
        </body>
        </html>
      </ModalProvider>

  );
}
