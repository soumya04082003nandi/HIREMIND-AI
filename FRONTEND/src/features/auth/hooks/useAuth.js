import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth.context";
import { login, register, logout, getUser } from "../services/auth.api";

export const useAuth = () => {
    const navigate=useNavigate()

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    const { user, setUser, loading, setLoading } = context;

    // ✅ Login
    const handleLogin = async ({ email, password }) => {


        try {
            setLoading(true);
            const data = await login({ email, password });
            setUser(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
            return data.user

        } catch (err) {
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Register
    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true);
            const data = await register({ username, email, password });
            setUser(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
            return data.user
        } catch (err) {
            console.error("Register error:", err);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Logout
    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
            setUser(null);
            localStorage.removeItem("user");
            navigate("/")
            
        } catch (err) {
            console.error("Logout error:", err);
        }
        finally {
            setLoading(false);
        }
    };


  useEffect(() => { 
    const getAndSetUser = async () => {
        // 👇 add this — show cached user instantly on reload
        const cachedUser = localStorage.getItem("user");
        if (cachedUser) setUser(JSON.parse(cachedUser));

        try {
            const data = await getUser();
            if (data && data.user) {
                setUser(data.user);
                localStorage.setItem("user", JSON.stringify(data.user)); // keep it fresh
            } else {
                setUser(null);
                localStorage.removeItem("user"); // 👈 clear if backend says not logged in
            }
        } catch (error) {
            // don't clear user here — backend might just be waking up
            // setUser(null); ← remove this or comment it out
        } finally {
            setLoading(false);
        }
    };

    getAndSetUser();
}, []);

    // ✅ IMPORTANT RETURN
    return {
        user,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
    };
};