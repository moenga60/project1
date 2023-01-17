const product = [
    {
        id: 1,
        image: '1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 2,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
    {
        id: 3,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
    {
        id: 4,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
    {
        id: 5,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
    {
        id: 6,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
    {
        id: 7,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
    {
        id: 8,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
    {
        id: 9,
        image: '1.jpg',
        title: 'ms',
        price: '$30',
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]

let cart = document.getElementById('root')    
cart.innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
                <img src=${image}></img>
            </div>
            <div class="left">
                <p>${title}</P
                <h2>${price}</h2>
                <button>Add to cart</button>
            </div>
        </div>`
    )
}).join('')