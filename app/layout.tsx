import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Pronunciation",
  description: "English pronunciation practice app",
};

export const viewport: Viewport = {
  // = --paper。iOS/Android のブラウザ上端バー（ノッチ周辺）を無地の用紙色にし、
  // スクロール中に固定パンくずの上へ中身が透けて見えるのを防ぐ。--paper と同値に保つ。
  themeColor: "#f6f4ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="antialiased">
      <body className="bg-grid-paper">
        <div className="sheet">
          <header className="sheet-head">
            <p className="wordmark">
              <Link href="/">ENGLISH&nbsp;PRONUNCIATION</Link>
            </p>
            <p className="subtitle">英語発音練習</p>
            <div className="ruler" aria-hidden="true" />
          </header>
          <div className="sheet-body">{children}</div>
        </div>
      </body>
    </html>
  );
}
