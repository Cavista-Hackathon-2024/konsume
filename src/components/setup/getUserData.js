import { toast } from "react-toastify";



function getUserData(){
    let userData = {};      //initialize an empty object for user data
    let xhr = new XMLHttpRequest(); // send an asynchronous xhttp request to the php file for backend processing
    xhr.open("POST", "http://localhost/Cavista Project/konsume/konsume/src/server/script.php", false);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response; //assign response to variable
                try {
                    userData = JSON.parse(data);
                } catch (error) {
                    toast.error("Unexpected response from database");       //try to decode json and return error if encounter error while processing
                }
            }
        }
    };
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(`action=get_u_data`);
    return userData     //return user data
}

export default getUserData;