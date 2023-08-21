import {PoemsJSON} from "@/data/poems"
import {GetData} from "@/libs/GetData"

// Декларирование параметров CreatePoemsBlocks.
type Props = {
	ShowAllPoems: boolean;
}

// Генерирует блоки представления стихотворений.
export function PoemsBlocks({ShowAllPoems}: Props) {
	// Запрос списка алиасов стихотворений.
	const PoemsListData = GetData(null);
	// Получение списка алиасов стихотворений.
	const PoemsList: string[] = PoemsListData["slugs" as keyof typeof PoemsListData]
	// Список ссылок на иллюстрации стихотворений.
	let PoemsImages: string[] = [];
	// Список названий стихотворений.
	let PoemsNames: string[] = [];
	// Итоговые HTML-блоки.
	let ResultBlocks: JSX.Element[] = [];

	// Получение ссылок на иллюстрации стихотворений.
	for (let PoemSlug of PoemsList) {
		PoemsImages.push("/images/poems/" + PoemSlug + ".webp");
	}

	// Получение списка названий.
	for (let PoemSlug of PoemsList) {
		PoemsNames.push(PoemsJSON[PoemSlug as keyof typeof PoemsJSON]["title"]);
	}

	// Генерация тегов изображений.
	const img_HTML = PoemsImages.map((PoemImage) => {
		return <img className="w-full h-full rounded-md" src={PoemImage}></img>;
	});

	// Генерация заголовков.
	const h2_HTML = PoemsNames.map((PoemName) => {
		return <h2 className="text-lg mt-1">{PoemName}</h2>;
	});

	// Генерация блоков стихотворений.
	for (let index = 0; index < PoemsImages.length; index++) {
		// Адрес странички стихотворения.
		const PoemLink: string = "/poems/" + PoemsList[index];
		// Иконка модификатора доступа.
		let AccessIcon: JSX.Element = <></>;

		// Добавление блока стихотворения в результирующий контейнер, если стихотворение не скрыто.
		if (PoemsJSON[PoemsList[index] as keyof typeof PoemsJSON]["hidden"] == false || ShowAllPoems == true) {
			ResultBlocks.push(
				<div className="flex flex-col text-center mx-5 my-10" key={PoemsList[index]}>
					<a href={PoemLink} className="poem-block h-1/3">
						{img_HTML[index]}
						<div className="flex flex-row justify-center">
							{h2_HTML[index]}
						</div>
					</a>
				</div>
			);
		}
	}

	return <>{ResultBlocks}</>;
}