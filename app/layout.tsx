import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Pronunciation",
  description: "English pronunciation practice app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-grid-paper">
        <div className="sheet">
          <header className="sheet-head">
            <p className="wordmark">ENGLISH&nbsp;PRONUNCIATION</p>
            <p className="subtitle">英語発音練習</p>
            <div className="ruler" aria-hidden="true" />
          </header>
          <div className="sheet-body">{children}</div>
        </div>
      </body>
    </html>
  );
}
