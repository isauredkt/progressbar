function calculateProgress() {
  const now = new Date();

  // Durée de vie estimée (par exemple 80 ans)
  const birthDate = new Date("1998-08-14"); // Remplacez par votre date de naissance
  const lifeExpectancy = 85; // Durée de vie estimée en années
  const endOfLife = new Date(birthDate.getFullYear() + lifeExpectancy, 0, 1);
  const lifeProgress = ((now - birthDate) / (endOfLife - birthDate)) * 100;

  // Année en cours
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;

  // Mois en cours
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const monthProgress =
    ((now - startOfMonth) / (endOfMonth - startOfMonth)) * 100;

  // Jour en cours
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const dayProgress = ((now - startOfDay) / (endOfDay - startOfDay)) * 100;

  // Mettre à jour les barres et les pourcentages
  updateProgress("life", lifeProgress);
  updateProgress("year", yearProgress);
  updateProgress("month", monthProgress);
  updateProgress("day", dayProgress);
}

function updateProgress(type, progress) {
  // Arrondir le pourcentage à l'unité
  const roundedProgress = Math.min(Math.round(progress), 100);

  // Mettre à jour la largeur de la barre de progression
  const progressBar = document.getElementById(`${type}-progress`);
  progressBar.style.width = `${roundedProgress}%`;

  // Mettre à jour le texte du pourcentage
  const percentageText = document.getElementById(`${type}-percentage`);
  percentageText.textContent = `${roundedProgress}%`;
}

// Calcul initial et mise à jour chaque minute
calculateProgress();
setInterval(calculateProgress, 60000);
