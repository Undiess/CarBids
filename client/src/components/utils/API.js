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
    },
    
    placebid:function(details){
      return axios.post("api/placebid", details)
    },

    getCarInfo: function(id){
      return axios.get("/api/car/"+id);
    }
  };
  