import { ReactNode } from "react";
import './globals.css';

export const metadata = {
  title: "AOK Smart Living Website",
  description:
    "Official website of AOK Limited – revolutionizing Nigerian homes with smart control, monitoring, and automation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/aok-logo.png" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
