import { NextResponse } from "next/server";
import { PoemsJSON } from "@/data/poems"

// GET: возвращает JSON-представление данных о стихотворении(ях).
export async function GET(RequestData: Request) {
	// Парсинг параметров запроса.
	const {searchParams} = new URL(RequestData.url);
	// Получение алиаса стихотворения.
	const PoemSlug: string = searchParams.get("slug") || "";
	// Данные о стихотворении.
	let PoemData;

	// Если запрашивается список стихотворений.
	if (PoemSlug == "") {
		PoemData = {slugs: Object.keys(PoemsJSON)}
	}
	// Если запрашиваются данные о конкретном стихотворении.
	else {
		PoemData = PoemsJSON[PoemSlug as keyof typeof PoemsJSON]
	}

	return NextResponse.json(PoemData);
}
