import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
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
  favorites: [],
  recommendations: [],

  /* 📦 TASK 0 / TASK 1 REQUIRED ACTIONS */
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) =>
    set(() => ({
      recipes: recipes,
    })),

  /* 🔍 SEARCH */
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  /* ⭐ FAVORITES */
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  /* 🎯 RECOMMENDATIONS (simple mock logic) */
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5
    );

    set({ recommendations: recommended });
  },
}));