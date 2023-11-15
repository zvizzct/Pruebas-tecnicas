import { useState } from 'react'
import { useHeroes } from '../hooks/useHeroes'

export const HeroesApp = () => {
  const {
    heroes,
    handleHeroById,
    handleInitState,
    handleHeroByInput,
    handleModifyHero
  } = useHeroes()
  const [heroModify, setheroModify] = useState({ id: -1, hero: '' })

  const modifyHero = (e) => {
    e.preventDefault()
    handleModifyHero(heroModify)
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
    <>
      <ul>
        {heroes.map(({ id, superhero }) => (
          <li onClick={() => setheroModify({ id, hero: superhero })} key={id}>
            {superhero}
          </li>
        ))}
      </ul>
      <form onSubmit={heroById}>
        <label>
          Find by id:
          <input type="numbers" id="id" />
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
          Modify hero
          <input
            type="text"
            id="modifyInput"
            value={heroModify.hero}
            onChange={(e) =>
              setheroModify({ ...heroModify, hero: e.target.value })
            }
          />
        </label>
        <button type="submit">Modify</button>
      </form>
      <button onClick={allHeroes}>Restore</button>
    </>
  )
}
