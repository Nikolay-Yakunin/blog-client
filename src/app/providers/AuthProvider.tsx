import { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from 'features/oauth/api/oauthApi';

interface AuthContextProps {
    user: User | null;
    isAuth: boolean;
    setUser: (user: User | null) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const isAuth = !!user;

    // Попытка получить пользователя при монтировании (если токен в cookie)
    useEffect(() => {
        fetch('https://blog-service-production-0f0d.up.railway.app/api/v1/auth/me', {
            credentials: 'include',
        })
            .then(async (res) => {
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            })
            .catch(() => setUser(null));
    }, []);

    const logout = () => {
        setUser(null);
        // Можно добавить запрос к backend для выхода
    };

    return (
        <AuthContext.Provider value={{ user, isAuth, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 