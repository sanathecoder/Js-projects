const endDate = '28 September 2026 11:28 PM';
document.getElementById('end-Date').innerHTML = endDate;
const arr = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if(diff<0) return;

    // convert into days

    arr[0].value = Math.floor(diff/3600/24);
    arr[1].value = Math.floor(diff / 3600) % 24;
    arr[2].value = Math.floor(diff /60) % 60;
    arr[3].value = Math.floor(diff) % 60;
}

// Initial call
clock();

setInterval(() => {
    clock()
}, 1000);