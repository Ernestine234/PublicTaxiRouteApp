import { createContext, useContext } from "react";
import auth,{ FirebaseAuthTypes} from "@react-native-firebase/auth";

// context provider to hold firebase auth user
export const UserContext = createContext<FirebaseAuthTypes.User | null>(null);


// use this hook to get the user from the context
export const useUser = () => {
  return useContext(UserContext);
}

// set the user in the context
export const setUserProvider = (user: FirebaseAuthTypes.User | null) => {
    return UserContext.Provider;
};