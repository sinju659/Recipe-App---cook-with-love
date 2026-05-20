import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.idMeal !== id);

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="font-sans min-h-screen bg-[#FFF8F2] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[var(--primary-color)] mb-10">
          Favorite Recipes
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-black-600">
              No favorite recipes yet
            </h2>

            <p className="text-black-500 mt-2">
              Add your favorite meals to see them here.
            </p>

            <Link
              to="/recipes"
              className="inline-block mt-8 bg-[var(--primary-color)] text-white px-8 py-4 rounded-2xl"
            >
              Browse Recipes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {favorites.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-60 object-cover"
                  />

                  <button
                    onClick={() => removeFavorite(recipe.idMeal)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="w-6 h-6"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#1F1A14] line-clamp-1">
                    {recipe.strMeal}
                  </h2>

                  <p className="text-black-500 mt-2 text-sm">
                    {recipe.strCategory}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      to={`/recipe/${recipe.idMeal}`}
                      className="inline-block mt-1 bg-[var(--primary-color)] text-white px-8 py-4 rounded-2xl"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
