import Navbar from "@/components/navbar/navbar"
import "@/styles/global.css"
import "@/styles/navbar.css"
import "@/styles/diary.css"


export const metadata = {
  title: 'Name Card',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar>

      </Navbar>
      {children}
      </body>
    </html>
  )
}
