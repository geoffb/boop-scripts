/**
	{
		"api":1,
		"name":"Bytes to JSON",
		"description":"Converts an array of bytes to JSON.",
		"author":"Geoff",
		"icon":"gear",
		"tags":"bytes,json,convert"
	}
**/

function main(state) {
	const bytes = JSON.parse(state.fullText);
	const json = String.fromCharCode(...bytes);
	const data = JSON.parse(json);
	state.fullText = JSON.stringify(data, undefined, 2);
}
