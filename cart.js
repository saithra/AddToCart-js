const product=[
    {
        id:0,image:'./img/img.jpg',title:"camera",price:1000
    },
    {
        id:1,image:'./img/img1.jpg',title:"headset",price:2000
    },
    {
        id:2,image:'./img/img3.jpg',title:"hairdryer",price:1000
    },
    {
        id:3,image:'./img/img4.jpg',title:"hairstraightner",price:2000
    },
];

// const categories = [...product.map(()=>{

//     return item;
// })
// ]

let categories=[...product]

let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{

    var {image,title,price}=item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick= 'addtocart("+(i++)+")'> add to cart</button>"+
        `</div>
        </div>`
        )
    
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}


function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.lenght==0){
        document.getElementById('cartitem').innerHTML="your cart is empty";
        document.getElementById("total").innerHTML="$"+0+".00";
    }
    else{
        document.getElementById("cartitem").innerHTML=cart.map((items)=>{
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"

            );
    }).join('');
}
}