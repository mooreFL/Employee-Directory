import axios from "axios";
const BASEURL = "https://www.randomuser.me/api/?results=5000";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
