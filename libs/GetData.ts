import {PoemsJSON} from "@/data/poems"

// Обработчик запросов к данным.
export function GetData(Request: string | null) {
	// Данные о стихотворении.
	let PoemData: string[] | any;

	// Если запрашивается список стихотворений.
	if (Request == null) {
		PoemData = {slugs: Object.keys(PoemsJSON)}
	}
	// Если запрашиваются данные о конкретном стихотворении.
	else {
		PoemData = PoemsJSON[Request as keyof typeof PoemsJSON]
	}

	return PoemData;
}