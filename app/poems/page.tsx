"use client"

import {useSearchParams} from "next/navigation"
import {PoemsBlocks} from "@/components/PoemsBlocks"

//================================================================================//
//---> Дополнительные методы.
//================================================================================//

// Выполняет поиск параметра и возвращает его значение.
function ParamSearcher(ParamName: string) {
	// Объект парсера запросов URL. 
	const SearchParams  = useSearchParams()
	// Выполнение поиска аргумента.
	let ArgumentValue: string | null = SearchParams.get(ParamName)

	return ArgumentValue
}

//================================================================================//
//---> Экспортируемые компоненты.
//================================================================================//

// Возвращает React-объект: список блочно представленных стихотворений.
export default function Poems() {
	// Состояние отображения скрытых стихотворений.
	let IsHidden: boolean = false;
	// Если в URL присутствует аргумент, переключить отображение скрытых стихотворений.
	if (ParamSearcher("hidden") == "true") IsHidden = true;

	return <div className="flex flex-wrap justify-center w-full"><PoemsBlocks ShowAllPoems={IsHidden}></PoemsBlocks></div>;
}
