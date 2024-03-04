export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
