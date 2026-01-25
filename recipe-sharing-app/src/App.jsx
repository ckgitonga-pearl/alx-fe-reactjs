import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
  <div style={{ padding: "2rem" }}>
    <h1>Recipe Sharing App</h1>

    <Routes>
      <Route
        path="/"
        element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        }
      />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  </div>;
}

export default App;
