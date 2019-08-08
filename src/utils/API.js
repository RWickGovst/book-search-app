import axios from "axios";

export default {
    saveBook: function(bookData){
        return axios.post("api/books", bookData);
    }
}