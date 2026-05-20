import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setRecipes(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const categories = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.strCategory)),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.strMeal.toLowerCase().includes(search.toLowerCase()) ||
      recipe.strCategory.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipe.strCategory === category;

    return matchesSearch && matchesCategory;
  });

  const addfavorite = (recipe) => {
    const isAlreadyFavorite = favorites.some(
      (fav) => fav.idMeal === recipe.idMeal,
    );

    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(
        (fav) => fav.idMeal !== recipe.idMeal,
      );
    } else {
      updatedFavorites = [...favorites, recipe];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <main>
      <section className="font-sans py-16 bg-[#FBF7F0]/0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--primary-color)] font-semibold uppercase tracking-wider">
              Our Recipes
            </span>

            <h2
              className="text-4xl font-bold text-[var(--primary-color)] mt-3"
              data-aos="zoom-in"
            >
              Delicious Recipes Made With Love
            </h2>

            <p className="text-black-600 mt-4 max-w-2xl mx-auto">
              Explore tasty homemade recipes for breakfast, lunch, dinner, and
              desserts.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-12">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search delicious recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-2xl border border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] text-black"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[var(--primary-color)] absolute left-4 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 px-4 rounded-2xl border border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] text-black"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/*Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-6">
                    <span className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-xs font-semibold px-3 py-1 rounded-full">
                      {recipe.strCategory}
                    </span>

                    <h3 className="text-2xl font-bold text-black mt-4">
                      {recipe.strMeal}
                    </h3>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm text-gray-600">
                        ⏱ {recipe.strTags?.split(",").length || 0} mins
                      </span>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => addfavorite(recipe)}
                          className="text-3xl hover:scale-110 transition duration-300"
                        >
                          {favorites.some(
                            (fav) => fav.idMeal === recipe.idMeal,
                          ) ? (
                            <span className="text-red-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-gray-300 hover:text-red-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </span>
                          )}
                        </button>

                        <button
                          onClick={() =>
                            navigate(`/innerrecipes/${recipe.idMeal}`)
                          }
                          className="bg-[var(--primary-color)] hover:bg-[#630e20] text-white px-5 py-2 rounded-xl transition duration-300 shadow-md"
                        >
                          View Recipe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-xl text-black-500">
                No recipes found 😔
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Recipes;
