import { useState } from "react";

export function useAuth() {
  // Simple simulated authentication
  const [isAuthenticated] = useState(false);

  return { isAuthenticated };
}