import  User from "./models"
import  connectToDatabase  from "./utils";
 const fetchUser = async ()=>{
    try {
        connectToDatabase()
        const users = await User.find();
        return users
    } catch (err) {
        console.log(err)
        // throw new Error("Failed to fetch unfortunately")
        
    }
}

export default fetchUser