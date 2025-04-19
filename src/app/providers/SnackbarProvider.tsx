import { createContext, useContext, useState, ReactNode } from 'react';

interface SnackbarContextProps {
    showMessage: (msg: string) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState<string | null>(null);

    const showMessage = (msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <SnackbarContext.Provider value={{ showMessage }}>
            {children}
            {message && (
                <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', background: '#333', color: '#fff', padding: '12px 24px', borderRadius: 8, zIndex: 1000 }}>
                    {message}
                </div>
            )}
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = () => {
    const ctx = useContext(SnackbarContext);
    if (!ctx) throw new Error('useSnackbar must be used within SnackbarProvider');
    return ctx;
}; 