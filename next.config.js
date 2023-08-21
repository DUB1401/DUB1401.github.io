/** @type {import('next').NextConfig} */

// Выставление параметра оптимизации изображений.
let ImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true

// Конфигурация Next.js.
const nextConfig = {
	output: "export",
	images: {
  		unoptimized: ImageUnoptimize,
		  domains: ["localhost", "dub1401.github.io"]
	}
};

// Импортирование конфигурации.
module.exports = nextConfig;