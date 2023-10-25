export function capitalize(str, allPhrase = false) {
	if (!allPhrase) return capitalizeWord(str);

	const parts = str.split(' '); // ['hello', 'world']

	const capitalizedParts = parts.map((word) => capitalizeWord(word)); // ['Hello', 'World']

	return capitalizedParts.join(' '); // 'Hello World'
}

const capitalizeWord = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
