import axios from "axios"


// register a new user, 

export const register = async ({ username, email, password }) => {
    try {
        const response = await axios.post("http://localhost:3000/api/auth/register", {
            username, email, password
        }, {
            withCredentials: true
        })

        return response.data
    } catch (err) {
        console.log(err)

    }

}

// login a new user

export const login = async({email,password})=>{
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login',{
            email,password
        },{
            withCredentials:true
        })

        return response.data
    } catch (err) {
        console.log(err)
    }
}


//logout an user

export const logout = async()=>{
    try {
        const response= await axios.get('http://localhost:3000/api/auth/logout',{
            withCredentials:true
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// find the details about loged in user

export const getUser= async()=>{
    try {
        const response=await axios.get('http://localhost:3000/api/auth/get-user',{
            withCredentials:true
        })

        return response.data
    } catch (err) {
        console.log(err)
    }
}

