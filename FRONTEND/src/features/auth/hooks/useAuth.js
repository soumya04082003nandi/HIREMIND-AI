import { useContext,  } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth.context";
import { login, register, logout } from "../services/auth.api";

export const useAuth = () => {

    const navigate = useNavigate()
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
            if (data) {
                navigate("/")
            }
            
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
        } catch (err) {
            console.error("Logout error:", err);
        }
        finally {
            setLoading(false);
        }
    };

    // ✅ IMPORTANT RETURN
    return {
        user,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
    };
};