const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Remplace le 4ème prénom par Jean
users[3] = "Jean";

console.log("Tableau d'utilisateurs mis à jour :");
users.forEach((user, index) => {
    console.log(`Utilisateur ${index + 1}: ${user}`);
});
