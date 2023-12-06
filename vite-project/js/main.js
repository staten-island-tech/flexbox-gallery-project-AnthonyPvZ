import '../css/style.css'
import { cards, contrabands, container } from './DOM';

function Insert(blah) {
  blah.map((result) => {
    const card = document.createElement('div');
    card.classlist = 'card';
    const description = `<div class="card"> 
    <h2 class="card-title">${result.title}</h2>
    <img src="${result.image}" alt="" class="card-img">
    <p class="card-desc">${result.description}</p>
  </div>`;
    container.innerHTML += description;
  })
}
function Insertdark(blah) {
  blah.map((result) => {
    const card = document.createElement('div');
    card.classlist = 'card';
    const description = `<div class="carddark"> 
    <h2 class="card-title">${result.title}</h2>
    <img src="${result.image}" alt="" class="card-img">
    <p class="card-desc">${result.description}</p>
  </div>`;
    container.innerHTML += description;
  })
}
let buttonse = document.querySelectorAll(".button")
buttonse.forEach((btn) => btn.addEventListener("click", function () {
  let filter = btn.textContent
  container.innerHTML = ""
  let newarr = cards.filter((type) => { return type.type === filter })
  if (filter === "Reset"){Insert(cards)}
  else {Insert(newarr)}
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  if (filter === "Contraband") {
    Insertdark(contrabands)
    document.body.classList.remove("light")
    document.body.classList.add("dark")
  }
}))


/* old code
const container = document.querySelector("#container");
cards.forEach((result) => {
  const card = document.createElement('div');
  card.classlist = 'card';
  const description = `<div class="card"> 
    <h2 class="card-title">${result.title}</h2>
    <img src="${result.image}" alt="" class="card-img">
    <p class="card-desc">${result.description}</p>
  </div>`;
  container.innerHTML += description;
})
const buttons = {
  Guns: document.querySelector("#Guns"),
  Melees: document.querySelector("#Melee"),
  Contraband: document.querySelector("#Contraband")
}
buttons.Guns.addEventListener("click", function (filtergun) {
  filtergun.preventDefault();
  container.innerHTML = ""
  cards.filter(function (guns) {
    return guns.type === "gun"
  }).map((result) => {
    const card = document.createElement('div');
    card.classlist = 'card';
    const description = `<div class="card"> 
        <h2 class="card-title">${result.title}</h2>
        <img src="${result.image}" alt="" class="card-img">
        <p class="card-desc">${result.description}</p>
      </div>`;
    container.innerHTML += description;
  })
})
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}})
buttons.Melees.addEventListener("click", function (filtermelee) {
  filtermelee.preventDefault();
        </div>`;
    container.innerHTML += description;
  })
})
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}})
const contrabands = [{
  title: "Force Staff",
  type: "trinket",
  image: "",
  description: "",
}
]
}]
buttons.Contraband.addEventListener("click", function (filtercontraband) {
  filtercontraband.preventDefault();
  container.innerHTML = "";
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    }
  } 
}) */