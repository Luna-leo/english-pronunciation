import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { VoiceBadge } from "@/components/speech/VoiceBadge";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Pronunciation",
  description: "English pronunciation practice app",
};

export const viewport: Viewport = {
  // = --paper（リテラル hex は :root の --paper と同値に保つ）。
  // iOS 26 Safari は theme-color を無視する（半透明グラスのステータスバーは Web から
  // 不透明化できない＝既知の OS 仕様）。これは主に Android Chrome の上端バー用。
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
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="wordmark">
                  <Link href="/">ENGLISH&nbsp;PRONUNCIATION</Link>
                </p>
                <p className="subtitle">英語発音練習</p>
              </div>
              <VoiceBadge />
            </div>
            <div className="ruler" aria-hidden="true" />
          </header>
          <div className="sheet-body">{children}</div>
        </div>
      </body>
    </html>
  );
}
