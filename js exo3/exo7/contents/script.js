const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Inverse l'ordre des éléments dans le tableau
users.reverse();

// Supprime le premier prénom (le dernier après inversion)
users.pop();

// Supprime le dernier prénom (le premier après inversion)
users.shift();

console.log("Tableau d'utilisateurs inversé et modifié :");
users.forEach((user, index) => {
    console.log(`Utilisateur ${index + 1}: ${user}`);
});
