export const heroesReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'init':
      return action.payload
    case 'Hero by id':
      return initialState.filter((hero) => hero.id === action.payload)
    case 'Hero by input':
      return initialState.filter((hero) =>
        hero.superhero.toLowerCase().includes(action.payload.toLowerCase())
      )
    case 'Modify hero':
      return initialState.map((hero) => {
        if (hero.id === action.payload.id) {
          return { ...hero, superhero: action.payload.hero }
        } else {
          return hero
        }
      })

    default:
      return initialState
  }
}
