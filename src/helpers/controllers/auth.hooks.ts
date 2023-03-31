import { useState } from "react";
import { signInWithEmailAndPassword } from "../firebase/auth.helpers";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";


// custom hook for login with email and password
export const useLoginWithEmailAndPassword = (email:string, password: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [userData, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const login = async () => {
        try {
            setLoading(true);
            if(!email || !password) {
                setError(Error('Email and password are required'));
                setLoading(false);
                return;
            }
            const response = await signInWithEmailAndPassword(email, password);
            // check if response is an error
            if (response instanceof Error) {
                setError(response);
                setLoading(false);
                return;
            } else {
                setUser(response);
            }
            setLoading(false);
        } catch (error) {
            setError(Error(error as string));
            setLoading(false);
        }
    };

    return {login, loading, error, userData };
};