import axios from 'axios'
function login(data){
    //console.log("login...")
    // let data ={
    //     username: "admin",
    //     password: "123456"
    // }
    // axios.post("https://medical-be.herokuapp.com/api/doctor/login", data)
    // .then(res =>{
    //     console.log(res)
    // })
    return axios.post("https://medical-be.herokuapp.com/api/doctor/login",data)

}

export {login}