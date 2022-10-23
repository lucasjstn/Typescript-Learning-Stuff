// import axios from "axios";
import axiosInstance from "./helpers/http";
import http from "./helpers/http";

function create() {
    return {
        user: {
            firstName: 'asdfsd',
            lastName: 'sdfsdf',
            email: 'asdfasdf',
            password: 'sdfsdaf',
        },
        createUser: async function () {
            try {
                console.log(this.user);
                const { data } = await http.post("/user/create", this.user);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
    };
}

export default create;
