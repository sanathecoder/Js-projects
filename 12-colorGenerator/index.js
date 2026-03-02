const GetColor = ()=>{
    const RandomNumber = Math.floor(Math.random() * 16777215);
    const RandomCode = "#"+ RandomNumber.toString(16);
    document.body.style.backgroundColor = RandomCode;
    document.getElementById('color-code').innerText = RandomCode;

    navigator.clipboard.writeText(RandomCode);
}

document.getElementById('btn').addEventListener("click",
GetColor);

GetColor();