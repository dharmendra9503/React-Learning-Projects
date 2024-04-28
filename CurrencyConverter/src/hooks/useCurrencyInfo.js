import { useState, useEffect } from "react";

/*
* This is custom hook.
*
* This hook is used to fetch the currency information from the API and return the data.
* @param {string} currency - The currency code for which the information is to be fetched.
* @returns {object} data - The currency information fetched from the API.
*/
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
        console.log(data);
    }, [currency]);
    return data;
}

export default useCurrencyInfo;