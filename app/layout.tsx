import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Pronunciation",
  description: "English pronunciation practice app",
};

export const viewport: Viewport = {
  // themeColor = --paper（リテラル hex は :root の --paper と同値に保つ）。
  // viewportFit: cover で env(safe-area-inset-*) を有効化し、iOS Safari の
  // 半透明ステータスバー帯を globals.css の固定パネルで無地に塞ぐ（中身の透け防止）。
  themeColor: "#f6f4ee",
  viewportFit: "cover",
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
