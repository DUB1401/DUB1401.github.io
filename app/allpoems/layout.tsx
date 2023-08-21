// Экспортирует локальные метаданные.
export const metadata = {
	title: "Стихи — DUB1401",
	description: "Собрание стихов авторства DUB1401.",
}

// Оборачивает React-объект [список блочно представленных стихотворений].
export default function PoemsLayout({children}: {children: React.ReactNode}) {
	return (
		<>{children}</>
	)
}