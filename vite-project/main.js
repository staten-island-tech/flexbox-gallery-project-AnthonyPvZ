import './style.css'

// filter guns and melee function
const cards = [{
  title: "Boomstick",
  type: "gun",
  image: "/Boomstick.png",
  description: "This shotgun allows you to load up to four shells in the chamber at once, propelling you backwards when fired. Hold down reload for faster loading of each shell.",
},
{
  title: "'Hyperion' Heavy Laser",
  type: "gun",
  image: "/hyperion.png",
  description: "Heavy laser cannon with very slow fire rate but massive burst damage. Lasers have a change of piercing and have innate flame rounds. Loses damage over long distance.",
},
{
  title: "Murasama",
  type: "melee",
  image: "/murasama.png",
  description: "It's the only thing I know for real… Can dodge in all directions. Can perfect block/parry with good timing, greatly boosting attacks and dodges. Has a 3 hit combo. Regular blocking gives a slight boost.",
},
{
  title: "'Dark Arts' Necro Blade",
  type: "melee",
  image: "/dark arts.png/",
  description: "A blade used in rituals to commune with dark spirits. Reload to leave behind your body and become a shadow, dodging attacks & marking zombies that you have touched. Leaving the shadow form deals damage to marked zombies and empowers the blade. Reload again to leave the shadow form early.",
},
{
  title: "'Bloodhound' Vampire Sword",
  type: "melee",
  image: "/Vampire sword.png",
  description: "A cursed sword with the ability to lifesteal from its victims. Health is stored and can be accessed with reload. Each stored blood usage will have a cooldown of 10 seconds.",
},
{
  title: "'Tremor' gravity hammer",
  type: "melee",
  image: "/Grav hammer.png",
  description: "Has considerable knockback on you and nearby zombies while in propelling mode. Swings very fast for a heavy hammer. Instant swing while stable, cleaves while in stable mode. Charged attacks self knockback 60% further.",
},
{
  title: "'Bloodthirst' Skullblade",
  type: "melee",
  image: "/Skullblade.png",
  description: "You feel great power touching the blade but your heart and mind seem to get empty… go slaughter them all. Press reload to toss damaging skulls based on your presence. Press Q to change presences and gain an aura. Landing skulls will trigger your buildup and grant you a buff based on your presence.",
},
{
  title: "Bone Shiv",
  type: "melee",
  image: "/bone shiv.png",
  description: "Very sharp and deals extra damage to the back. Backstabbing a zombie lets you phase at full speed for a short duration. Grants you fervor, speed and blood armor on backstab kill. Hides your aura aswell.",
},
{
  title: "'Chaos' Blades",
  type: "melee",
  image: "/Chaos blades.png",
  description: "Press RELOAD to throw one of your blades of chaos at a wall or zombie, pulling you to the location. Block to detach yourself. Attacking zombies with the blades builds up to an unbridled rage.",
},
{
  title: "'Revelation' Heavenly Sword",
  type: "melee",
  image: "/spirit sword.png",
  description: "A legendary sword said to have come from the heavens. It pierces shadow resist on undead, can shatter meteors, and builds up to emitting a fiery blaze. Innate fire attachment.",
},
{
  title: "'Heretic' Whirligig Saw",
  type: "melee",
  image: "/whirligig.png",
  description: "A rod with attached rotating mechanical saws which can deal serrate damage. Hits many times very quickly in bursts.",
},
{
  title: "Sanity Swordshifter",
  type: "melee",
  image: "/sanity sword.png",
  description: "Pressing SPRINT + RELOAD alternates between a sword and glaive. The sword has a 3 hit combo and the glaive can hit in an arc. Can Change firemode to dodge or teleport to a sigil.",
}
];

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
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}})

buttons.Melees.addEventListener("click", function (filtermelee) {
  filtermelee.preventDefault();
  container.innerHTML = ""
  cards.filter((melees) => {
    return melees.type === "melee"
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
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}})

const contrabands = [{
  title: "Force Staff",
  type: "tool",
  image: "",
  description: "",
},
{
  title: "Bane of Zblock",
  type: "trinket",
  image: "",
  description: "",
}]
buttons.Contraband.addEventListener("click", function (filtercontraband) {
  filtercontraband.preventDefault();
  container.innerHTML = "";
  contrabands.forEach((result) => {
    const card = document.createElement('div');
    card.classlist = 'card';
    const description = `<div class="card"> 
    <h2 class="card-title">${result.title}</h2>
    <img src="${result.image}" alt="" class="card-img">
    <p class="card-desc">${result.description}</p>
  </div>`;
    container.innerHTML += description;
  })
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } 
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