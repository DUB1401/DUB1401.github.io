// Имплементация fetch-запроса.
export const Fetcher = async (URL: string) => {
	// Выполнение fetch-запроса по URL.
	const Response = await fetch(process.env.NEXT_PUBLIC_CURRENT_HOST + URL);

	// Проверка успешности выполнения запроса.
	if (Response.ok == false) throw new Error("Failed to fetch data.");

	return Response.json();
}