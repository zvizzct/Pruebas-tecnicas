import { useEffect, useState } from 'react'
import { useHeroes } from '../hooks/useHeroes'
import { HeroCard } from '../components/HeroCard'
import './HeroesApp.css'
import { HeroForm } from '../components/HeroForm'

export const HeroesApp = () => {
  const {
    heroes,
    handleHeroById,
    handleInitState,
    handleHeroByInput,
    handleModifyHero
  } = useHeroes()
  const [activeHero, setactiveHero] = useState({ id: -1, hero: '' })
  const [currentPage, setCurrentPage] = useState(0)
  const [heroesPerPage, setHeroesPerPage] = useState(6)

  const totalPages = Math.ceil(heroes.length / heroesPerPage)
  const startIndex = currentPage * heroesPerPage
  const selectedHeroes = heroes.slice(startIndex, startIndex + heroesPerPage)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 900) {
        setHeroesPerPage(2)
      } else if (width <= 1300) {
        setHeroesPerPage(4)
      } else {
        setHeroesPerPage(6)
      }
    }

    // Establecer el tamaño inicial
    handleResize()

    // Escuchar los cambios de tamaño
    window.addEventListener('resize', handleResize)

    // Limpiar el evento al desmontar
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const goToNextPage = () => {
    setCurrentPage((current) =>
      current < totalPages - 1 ? current + 1 : current
    )
  }

  const goToPreviousPage = () => {
    setCurrentPage((current) => (current > 0 ? current - 1 : current))
  }

  // console.log(heroes)
  console.log(selectedHeroes)

  return (
    <>
      <div className="container">
        <h1>Prueba técnica Heroes</h1>
        <div className="wrap">
          <HeroForm
            activeHero={activeHero}
            setactiveHero={setactiveHero}
            handleHeroById={handleHeroById}
            handleHeroByInput={handleHeroByInput}
            handleModifyHero={handleModifyHero}
            handleInitState={handleInitState}
            setCurrentPage={setCurrentPage}
          />
          <div className="heroes">
            {selectedHeroes.map((hero) => (
              <HeroCard
                onClick={() => setactiveHero({ hero })}
                key={hero.id}
                hero={hero}
              />
            ))}
          </div>
        </div>
        <div className="pagination">
          {currentPage > 0 && <button onClick={goToPreviousPage}>Prev</button>}
          {currentPage < totalPages - 1 && (
            <button onClick={goToNextPage}>Next</button>
          )}
        </div>
      </div>
    </>
  )
}
