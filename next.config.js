/** @type {import('next').NextConfig} */

const nextConfig = {
	output: "export",
	images: {
  		unoptimized: true,
		  domains: ["localhost", "dub1401.github.io"]
	}
};

module.exports = nextConfig