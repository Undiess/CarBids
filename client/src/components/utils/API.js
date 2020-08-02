import axios from "axios";


export default {
    getCars: function() {
      return axios.get("/api/cars");
    }
  };
  