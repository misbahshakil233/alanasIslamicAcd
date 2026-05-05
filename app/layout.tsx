import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Al Anas Academy",
    template: "%s | Al Anas Academy",
  },
  description: "Learn Quran and modern skills online with Al Anas Academy",
  keywords: [
    "Quran learning",
    "Online academy",
    "Web development",
    "Islamic education",
  ],
  authors: [{ name: "Al Anas Academy" }],
  openGraph: {
    title: "Al Anas Academy",
    description: "Learn Quran and modern skills online",
    url: "https://yourdomain.com",
    siteName: "Al Anas Academy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}