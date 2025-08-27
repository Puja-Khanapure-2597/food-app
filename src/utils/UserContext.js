import { createContext } from "react";
//create Context
const UserContext = createContext(
    {
        loggedInName:'defualt'
    }
)

export default UserContext