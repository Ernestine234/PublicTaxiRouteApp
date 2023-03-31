import auth from '@react-native-firebase/auth'

// sing in with email and password
export const signInWithEmailAndPassword = async (email: string, password: string) => {
        return await auth()
                        .signInWithEmailAndPassword(email, password)
                        .then((response) => {
                            return response.user;
                        })
                        .catch((error) => {
                            return Error(error);
                        });
}

// create user with email and password
export const createUserWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const response = await auth().createUserWithEmailAndPassword(email, password);
        return response;
    } catch (error) {
        return error;
    }
}

// sign out
export const signOut = async () => {
    try {
        const response = await auth().signOut();
        return response;
    } catch (error) {
        return error;
    }
}

// log in anonymously
export const signInAnonymously = async () => {
    try {
        const response = await auth().signInAnonymously();
        return response;
    } catch (error) {
        return error;
    }
}