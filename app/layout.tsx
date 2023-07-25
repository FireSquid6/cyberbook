import Header from "@/components/Header";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cyberbook",
  description: "The solution to taking notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-4 my-2">
          <main className="mx-auto max-w-2xl min-h-[87.5vh]">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
