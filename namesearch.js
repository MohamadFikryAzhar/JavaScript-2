const names = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"
];

function searchName(keyword, limit, callback) {
  const filteredNames = names.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
  const slicedNames = filteredNames.slice(0, limit);
  callback(slicedNames);
}

function displayNames(results) {
  console.log(results);
}

// Contoh penggunaan
searchName("ca", 3, displayNames);
