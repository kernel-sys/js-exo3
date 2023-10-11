const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Ajoute Toto et Tata au tableau
users.push("Toto", "Tata");

console.log("Tableau d'utilisateurs mis à jour :");
users.forEach((user, index) => {
    console.log(`Utilisateur ${index + 1}: ${user}`);
});
