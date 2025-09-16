// Array dei membri del team
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Prendo il contenitore dal DOM
const container = document.getElementById('container');

// Ciclo su ogni membro e creo la card
teamMembers.forEach(member => {
  // Creo il contenitore della card
  const card = document.createElement('div');
  card.className = 'card';

  // Riempio la card con le info del membro
  card.innerHTML = `
    <img src="${member.img}" alt="${member.name}">
    <div class="card-info">
      <h3>${member.name.toUpperCase()}</h3>
      <p>${member.role}</p>
      <a href="mailto:${member.email}">${member.email}</a>
    </div>
  `;

  // Aggiungo la card al container
  container.appendChild(card);
});
