import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <ul>
      {filteredRecipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <li key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>

            <p>Prep Time: {recipe.prepTime} mins</p>

            <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {isFavorite ? "Remove Favorite " : "Add to Favorites "}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeList;
