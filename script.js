const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'Iphone XR',
        "price": '999'
    },
    2: {
        "name": 'Iphone XR',
        "price": '1200'
    },
    3: {
        "name": 'Iphone mixture',
        "price": '1300'
    },
    4: {
        "name": 'Iphone Xs 1400',
        "price": '260'
    },
    5: {
        "name": 'Iphone XX ',
        "price": '1100'
    },
    6: {
        "name": 'Iphone A',
        "price": '122,2'
    },
    7: {
        "name": 'Iphone Max',
        "price": '1350'
    },
    8: {
        "name": 'Iphone Z',
        "price": '1440'
    },
    9: {
        "name": 'Iphone XR',
        "price": '999'
    },
    10: {
        "name": 'Iphone Q',
        "price": '1300'
    },
    11: {
        "name": 'Iphone CS',
        "price": '1400'
    },
    12: {
        "name": 'Iphone za',
        "price": '1500'
    },
    13: {
        "name": 'Iphone Air',
        "price": '1900'
    },
    14: {
        "name": 'Iphone AZ',
        "price": '1300'
    },
    15: {
        "name": 'Iphone QW',
        "price": '1110'
    },
    16: {
        "name": 'Iphone BV',
        "price": '1360'
    },
    17: {
        "name": 'Iphone SS',
        "price": '1150'
    },
    18: {
        "name": 'IPHONE 11',
        "price": '999'
    },
    19: {
        "name": 'Iphone REC',
        "price": '1330'
    },
    20: {
        "name": 'Iphone WZ',
        "price": '1500'
    },
    
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${products[x].price}</span>`
    const result = products[x].name + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is $${total}`;
}