/** @type {import('next').NextConfig} */

const nextConfig = {
	output: "export",
	images: {
  		unoptimized: true
	}
};

module.exports = {
	images: {
		domains: ["localhost", "dub1401.github.io"]
	}
}
