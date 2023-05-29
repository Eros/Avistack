import axios from "axios";
import { Avistack } from "../Avistack";

export class AvistackRequest {
    
    private readonly _avistack: Avistack;

    constructor(avistack: Avistack) {
        this._avistack = avistack;
    }

    async get(path: string, additionalSearch?: string, additionalData?: string): Promise<unknown>  {
        
        let response = undefined;

        let url = `http://api.aviationstack.com/v1/${path}?access_key=${this._avistack.apiKey}`;

        if (additionalSearch && additionalData) {
            url += `&${additionalSearch}=${additionalData}`
        }

        axios.get(url)
            .then(res => { 
                response = res;
                console.log(response);
            }).catch(error => {
                throw error;
            });

        return response;
    }
}