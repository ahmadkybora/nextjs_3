import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Login",
    description: "Login Page",
    viewport: "width=device-width, initial-scale=1.0"
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
