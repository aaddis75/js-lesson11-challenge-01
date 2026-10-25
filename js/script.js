const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,

    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log("Yay! " + this.name + " loves to play!");
        this.isTired = this.isTired + 1;
      }
    },

    sleep: function () {
      console.log(this.name + " needs a nap. Zzz…");
      this.isTired = 1;
    },
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
//clover.sleep();

const baxter = createPet("Baxter", "hamster");
//baxter.play();

const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);
//console.log(clover, baxter);
