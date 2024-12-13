import css from "./bodyCard.module.css";

function card() {
  const oggettoData = {
    titolo: "Sekiro",
    img: "/images/sekiro.jpg",
    descrizione:
      "Sekiro: Shadows Die Twice[a] is a 2019 action-adventure game developed by FromSoftware. It was released in Japan by FromSoftware and internationally by Activision for the PlayStation 4, Windows and Xbox One in March 2019 and for Stadia in October 2020.",
  };

  // Restituisco JSX
  return (
    <div className={css.card}>
      <img src={oggettoData.img} alt="sekiro img" />
      <div>
        <h3>{oggettoData.titolo}</h3>
        <p>{oggettoData.descrizione}</p>
        <button>Die more than twice</button>
      </div>
    </div>
  );
}

export default card;
