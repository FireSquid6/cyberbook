import { useState, useEffect, createContext, useContext } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp);

export const AuthContext = createContext<{ user: User | null }>({ user: null });
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("running effect");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("auth state changed");
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
}
