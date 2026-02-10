import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {recipe.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {recipe.summary}
                </p>

                <span className="mt-4 inline-block text-blue-500 font-medium hover:underline">
                  View Recipe →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
