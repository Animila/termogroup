import { Inter } from "next/font/google";
import "./globals.css";
import {Footer} from "@/components/Footer";
import {Menu} from "@/components/Menu";
import {ModalProvider} from "@/contexts/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TermoGroup",
  description: "Фасадные панели TermoGroup - созданы дарить тепло!",
};

export default function RootLayout({ children }) {
  return (
      <ModalProvider>
        <html lang="ru">
        <body className={`${inter.className} relative`}>

        <Menu/>
        {children}
        <Footer/>
        </body>
        </html>
      </ModalProvider>

  );
}
