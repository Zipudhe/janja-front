import StyledComponentsRegistry from "../lib/styleRegistery"
import { GlobalStyles } from "./globalStyles"
import { Header } from "../components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}