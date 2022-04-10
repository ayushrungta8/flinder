// This is when a new form is submitted to the backend

import axios from "axios";

export async function create_new_form(data){
    // data will be already pre-processed
    let response = false;
    try{
        response = await axios.post("http://localhost:5000/user/new-form",data)
    }catch(err){
        console.error(err);
        return false;
    }
    return await response.data
}