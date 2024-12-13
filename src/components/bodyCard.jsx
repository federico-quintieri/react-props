// Importo oggetto stile css
import css from "./bodyCard.module.css";

// Componente che ci ritorna una card jsx
function Card({ title, image, content, tags, published }) {
  if (!published) {
    return null; // Non ritorna nulla se `published` è false
  }

  return (
    <div className={css.card}>
      <img src={image} alt="sekiro img" />
      <div>
        <h3>
          {title} <span>{tags.join(" - ")}</span>
        </h3>
        <p>{content}</p>
        <button>Clicca Qui</button>
      </div>
    </div>
  );
}

export default Card;
