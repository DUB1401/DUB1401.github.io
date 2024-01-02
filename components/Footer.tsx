"use client"

import {useEffect, useState} from "react";

// Возвращает React-объект: footer сайта.
const Footer = () => {
	// Хук состояния: текущий год.
	const [Year, setYear] = useState(new Date().getFullYear());
	// Эффект: установка текущего года.
	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="flex justify-around items-center text-center mt-5 h-16 bg-slate-950">
			Powered by Next.js & GitHub Pages. Copyright © DUB1401. 2018-{Year}.
		</footer>
	)
}

export {Footer};