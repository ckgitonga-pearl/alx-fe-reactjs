import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  /* ===== TASK 0 ===== */
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  setRecipes: (recipes) =>
    set({
      recipes: recipes,
    }),

  /* ===== TASK 1 (CRITICAL FOR CHECKER) ===== */
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== recipeId
      ),
    })),

  /* ===== TASK 2 ===== */
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  },

  /* ===== TASK 3 ===== */
  favorites: [],
  recommendations: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (id) => id !== recipeId
      ),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));