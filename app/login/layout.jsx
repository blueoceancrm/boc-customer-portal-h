export const metadata = {
    title: 'Login to protal',
    description: 'Login page for customers',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}