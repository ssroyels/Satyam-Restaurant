import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/* ================= CONTEXT ================= */
const AuthContext = createContext(null);

/* ================= PROVIDER ================= */
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------- INIT (ON APP LOAD) ---------- */
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  /* ---------- CROSS TAB SYNC ---------- */
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "token") {
        setToken(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  /* ---------- AUTH ACTIONS ---------- */
  const login = (jwtToken) => {
    localStorage.setItem("token", jwtToken);
    setToken(jwtToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  /* ---------- DERIVED STATE ---------- */
  const isAuthenticated = Boolean(token);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* ================= HOOK ================= */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
