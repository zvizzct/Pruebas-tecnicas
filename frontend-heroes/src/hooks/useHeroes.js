import { useReducer } from 'react'
import { heroesReducer } from './heroesReducer'
import { heroesJson } from '../static/heroes'

const init = () => heroesJson

export const useHeroes = () => {
  const [heroes, dispatch] = useReducer(heroesReducer, [], init)

  const handleInitState = () => {
    const action = {
      type: 'init',
      payload: heroesJson
    }
    dispatch(action)
  }

  const handleHeroById = (id) => {
    const action = {
      type: 'Hero by id',
      payload: id
    }
    dispatch(action)
  }
  const handleHeroByInput = (input) => {
    const action = {
      type: 'Hero by input',
      payload: input
    }
    dispatch(action)
  }

  const handleModifyHero = (heroes) => {
    const action = {
      type: 'Modify hero',
      payload: heroes
    }
    dispatch(action)
  }
  return {
    heroes,
    handleHeroById,
    handleInitState,
    handleHeroByInput,
    handleModifyHero
  }
}
