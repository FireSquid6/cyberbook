import Header from "@/components/Header";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
