const characters = [
  {
    name: 'Ryu',
    img: ''
  },
  {
    name: 'Honda',
    img: ''
  },
  {
    name: 'Blanka',
    img: ''
  },
  {
    name: 'Guile',
    img: ''
  },
  {
    name: 'Ken',
    img: ''
  },
  {
    name: 'Chun-Li',
    img: ''
  },
  {
    name: 'Zangief',
    img: ''
  },
  {
    name: 'Dhalsim',
    img: ''
  },
  {
    name: 'Balrog',
    img: ''
  },
  {
    name: 'Vega',
    img: ''
  },
  {
    name: 'Sagat',
    img: ''
  },
  {
    name: 'Bison',
    img: ''
  }
];

function randomizeCharacters() {
  let character = characters[Math.floor(Math.random() * characters.length)];

  document.getElementById('character').innerHTML = character.name;
}
