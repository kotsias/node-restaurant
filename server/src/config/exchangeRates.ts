//import fetch from "node-fetch";
//const fetch = require('node-fetch').default
import nodecache from 'node-cache';
require('isomorphic-fetch');

export const configExchangeRates = (app: any) => {

    const cache = new nodecache({stdTTL: 10});

    const sampleRates = {
        "usd":{
            "code":"USD",
            "alphaCode":"USD",
            "numericCode":"840",
            "name":"U.S. Dollar",
            "rate":1.0714064853724,
            "date":"Fri, 10 Feb 2023 11:55:01 GMT",
            "inverseRate":0.93335257313888
        },
        "gbp":{
            "code":"GBP",
            "alphaCode":"GBP",
            "numericCode":"826",
            "name":"U.K. Pound Sterling",
            "rate":0.8850555743657,
            "date":"Fri, 10 Feb 2023 11:55:01 GMT",
            "inverseRate":1.1298725514685
        },
        "cad":{
            "code":"CAD",
            "alphaCode":"CAD",
            "numericCode":"124",
            "name":"Canadian Dollar",
            "rate":1.438076588488,
            "date":"Fri, 10 Feb 2023 11:55:01 GMT",
            "inverseRate":0.69537325619866
        },
        "jpy":{
            "code":"JPY",
            "alphaCode":"JPY",
            "numericCode":"392",
            "name":"Japanese Yen",
            "rate":140.35353101326,
            "date":"Fri, 10 Feb 2023 11:55:01 GMT",
            "inverseRate":0.0071248652797025
        }
    };

    
    const id = 'ex-rates';
    if (cache.has(id)) 
    {
        console.log('Fetching data from the Node Cache');
        const cachedRates = cache.get(id);
    }
    else {

        const requestOptions = {
            method: 'GET',
            headers: { "apikey": "3Eu933Ya1dX4PF2btzNFiEUpT73WxdZS" }
        };

        // fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
        // .then((response) => response.json())
        // .then(result => { 
        //     //cache.set(id, result);
        //     console.log(result);
        // })
        // .catch((error: any) => console.log('error', error)); 

        //call api to get exchange rates...
        //cache echange rates for 1 day
    
        // fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
        // .then((response: { text: () => void; }) => {response.text();})
        // .then((result: any) => {
        //     console.log(result);
        //     // set cache with returned rates...
        // })
        // .catch((error: any) => console.log('error', error)); 
    }
};
