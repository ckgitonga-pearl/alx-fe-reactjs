import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>Prep Time: {recipe.prepTime} mins</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
