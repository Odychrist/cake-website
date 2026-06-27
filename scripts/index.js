const testimonials = [
  {
    avis: "Les gâteaux sont vraiment délicieux et toujours bien présentés. Mes élèves en redemandent à chaque fête scolaire !",
    prenom: "Aïcha",
    profession: "Enseignante",
  },
  {
    avis: "Service rapide, qualité excellente. J’ai commandé pour un événement d’entreprise, tout le monde a apprécié.",
    prenom: "Koffi",
    profession: "Entrepreneur",
  },
  {
    avis: "J’adore vos gâteaux ! Ils ne sont pas trop sucrés et le goût est incroyable. Je recommande à 100%.",
    prenom: "Fatoumata",
    profession: "Étudiante",
  },
  {
    avis: "Design magnifique et goût exceptionnel. C’est devenu mon choix numéro un pour les anniversaires.",
    prenom: "Emmanuel",
    profession: "Graphiste",
  },
  {
    avis: "Très bon rapport qualité-prix. Livraison à temps et service client très professionnel.",
    prenom: "Chantal",
    profession: "Comptable",
  },
  {
    avis: "Franchement surpris par la qualité. Les gâteaux sont frais et bien faits, on sent le savoir-faire.",
    prenom: "Moussa",
    profession: "Chauffeur VTC",
  },
];

const testiTrackEl = document.querySelector(".testimonials-track");

function displayTestimonials() {
  let html = "";
  testimonials.forEach((testimonial) => {
    html += `
      <article class="testimonials-card">
        <i class="fa-solid fa-quote-left testimonials-card-quote"></i>
        <div class="testimonials-card-stars">
          <i class="fa-solid fa-star" aria-hidden="true"></i>
          <i class="fa-solid fa-star" aria-hidden="true"></i>
          <i class="fa-solid fa-star" aria-hidden="true"></i>
          <i class="fa-solid fa-star" aria-hidden="true"></i>
          <i class="fa-solid fa-star" aria-hidden="true"></i>
        </div>
        <p class="testimonials-card-text">
          ${testimonial.avis}
        </p>
        <hr class="testimonials-card-separator" />
        <div class="testimonials-client-container">
          <span>${(testimonial.prenom[0] + testimonial.prenom[1]).toUpperCase()}</span>
          <div>
            <p class="testimonials-client-name">${testimonial.prenom}</p>
            <p class="testimonials-client-work">${testimonial.profession}</p>
          </div>
        </div>
      </article>
    `;
  });
  const genHTML = `
    <div class="testimonials-cards-container">    
      ${html}    
    </div>
    <div class="testimonials-cards-container">         
      ${html} 
    </div>
  `;

  testiTrackEl.innerHTML = genHTML;
}

displayTestimonials();
