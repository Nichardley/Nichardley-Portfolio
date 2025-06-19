function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}

// Gestion de l'envoi du formulaire
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les données saisies
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const sujet = document.getElementById('sujet').value;
  const message = document.getElementById('message').value;

  // Pour l'instant, on affiche juste un message de confirmation
  const confirmation = document.getElementById('confirmationMessage');
  confirmation.textContent = `Merci ${prenom}, votre message a bien été envoyé !`;

  // Optionnel : réinitialiser le formulaire
  document.getElementById('contactForm').reset();
});
