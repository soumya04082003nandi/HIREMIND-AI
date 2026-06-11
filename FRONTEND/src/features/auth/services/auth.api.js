import axios from "axios"

// For production deployment
const api = axios.create({
  baseURL: "/",
  withCredentials: true,
});


// // for local development
// const api= axios.create({
//     baseURL:"http://localhost:3000",
//     withCredentials:true
// })

// register a new user, 

export const register = async ({ username, email, password }) => {
    try {

        const response = await api.post("api/auth/register",{username, email, password})
        return response.data
    } catch (err) {
        console.log(err)

    }

}

// login a new user

export const login = async({email,password})=>{
    try {
        const response = await api.post('api/auth/login',{
            email,password
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}


//logout an user

export const logout = async()=>{
    try {
        const response= await api.get('api/auth/logout')
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// find the details about loged in user

export const getUser= async()=>{
    try {
        const response=await api.get('api/auth/get-user')
        // console.log(response.data);
        return response.data
    } catch (err) {
        console.log(err)
    }
}

