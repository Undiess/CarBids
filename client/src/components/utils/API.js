import axios from "axios";


export default {
    getCars: function() {
      return axios.get("/api/cars");
    },

    postSignIn: function(details){
      return axios.post("/api/users/login",details)
  
    },

    postRegister: function(details){ 
      return axios.post("api/users/register",details)
    }
    
  };
  