const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Supprime le premier prénom du tableau
users.shift();

console.log("Tableau d'utilisateurs mis à jour :");
users.forEach((user, index) => {
    console.log(`Utilisateur ${index + 1}: ${user}`);
});
