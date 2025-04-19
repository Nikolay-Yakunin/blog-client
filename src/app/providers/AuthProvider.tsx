import { createContext, useState, ReactNode } from 'react';
import { User } from 'features/oauth/api/oauthApi';

interface AuthContextProps {
    user: User | null;
    isAuth: boolean;
    setUser: (user: User | null, token?: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUserState] = useState<User | null>(() => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    });
    const isAuth = !!user;

    // Восстанавливаем токен из localStorage (если есть)
    // (можно добавить проверку срока действия токена)

    const setUser = (user: User | null, token?: string) => {
        setUserState(user);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            if (token) localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuth, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 