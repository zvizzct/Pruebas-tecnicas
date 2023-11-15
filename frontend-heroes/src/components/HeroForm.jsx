import './HeroForm.css'

export const HeroForm = ({
  activeHero,
  setactiveHero,
  handleHeroById,
  handleHeroByInput,
  handleModifyHero,
  handleInitState,
  currentHero
}) => {
  const modifyHero = (e) => {
    e.preventDefault()
    console.log(activeHero.hero)
    handleModifyHero(activeHero.hero)
  }

  const heroById = (e) => {
    e.preventDefault()
    const id = e.target.id.value * 1
    handleHeroById(id)
  }

  const heroByInput = (e) => {
    e.preventDefault()
    handleHeroByInput(e.target.input.value)
  }

  const allHeroes = () => {
    handleInitState()
  }

  return (
    <div className="form">
      <button className="btn-restore" onClick={allHeroes}>
        Restore
      </button>

      <form onSubmit={heroById}>
        <label>
          Find by id:
          <input type="number" id="id" />
        </label>
        <button type="submit">Find</button>
      </form>

      <form onSubmit={heroByInput}>
        <label>
          Find by input:
          <input type="text" id="input" />
        </label>
        <button type="submit">Find</button>
      </form>

      <form onSubmit={modifyHero}>
        <label>
          Modify hero:
          <input
            type="text"
            id="modifyInput"
            value={activeHero.hero.superhero}
            onChange={(e) =>
              setactiveHero({
                ...activeHero,
                hero: { ...activeHero.hero, superhero: e.target.value }
              })
            }
          />
        </label>
        <button type="submit">Modify</button>
      </form>
    </div>
  )
}
