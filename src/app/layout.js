import { Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "A special surprise just for you !",
  description: "A heartfelt reveal for the most understanding person in my life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kalam.className} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
