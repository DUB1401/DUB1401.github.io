"use client"

import {PoemsBlocks} from "@/components/PoemsBlocks"

//================================================================================//
//---> Экспортируемые компоненты.
//================================================================================//

// Возвращает React-объект: список блочно представленных стихотворений.
export default function Poems() {
	
	return <div className="flex flex-wrap justify-center w-full"><PoemsBlocks ShowAllPoems={true}></PoemsBlocks></div>;	
}
