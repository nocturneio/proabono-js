/* @flow */

import Customers from "./models/Customers";

export default class ProAbono {

    agentKey : String;
    apiKey : String;
    endpoint : String;

    constructor(agentKey : String, apiKey : String, endpoint : String){
        this.agentKey = agentKey;
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }

    customers() : Customers {
        return new Customers(this._authorization(), this.endpoint)
    }

    // Helpers utils

    _authorization() : String {
        return btoa(this.agentKey + ":" + this.apiKey)
    }
}