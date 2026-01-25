import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: 'Spaghetti Bolognese',
      ingredients: ['pasta', 'tomato', 'beef'],
      prepTime: 30,
    },
    {
      id: 2,
      title: 'Chicken Curry',
      ingredients: ['chicken', 'curry powder', 'rice'],
      prepTime: 40,
    },
  ],
     searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();

    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

