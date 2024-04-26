import { createContext, useState } from "react";

const SetupContext = createContext({});

export const SetupProvider = ({children}) => {
    const [userGoal, setUserGoal] = useState("");
    const [userDiseases, setUserDiseases] = useState([]);
    return (
        <SetupContext.Provider value={{userGoal, setUserGoal, userDiseases, setUserDiseases}}>
            {children}
        </SetupContext.Provider>
    )
}
export default SetupContext;