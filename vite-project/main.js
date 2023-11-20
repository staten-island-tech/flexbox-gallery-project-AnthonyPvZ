import './style.css'

// filter guns and melee function
const cards = [{
  title: "Boomstick",
  image: "/Boomstick.png",
  description: "This shotgun allows you to load up to four shells in the chamber at once, propelling you backwards when fired. Hold down reload for faster loading of each shell.",
},
{
  title: "'Hyperion' Heavy Laser",
  image: "/hyperion.png",
  description: "testHeavy laser cannon with very slow fire rate but massive burst damage. Lasers have a change of piercing and have innate flame rounds. Loses damage over long distance.",
}];

const container = document.querySelector("#container");

cards.forEach((result, y) => {
  const card = document.createElement('div');
  card.classlist = 'card';
  const description = `<div class="card"> 
    <h2 class="card-title">${result.title}</h2>
    <img src="${result.image}" alt="" class="card-img">
    <p class="card-desc">${result.description}</p>
  </div>`;
  container.innerHTML += description;
})

  /* <div class="card">
            <h2 class="card-title">Murasama</h2>
            <img src="murasama.png" alt="" class="card-img">
            <p class="card-desc">It's the only thing I know for real…
                Can dodge in all directions.
                Can perfect block/parry with good timing, greatly boosting attacks and dodges. Has a 3 hit combo.
                Regular
                blocking gives a slight boost.
                Consumes meter on swing.</p>
        </div> */


// https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array