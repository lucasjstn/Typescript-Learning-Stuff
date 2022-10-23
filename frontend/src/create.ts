// import axios from "axios";
import axiosInstance from "./helpers/http";
import http from "./helpers/http";

function create() {
    return {
        user: {
            firstName: 'asdfsd',
            lastName: 'sdfsdf',
            email: 'asdfasdf@hotmail.com',
            password: 'sdfsdaf',
        },
        createUser: async function () {
            try {
                console.log(this.user);
                const { data } = await http.post("/user/create", this.user);
                console.log(data);
            } catch (error) {
                const errors = error.response?.data.errors;
                if (errors) {
                    errors.forEach(element => {
                        // const elementValidate = document.querySelector(`error`)
                    });
                }
                console.log(error?.response?.data);
            }
        },
    };
}

export default create;
