/** @type {import('next').NextConfig} */

const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
  		unoptimized: true,
		  domains: ["localhost", "dub1401.github.io"]
	}
};

module.exports = nextConfig