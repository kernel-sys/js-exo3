const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Supprime le dernier prénom du tableau
users.pop();

console.log("Tableau d'utilisateurs mis à jour :");
users.forEach((user, index) => {
    console.log(`Utilisateur ${index + 1}: ${user}`);
});
