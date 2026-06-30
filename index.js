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

const historyData = [];

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

        const data = {
            name: 'National Emergency Number',
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
        console.log(historyData)
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

        const data = {
            name: 'Police Helpline Number',
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
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

        const data = {
            name: 'Fire Service Number',
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
    })

    // Ambulance Service
document.getElementById('ambulance-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const ambulanceNumber = document.getElementById('ambulance-number').innerText;
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert(ambulanceNumber + 'National Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;

        const data = {
            name: 'Ambulance Service',
            number: '1994-999999',
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
    })

    // Women & Child Helpline
document.getElementById('woman-helpline-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert(109 + ' National Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;

        const data = {
            name: 'Women & Child Helpline',
            number: '109',
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
    })

    // Anti-Corruption Helpline
document.getElementById('anti-helpline-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert(106 + ' Anti-Corruption Helpline Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;

        const data = {
            name: 'Anti-Corruption Helpline',
            number: '106',
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
    })

    // Electricity Helpline
document.getElementById('electricity-helpline-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert(16216 + ' Electricity Helpline Helpline Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;

        const data = {
            name: 'Anti-Corruption Helpline',
            number: '16216',
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
    })

    // Electricity Helpline
document.getElementById('brac-helpline-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert(16445 + ' Brac Helpline Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;

        const data = {
            name: 'Anti-Corruption Helpline',
            number: '16445',
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
    })

    // Bangladesh Railway Helpline
document.getElementById('reilway-helpline-call')
    .addEventListener('click', function () {

        const coin = parseInt(document.getElementById('coin').innerText);
        const fee = 20;

        if (coin < 20) {
            alert('For calling you need must new coin 20');
            return;
        }

        alert(163 + ' Bangladesh Railway Helpline Emergency Number Calling .....');

        const newCoin = coin - fee;
        document.getElementById('coin').innerText = newCoin;

        const data = {
            name: 'Bangladesh Railway Helpline',
            number: '163',
            date: new Date().toLocaleTimeString()
        }
        historyData.push(data);
    })

    // history
document.getElementById('history-btn')
    .addEventListener('click', function () {
        const historyContainer = document.getElementById('history-container');

        historyContainer.innerText = '';

        for (const data of historyData) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-between p-[16px] items-center bg-[#fafafa] rounded-xl mt-5">
                    <div class="">
                        <h3 class="font-semibold text-[18px]">${data.name}</h3>
                        <p class="text-18px text-gray-500">${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
            `
            historyContainer.appendChild(div)
        }
    })

    // clear button
    document.getElementById('clear-btn')
    .addEventListener('click', function(){
       
        document.getElementById('history-container').innerHTML = '';
         historyData.length = 0;
    })