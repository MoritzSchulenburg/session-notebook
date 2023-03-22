const query = new URLSearchParams(location.search);

// console.log(query.get("name"));

const color = query.get("outfit");

document.body.style.backgroundColor = color;
