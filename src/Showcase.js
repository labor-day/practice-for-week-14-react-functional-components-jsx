import image from "./images/bulbasaur.jpg";

function Showcase() {
  let favPokemon = "Bulbasaur";

  let pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={image} alt={favPokemon}></img>
      <h2 style={{ backgroundColor: "lightgray" }}>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is:{" "}
        <span style={{ backgroundColor: "#FFFFFF", color: "#00FF00" }}>
          {pokeCharacteristics["move"]}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
