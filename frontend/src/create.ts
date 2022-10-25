// import axios from "axios";
import { userCreateInterface } from "../interfaces/userCreateInterface";
import axiosInstance from "./helpers/http";
import http from "./helpers/http";


function create(): userCreateInterface {
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
            } catch (error: any) {
                const errors = error?.response?.data?.errors;
                if (errors) {
                    console.log(errors)
                    errors.forEach((element: any) => {
                        const elementValidation = document.querySelector(`#error-${element.param}`) as HTMLSpanElement;

                        elementValidation.innerHTML = element.msg;

                        setTimeout(() => {
                            elementValidation.innerHTML = '';
                        }, 3000);
                    });
                }
                console.log(error?.response?.data);
            }
        },
    };
}

export default create;
