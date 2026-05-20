import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function Innerrecipes() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setRecipe(res.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!recipe) {
    return (
      <h1 className="text-center text-[var(--primary-color)] mt-20">
        Loading...
      </h1>
    );
  }

  // Ingredients Array
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  return (
    <main className="font-sans bg-[#FBF7F0] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-4 py-2 rounded-full text-sm font-semibold">
              {recipe.strCategory}
            </span>

            <h1
              className="text-5xl font-bold text-gray-900 mt-5"
              data-aos="fade-up"
            >
              {recipe.strMeal}
            </h1>

            <div className="flex gap-4 mt-6">
              <div className="bg-white shadow-md px-5 py-3 rounded-2xl">
                {recipe.strArea}
              </div>

              <div className="bg-white shadow-md px-5 py-3 rounded-2xl">
                {recipe.strCategory}
              </div>
            </div>

            <p className="text-gray-600 leading-8 mt-8">
              {recipe.strInstructions}
            </p>

            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-[var(--primary-color)] text-white px-8 py-4 rounded-2xl"
            >
              Watch Video
            </a>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-10">
            Ingredients
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ingredients.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.ingredient}
                </h3>

                <p className="text-gray-500 mt-2">{item.measure}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-10">
            How To Cook
          </h2>

          <div className="bg-white rounded-3xl shadow-md p-8">
            <ol className="space-y-6 text-gray-700 leading-8 list-decimal pl-5">
              {recipe.strInstructions
                .split(".")
                .filter((step) => step.trim() !== "")
                .map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
            </ol>
          </div>
        </div>
        <a
          href="/"
          className="inline-block mt-8 bg-[var(--primary-color)] text-white px-8 py-4 rounded-2xl"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}

export default Innerrecipes;
