function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les données saisies
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const sujet = document.getElementById('sujet').value;
  const message = document.getElementById('message').value;

  // Affiche une alerte
  alert("Message envoyé avec succès !");

  // Message de confirmation dans la page (facultatif)
  const confirmation = document.getElementById('confirmationMessage');
  confirmation.textContent = `Merci ${prenom}, votre message a bien été envoyé !`;

  // Réinitialiser le formulaire
  document.getElementById('contactForm').reset();
});
