import './style.css'

// filter guns and melee function
const dom = {
container: document.querySelector(".container"),
guns: document.querySelectorAll(".gun"),
melee: document.querySelectorAll(".melee"),
gunbutton: document.querySelector("#Guns"),
meleebutton: document.querySelector("#Melee"),
}
dom.meleebutton.addEventListener("click", function (sortmelee){
  sortmelee.preventDefault();
  dom.container.innerHTML = `<div class="card" id = "gun">
  <h2 class="card-title">Boomstick</h2>
  <img src="Boomstick.png" alt="" class="card-img">
  <p class="card-desc">This shotgun allows you to load up to four shells in the chamber at once, propelling
      you
      backwards when fired. Hold down reload for faster loading of each shell.</p>         <div class="card">
      <h2 class="card-title">'Hyperion' Heavy Laser</h2>
      <img src="hyperion.png" alt="" class="card-img">
      <p class="card-desc">Heavy laser cannon with very slow fire rate but massive burst damage. Lasers have a
          change of piercing and have innate flame rounds. Loses damage over long distance.</p>

  </div>`
});
