import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

import "./globals.css"

// Экспортирует глобальные метаданные.
export const metadata = {
  title: "Box By DUB1401",
  description: "Авторский блог DUB1401.",
}

// Оборачивает React-объект [контейнер главного содержимого страницы] в: HTML-конструкцию, header и footer.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
	<html lang="ru">
		<head>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
		</head>
		<body className="flex flex-col min-h-screen bg-[#1e293b]">
			<Header/>
			<main className="flex justify-around grow">{children}</main>
			<Footer/>
		</body>
	</html>
  )
}
