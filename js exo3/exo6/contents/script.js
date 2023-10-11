const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Supprime le premier prénom
users.shift();

// Supprime le dernier prénom
users.pop();

// Transforme le tableau en chaîne de caractères avec des virgules comme séparateur
const usersString = users.join(', ');

console.log("Tableau d'utilisateurs en chaîne de caractères :");
console.log(usersString);
