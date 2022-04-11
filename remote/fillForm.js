// This is when a new form is submitted to the backend

import axios from "axios";

export async function reply_to_form(data){
    // data will be already pre-processed
    let response = false;
    try{
        response = await axios.post("https://flinder-internal.herokuapp.com/user/form-reply",data)
    }catch(err){
        console.error(err);
        return false;
    }
    return await response.data
}