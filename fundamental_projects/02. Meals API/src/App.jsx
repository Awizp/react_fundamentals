import useFetch from "./useFetch"

const App = () => {

  const [items] = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')

  return (
    <>
      <div className="items-container">
        {items && items.meals.map((meal) => (
          <div className="card" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
            <div className="content">
              <p>{meal.strMeal}</p>
              <p>#{meal.idMeal}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App