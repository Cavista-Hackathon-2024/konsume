import { createContext, useState } from "react";

const SetupContext = createContext({});

export const SetupProvider = ({children}) => {
    const [userGoal, setUserGoal] = useState("");
    const [userDiseases, setUserDiseases] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    return (
        <SetupContext.Provider value={{userGoal, setUserGoal, userDiseases, setUserDiseases, age, gender, weight, setAge, setGender, setWeight}}>
            {children}
        </SetupContext.Provider>
    )
}
export default SetupContext;