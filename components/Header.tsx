"use client"

import Link from "next/link";
import React from "react";

// Возвращает React-объект: header сайта.
const Header = () => {

	function CloseMenu() {
		ChangeIsOpen(false);
	}

	function ReverseMenuState() {
		ChangeIsOpen(!IsOpen);
	}

	const [IsOpen, ChangeIsOpen] = React.useState(false);


	return (
		<header className="flex flex-row justify-between z-10 bg-slate-950 h-16">

			<div className={IsOpen ? "hidden duration-200" : "flex items-center ml-5 duration-200"}>
				<Link href="/" className="text-5xl">Box</Link>
			</div>

			<nav className={IsOpen ? "fixed flex flex-col justify-start md:hidden h-screen w-screen duration-200 bg-slate-950" : "duration-200"}>

				<button className={IsOpen ? "flex flex-row justify-end text-4xl mr-5 mt-5 h-auto md:hidden" : "flex flex-col justify-center text-4xl mr-5 h-full md:hidden"} onClick={ReverseMenuState}>{IsOpen ? "✖" : "≡"}</button>

				<div className={IsOpen ? "flex flex-col justify-start md:hidden h-full" : "hidden md:flex flex-col md:flex-row h-full"}>

					<div className="flex items-center mx-10 my-3 md:my-0">
						<Link href="/projects" className="text-3xl hover:text-slate-500" onClick={CloseMenu}>
							<span className={IsOpen ? "pr-5" : "hidden"}>🛠️</span>
							<span>Проекты</span>
						</Link>
					</div>

					<div className="flex items-center mx-10 my-3 md:my-0">
						<Link href="/poems" className="flex flex-row text-3xl hover:text-slate-500" onClick={CloseMenu}>
							<span className={IsOpen ? "pr-5" : "hidden"}>📗</span>
							<span>Стихи</span>
						</Link>
					</div>

					<div className="flex items-center mx-10 my-3 md:my-0">
						<Link href="/about" className="text-3xl hover:text-slate-500" onClick={CloseMenu}> 
							<span className={IsOpen ? "pr-5" : "hidden"}>❔</span>
							<span>О сайте</span>
						</Link>
					</div>
				</div>

			</nav>

		</header >

	)
}

export { Header };