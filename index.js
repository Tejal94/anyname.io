
const form = document.getElementById("myform");

const loadData = async (e) => {
    e.preventDefault();

    const myquery = document.forms['myform']['myquery'].value;
    // console.log(myquery);

    const url = `https://latest-stock-price.p.rapidapi.com/any?Identifier=${myquery}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5b16ca82msh2e71ff6bd474a4ap17b70fjsne1c69e626f1e',
            'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);

        result.map((cval) => {

            document.getElementById("output").innerHTML += `
            
            <h1>${cval.identifier}</h1>
            <h1>${cval.symbol}</h1>
            <h1>${cval.dayHigh}</h1>
            
            `


        })




    } catch (error) {
        console.error(error);
    }
}

form.addEventListener("submit", loadData)