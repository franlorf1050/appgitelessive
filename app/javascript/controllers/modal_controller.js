import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}

console.log("hello from new app");

const setupModalLinks = (modalLinkId, gridId, closeButtonId, linksContainerClass, links) => {
  const modalLink = document.getElementById(modalLinkId);
  const closeButton = document.getElementById(closeButtonId);
  const cardsGrid = document.getElementById(gridId);
  const cardsActivity = document.querySelector(".cards-activity");

  modalLink.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    console.log(event);
    console.log(event.currentTarget);

    // Basculer la visibilité de la div et l'opacité de .cards-activity
    if (cardsGrid.style.display === "none" || cardsGrid.style.display === "") {
      cardsGrid.style.display = "flex"; // Utilisez flex pour centrer les éléments
      cardsActivity.classList.add('dimmed');

      // Vérifiez si le conteneur de liens existe déjà
      let linksContainer = cardsGrid.querySelector(linksContainerClass);

      // Vider le conteneur de liens avant d'ajouter de nouveaux liens
      linksContainer.innerHTML = '';

      // Ajoutez les nouveaux liens dans le conteneur
      links.forEach(link => {
        linksContainer.insertAdjacentHTML("beforeend", `<a data-link href="${link.url}" target="_blank">${link.text}</a>`);
      });
    } else {
      cardsGrid.style.display = "none";
      cardsActivity.classList.remove('dimmed');
    }
  });

  // Ajoutez un événement de clic au bouton "btn-close"
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    cardsGrid.style.display = "none";
    cardsActivity.classList.remove('dimmed');
  });
};

// Liens de golf
setupModalLinks("modal-link-golf", "golf-grid", "btn-close-golf", '.golf-links-container', [
  { url: "https://www.golfderougemont.be/", text: "Golf de Rougemont" },
  { url: "https://www.golfdurbuy.be/fr/five-nations-golf-club", text: "Five Nations Golf Club" },
  { url: "https://rgccra.be/", text: "Royal Golf Club du chateau Royal des Ardennes" },
  { url: "https://www.golfdurbuy.be/fr/golf-de-durbuy", text: "Golf de Durbuy" }
]);

// Liens de restaurants
setupModalLinks("modal-link-restaurants", "restaurants-grid", "btn-close-restaurants", '.restaurant-links-container', [
  { url: "https://wallux.com/lincontournable-rochefort", text: "L'Incontournable (cuisine française)" },
  { url: "https://www.othentique.be/", text: "Othentique (cuisine du terroire)" },
  { url: "https://www.la-gourmandise.be/", text: "La Gourmandise (cuisine du terroire)" },
  { url: "https://bistrotblaise.be/", text: "Bistrot Blaise (cuisine française)" },
  { url: "https://www.quartier-latin.be/fr/le-restaurant-brasserie-du-quartier-latin", text: "Le Quartier Latin (restaurant-brasserie)" },
  { url: "https://www.maximecollard.be/", text: "Les terrasse de L'Our (brasserie-bistronomie)" },
  { url: "https://www.daverdisse.com/", text: "Daverdisse (restaurant gastronomique)" },
  { url: "https://www.chateaudevignee.be/", text: "Château de Vignée (restaurant gastronomique: 1 étoile *)" },
  { url: "https://www.lespiedsdansleplat.be/", text: "Les Pieds dans le Plat (restaurant gastronomique: 1 étoile *)" },
  { url: "https://latabledemanon.com/", text: "La Table de Manon (restaurant gastronomique: 1 étoile *)" },
  { url: "https://www.maximecollard.be/", text: "La table de Maxime (restaurant gastronomique: 2 étoiles **)" },
]);
