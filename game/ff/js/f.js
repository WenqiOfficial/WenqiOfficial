document.getElementById('myButton').addEventListener('click', () => {
	const script = document.createElement("script");
	script.src = "https://cdn.jsdelivr.net/gh/wallleap/cdn/js/sakura.js";
	document.head.appendChild(script);
})