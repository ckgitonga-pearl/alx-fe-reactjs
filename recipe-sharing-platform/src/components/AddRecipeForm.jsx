import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",");

    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");

    // For now we just log the data
    console.log({
      title,
      ingredients,
      instructions,
    });

    // Clear form
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Recipe
      </h2>

      {error && (
        <p className="text-red-500 mb-4 text-sm">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Flour, Sugar, Eggs"
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe preparation steps..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
