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
          <Header imageSrc="https://images.unsplash.com/photo-1692060234392-aa41b4703065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}