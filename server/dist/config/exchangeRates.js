import fetch from "node-fetch";
export const configExchangeRates = (app) => {
    //call api to get exchange rates...
    //cache echange rates for 1 day
    const requestOptions = {
        method: 'GET',
        headers: {
            "apikey": "3Eu933Ya1dX4PF2btzNFiEUpT73WxdZS"
        }
    };
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
        .then((response) => {
        response.text();
    })
        .then((result) => {
        console.log(result);
    })
        .catch((error) => console.log('error', error));
};
