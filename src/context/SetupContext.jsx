import { createContext, useState } from "react";

const SetupContext = createContext({});

export const SetupProvider = ({children}) => {
    const [userGoal, setUserGoal] = useState("");
    const [userDiseases, setUserDiseases] = useState([]);
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [name, setName] = useState('');
    return (
        <SetupContext.Provider value={{userGoal, setUserGoal, userDiseases, setUserDiseases, name, setName, height, age, gender, weight, setAge, setGender, setWeight, setHeight}}>
            {children}
        </SetupContext.Provider>
    )
}
export default SetupContext;