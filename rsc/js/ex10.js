async function fetchData(){
    const raw = await fetch("https://api.quotable.io/random");
    const data = await raw.json();
    if(raw.ok){
        const splitQuote = data.content.split(" ");
        let toLib = Math.floor(splitQuote.length / 5);
        toLib = (toLib < 1 ? 1 : toLib); 
        let htmlFormString = "";
        for (let i = 0; i < toLib; i++){
            htmlFormString += "<input type=\"text\" id=\"_" + i + "\" name=\"_" + i + "\"><br>";
        }
        const formContainer = document.querySelector("#form-content");
        formContainer.innerHTML = htmlFormString;
        const hidenContainer = document.querySelector("#hiden");
        hidenContainer.innerHTML = data.content + "~" + data.author + "~" + toLib;
        console.log(toLib + "\n" + splitQuote);

    } else {
        console.log("Error Fetching Quote");
    }
}

function madLib(){
    const retrieveData = document.querySelector("#hiden").innerHTML;
    const dataArray = retrieveData.split("~");
    const formPage = document.querySelector("#form-page");
    const resultPage = document.querySelector("#result-page");
    formPage.style.display = "none";
    resultPage.style.display = "flex";
    let formData = [];
    let iMax = Number(dataArray[2]);
    console.log(iMax);
    for(let i = 0; i < iMax; i++){
        const tmp = document.getElementById("_" + i).value;
        console.log("tmp - " + tmp);
        formData.push(tmp);
    }
    console.log(formData);
    let printArray = dataArray[0].split(" ");
    let finalLib = "";
    let toChange = [];
    for(let i = 0; i < dataArray[2]; i++){
        // number between 0 & the last array element
        toChange[i] = recRand() ;
        function recRand(){
            let rand = Math.floor(Math.random() * printArray.length);
            // if number isnt in array
            let flag = toChange.indexOf(rand);
            if(flag == -1){
                return rand;
            } else {
                rand = recRand();
                return rand;
            }
        }
    }
    toChange.sort();
    for(let x = 0; x < toChange.length; x++){
        printArray[toChange[x]] = formData[x];
    }
    console.log(printArray);
    for(let y = 0; y < printArray.length; y++){
        finalLib += printArray[y] + " ";
    }
    resultPage.innerHTML = "<h1>" + finalLib + "</h1>" +
                           "<h3> - NOT " + dataArray[1] + "</h3>"; 
}