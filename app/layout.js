import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "../component/Header";

export const metadata = {
  title: "Test Quantic Factory",
  description: "SPA pour Quantic Factory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
            <div className="flex min-h-screen bg-white text-black dark:bg-[#0f172a] dark:text-white">
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-6 overflow-auto">{children}</main>
              </div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
