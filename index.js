// shared feature
const heartIcons = document.getElementsByClassName('heart-icon');
for (const heartIcon of heartIcons) {
    heartIcon.addEventListener('click', function () {
        const heart = parseInt(document.getElementById('heart').innerText);
        const countHeart = heart + 1;
        document.getElementById('heart').innerText = countHeart;
    })
}

function copyNumber(id) {
    const copy = parseInt(document.getElementById('count-copy').innerText);
    const copyCount = copy + 1;
    const copyNumber = document.getElementById(id).innerText;

    navigator.clipboard.writeText(copyNumber);

    document.getElementById('count-copy').innerText = copyCount;
}

// emergancy number 
document.getElementById('copy-emergency')
    .addEventListener('click', function () {
       copyNumber('emergency-number')
    })

// police number * 1 emergency tai use korsi 
document.getElementById('copy-police')
    .addEventListener('click', function () {
        copyNumber('emergency-number')
    })

// fire sevice * 1 emergency tai use korsi 
document.getElementById('copy-fire-service')
    .addEventListener('click', function () {
        copyNumber('emergency-number')
    })

// ambulance 
document.getElementById('copy-ambulance')
    .addEventListener('click', function () {
        copyNumber('ambulance-number')
    })

    // Women & Child Helpline
document.getElementById('copy-woman-helpline')
    .addEventListener('click', function () {
        copyNumber('woman-helpline')
    })

    // anti chelpline
document.getElementById('copy-anti-helpline')
    .addEventListener('click', function () {
        copyNumber('anti-helpline')
    })

    // Electricity Helpline
document.getElementById('copy-electricity-helpline')
    .addEventListener('click', function () {
        copyNumber('electricity-helpline')
    })
    // copy-brac-helpline
document.getElementById('copy-brac-helpline')
    .addEventListener('click', function () {
        copyNumber('brac-helpline')
    })
    // Bangladesh Railway Helpline
document.getElementById('copy-reilway-helpline')
    .addEventListener('click', function () {
        copyNumber('reilway-helpline')
    })


// call feature
document.getElementById('national-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert('999 National Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;
    })

// police
document.getElementById('police-call')
    .addEventListener('click', function () {
        const policeNumber = document.getElementById('police-number').innerText;

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert(policeNumber + ' National Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;
    })

// fire service  

document.getElementById('fire-service-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert('999 National Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;
    })