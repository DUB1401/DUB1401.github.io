import {GetData} from "@/libs/GetData"

//================================================================================//
//---> Описания типов и интерфейсы.
//================================================================================//

// Декларирование параметров generateMetadata и Poem.
type PoemSlug = {
	params: {slug: string}
}

//================================================================================//
//---> Вспомогательные компоненты.
//================================================================================//

// Возвращает React-объект: размеченная тегами абзацев колонка стихотворения..
function CreatePoemMarkup(Text: string) {
	// Разбиение текста стихотворения по символу новой строки.
	const ParagraphsList = Text.split("\n");

	// Заключение каждой строки в тег абзаца.
	const Poem = ParagraphsList.map((Paragraph) => {
	  return <p>{Paragraph}</p>;
	});
  
	return <div>{Poem}</div>;
}

//================================================================================//
//---> Экспортируемые компоненты.
//================================================================================//

// Предоставляет список алиасов для статического роутинга.
export async function generateStaticParams() {
	// Чтение списка алиасов.
	let PoemsSlugs: string[] = GetData(null)["slugs"];

	return PoemsSlugs.map((Slug) => ({
	  slug: Slug,
	}))
  }

// Генерирует локальные метаданные страниц с динамическим роутингом.
export function generateMetadata({params: {slug}}: PoemSlug) {
	// Запрос данных стихотворения.
	const PoemData = GetData(slug);

	return {title: PoemData["title" as keyof typeof PoemData] + " – DUB1401"};
}

// Возвращает React-объект: контейнер стихотворения и иллюстрации.
export default function Poem({ params: { slug } }: PoemSlug) {
	// Запрос данных стихотворения.
	const PoemData = GetData(slug);
	// Составления ссылки на иллюстрацию.
	const ImageLink = "/images/poems/" + slug + ".webp";
	// Генерация разметки.
	const Poem = CreatePoemMarkup(PoemData["text" as keyof typeof PoemData]);
	// Заметка.
	let PoemNote: JSX.Element = <></>;

	// Если заметка есть, создать для неё элемент.
	if (PoemData["note" as keyof typeof PoemData] != null) {
		PoemNote = <div className="flex flex-row justify-center w-full my-10 px-5 text-center"><i className="md:w-1/2"><p>{PoemData["note" as keyof typeof PoemData]}</p></i></div>
	}

	return (
		<div className="my-5 w-full">

			<div className="flex flex-row justify-center w-full">
				<h2 className="poem text-center">{PoemData["title" as keyof typeof PoemData]}</h2>
			</div>

			<div className="flex flex-row justify-center w-full my-10 px-5">{Poem}</div>

			{PoemNote}

			<div className="flex justify-center">
				<img className="poem rounded-xl" src={ImageLink}></img>
			</div>


		</div>
	);
}

