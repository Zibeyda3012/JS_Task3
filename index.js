const products = [
  {
    title: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    stock: 150,
  },
  {
    title: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    stock: 85,
  },
  {
    title: "Office Desk Chair",
    category: "Furniture",
    price: 119.99,
    stock: 0,
  },
  {
    title: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 19.99,
    stock: 0,
  },
  {
    title: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 75,
  },
  {
    title: "Gaming Keyboard",
    category: "Electronics",
    price: 79.99,
    stock: 60,
  },
  {
    title: "LED Desk Lamp",
    category: "Home & Kitchen",
    price: 39.99,
    stock: 0,
  },
  {
    title: "Electric Kettle",
    category: "Home & Kitchen",
    price: 34.99,
    stock: 90,
  },
  {
    title: "Fitness Tracker",
    category: "Wearables",
    price: 49.99,
    stock: 40,
  },
  {
    title: "Backpack",
    category: "Accessories",
    price: 39.99,
    stock: 10,
  },
];

let myBasket = [];

const container = document.getElementById("container");

const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const basketInfo = document.createElement("p");

header1.innerText = "Products";
header2.innerText = "My Basket";

function showAllProducts()
{
    div1.innerHTML="";

    products.map((product) => {
        const div4 = document.createElement("div");
        const ul1 = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const addBtn = document.createElement("button");
      
      
        li1.innerText = product.title;
        li2.innerText = product.category;
        li3.innerText = "$" + product.price;
        li4.innerText = product.stock;
      
        li1.classList.add("li1Style");
      
        ul1.appendChild(li1);
        ul1.appendChild(li2);
        ul1.appendChild(li3);
        ul1.appendChild(li4);
      
        ul1.classList.add("ulStyle");
      
        addBtn.textContent = "Add";
        addBtn.classList.add("btnStyle");
        addBtn.addEventListener("click", () => {
          console.log("clicked");
          addToBasket(product);
        });
      
        div4.appendChild(ul1);
        div4.appendChild(addBtn);
        div4.style.display = "flex";
        div4.style.flexDirection = "column";
        div4.style.gap = "10px";
      
        div1.appendChild(div4);
      });
      
}

showAllProducts();

function addToBasket(product) {
  if (product.stock > 0)
    {
        myBasket.push(product);
        product.stock--;
        updateBasket();
        showAllProducts();
    } 
  else console.log(`${product.title} has run out`);
}

function removeFromBasket(index) {
  const product = myBasket[index];
  myBasket.splice(index, 1);
  product.stock++;
  updateBasket();
  showAllProducts();
}

function updateBasket() {
  div2.innerHTML = "";
  let totalCost = 0;

  for (let i = 0; i < myBasket.length; i++) {
    const div3 = document.createElement("div");
    const ul2 = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const removeBtn = document.createElement("button");

    li1.innerText = myBasket[i].title;
    li2.innerText = myBasket[i].category;
    li3.innerText = "$" + myBasket[i].price;
    li1.classList.add("li1Style");

    removeBtn.textContent = "Remove";
    removeBtn.classList.add("btnStyle")
    removeBtn.addEventListener("click", () => {
      removeFromBasket(i);
    });

    totalCost += myBasket[i].price;

    ul2.appendChild(li1);
    ul2.appendChild(li2);
    ul2.appendChild(li3);

    ul2.classList.add("ulStyle");

    div3.appendChild(ul2);
    div3.appendChild(removeBtn);
    div3.style.display = "flex";
    div3.style.flexDirection = "column";
    div3.style.alignItems = "left";
    div3.style.gap = "10px";

    div2.appendChild(div3);
  }

  basketInfo.textContent = `There are ${myBasket.length} products in the basket.Total price is $${totalCost}`;

}

div1.classList.add("div1Style");
div2.classList.add("div1Style");

container.appendChild(header1);
container.appendChild(div1);
container.appendChild(header2);
container.appendChild(div2);
container.appendChild(basketInfo);
