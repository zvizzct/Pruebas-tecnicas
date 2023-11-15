import './HeroCard.css'
export const HeroCard = (props) => {
  console.log(props)
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    props.hero
  const { onClick } = props
  return (
    <article className="hero-card" onClick={onClick}>
      <h2>{superhero}</h2>
      <p>
        <strong>Publisher:</strong> {publisher}
      </p>
      <p>
        <strong>Alter Ego:</strong> {alter_ego}
      </p>
      <p>
        <strong>First Appearance:</strong> {first_appearance}
      </p>
      <p>
        <strong>Characters:</strong> {characters}
      </p>
    </article>
  )
}
