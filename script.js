//////////////List Food////////////////////
let list = document.querySelector(".list");
let storage = document.querySelector(".storage");
let listCart = document.querySelector(".listCart");
let total = document.querySelector(".total-number");
let quantity = document.querySelector(".quantity");
let filters = document.querySelector(".filter");
let logoBrand = document.querySelector(".logo-filter");
let showMore = document.querySelector(".showMore");


let products = [
  {
    brand: "Apple",
    kind: "Phone",
    system: "IOS",
    image: "iphone-14pm.png",
    name: "Iphone 14 Pro Max",
    price: 27090000,
    type: {
      storage: ["64GB", "128GB", "256GB"],
      color: ["Silver", "Gold"],
    },
  },
  {
    brand: "Apple",
    kind: "Phone",
    system: "IOS",
    image: "iphone-14.png",
    name: "Iphone 14",
    price: 19490000,
    type: {
      storage: ["64GB", "128GB", "512GB"],
      color: ["Black", "White", "Red"],
    },
  },
  {
    brand: "Apple",
    kind: "Phone",
    system: "IOS",
    image: "iphone-14-pro.png",
    name: "Iphone 14 Pro",
    price: 24990000,
    type: {
      storage: ["128GB", "256GB", "512GB"],
      color: ["Yellow", "Sliver", "Purple", "Black"],
    },
  },
  {
    brand: "Apple",
    kind: "Pad",
    system: "IOS",
    image: "ipad-pro-m1.png",
    name: "Ipad Pro M1",
    price: 44990000,
    type: {
      storage: ["1TB"],
      color: ["Sliver", "Gray"],
    },
  },
  {
    brand: "Apple",
    kind: "Watch",
    system: "IOS",
    image: "apple-watch-ultra-alpine.png",
    name: "Apple Watch Ultra Alpine",
    price: 18990000,
    type: {
      size: ["44mm"],
      storage: ["32GB"],
      color: ["Sliver", "Gray"],
    },
  },
  {
    brand: "Nokia",
    kind: "Phone",
    system: "Android",
    image: "nokia-c21-plus.png",
    name: "Nokia C21 Plus",
    price: 2390000,
    type: {
      storage: ["64GB", "32GB"],
      color: ["Gray", "Blue"],
    },
  },
  {
    brand: "Oppo",
    kind: "Phone",
    system: "Android",
    image: "oppo-find-n2.png",
    name: "Oppo Find N2",
    price: 19990000,
    type: {
      storage: ["256GB"],
      color: ["Purple", "Black"],
    },
  },
  {
    brand: "Realme",
    kind: "Phone",
    system: "Android",
    image: "realme-c55.png",
    name: "Realme C55",
    price: 4590000,
    type: {
      storage: ["128GB"],
      color: ["Gold", "Black"],
    },
  },
  {
    brand: "Samsung",
    kind: "Phone",
    system: "Android",
    image: "samsung-galaxy-zfold4.png",
    name: "Samsung Galaxy Z Fold 4",
    price: 35490000,
    type: {
      storage: ["256GB", "512GB"],
      color: ["Cream", "Black", "Moss green"],
    },
  },
  {
    brand: "Samsung",
    kind: "Phone",
    system: "Android",
    image: "samsung-galaxy-z-flip4-5g.png",
    name: "Samsung Galaxy Z Flip 4",
    price: 19990000,
    type: {
      storage: ["128GB","256GB", "512GB"],
      color: ["Purle", "Blue", "Gold", "Gray"],
    },
  },
  {
    brand: "Samsung",
    kind: "Phone",
    system: "Android",
    image: "Samsung-Galaxy-S21-FE.png",
    name: "Samsung Galaxy S21 FE",
    price: 9990000,
    type: {
      storage: ["128GB","256GB"],
      color: ["Green", "Gray"],
    },
  },
  
  {
    brand: "Samsung",
    kind: "Pad",
    system: "Android",
    image: "samsung-galaxy-tab-a8.png",
    name: "Samsung Galaxy Tab A8",
    price: 6990000,
    type: {
      storage: ["64GB"],
      color: ["Sliver", "Gray"],
    },
  },
  {
    brand: "Samsung",
    kind: "Watch",
    system: "Android",
    image: "samsung-galaxy-watch5.png",
    name: "Samsung Galaxy Watch 5",
    price: 5490000,
    type: {
      size: ["40mm", "44mm"],
      storage: ["16GB"],
      color: ["Purle", "Black"]
    },
  },
  {
    brand: "Vivo",
    kind: "Phone",
    system: "Android",
    image: "vivo-v23.png",
    name: "Vivo V23 Series",
    price: 5490000,
    type: {
      storage: ["128GB"],
      color: ["Pink Blue", "Black"],
    },
  },
  {
    brand: "Vivo",
    kind: "Phone",
    system: "Android",
    image: "vivo-y02s.png",
    name: "Vivo Y02s",
    price: 2890000,
    type: {
      storage: ["32GB", "64GB"],
      color: ["Blue", "Black"],
    },
  },
  {
    brand: "Xiaomi",
    kind: "Phone",
    system: "Android",
    image: "xiaomi-readmi-note11s.png",
    name: "Xiaomi Readmi Note 11",
    price: 4990000,
    type: {
      storage: ["128GB"],
      color: ["Gray", "Blue"],
    },
  },
  {
    brand: "Xiaomi",
    kind: "Pad",
    system: "Android",
    image: "Redmi-Pad.png",
    name: "Xiaomi Readmi Pad",
    price: 5990000,
    type: {
      storage: ["128GB"],
      color: ["Gray", "Blue", "Sliver"],
    },
  },
];

let listCarts = [];
let ProductFilter = products;


/******************SHOW PRODUCT */

let itemsToShow = 8; // Number of items to initially show
const itemsToLoad = 8;
function showCard(ProductFilter) {
  let result = document.querySelector(".num-result");  
  result.innerHTML= ProductFilter.length;
  list.innerHTML = "";     
  const items = ProductFilter.slice(0, itemsToShow);
  items.forEach((value, key) => {    
    let newDiv = document.createElement("div");    
    let newUl = document.createElement("ul");
    newDiv.classList.add("card");     
    
      let newImage = new Image();
      newImage.src = "img/products/" + value.image;
      newDiv.appendChild(newImage);

      /*display name */
      let newTitle = document.createElement("h4");
      newTitle.classList.add("title");
      newTitle.innerHTML = value.name;
      newDiv.appendChild(newTitle);

      /*display storage*/        
      value.type.storage.forEach(item =>{        
        let newStorage = document.createElement("li"); 
        newStorage.classList.add("storage");            
        newStorage.innerHTML = item;
        newUl.appendChild(newStorage);    
      });      
      newDiv.appendChild(newUl);

      /*display price */
      let newPrice = document.createElement("strong");
      newPrice.classList.add("price");
      newPrice.innerHTML = value.price.toLocaleString() + 'đ';
      newDiv.appendChild(newPrice);
      

      /*display add to cart*/
      let newButton = document.createElement("button");  
      newButton.onclick = function() {AddToCart(key)};   
      newButton.innerHTML = 'ADD TO CART';
      newDiv.appendChild(newButton);    
    list.appendChild(newDiv);
  });
  if(itemsToShow >=products.length){
    showMore.style.display="none";
  }
}

showCard(ProductFilter);


/*******************SHOW MORE */
showMore.addEventListener('click', function(e) {
  itemsToShow += itemsToLoad;
  showCard(ProductFilter);
})
  



/********************ADD TO CART */



function AddToCart(key){
  
  if (listCart[key] == null){
    listCarts[key] = JSON.parse(JSON.stringify(products[key]));
    listCarts[key].quantity = 1;
  }
  reloadCart();
}

function reloadCart(){
  listCart.innerHTML = '';
  let count =0;
  let totalItem = 0;
  listCarts.forEach((item, key)=>{      
    count =item.quantity+count; 
    totalItem = item.price + totalItem;
    let newli = document.createElement("li");
    let newDiv = document.createElement("div");

      /**display image cart */    
      let newImage = new Image();
      newImage.src = 'img/products/' + item.image;
      newli.appendChild(newImage);

      /**display name cart */ 
      let newName = document.createElement("span");
      newName.innerHTML = item.name;
      newli.appendChild(newName); 
      
      /**display button - cart */ 
      let newBtnDiv = document.createElement("button");
      newBtnDiv.onclick = function() {changeQuantity(key, item.quantity -1)};
      newBtnDiv.innerHTML = '-';
      newDiv.appendChild(newBtnDiv);

      /**display quantity cart */ 
      let newQty = document.createElement("span");
      newQty.classList.add("Qty");
      newQty.innerHTML = item.quantity;
      newDiv.appendChild(newQty);

      /**display button + cart */ 
      let newBtnPlus = document.createElement("button");
      newBtnPlus.onclick = function() {changeQuantity(key, item.quantity +1)};
      newBtnPlus.innerHTML = '+';
      newDiv.appendChild(newBtnPlus);

      newli.appendChild(newDiv);

      let newPrice = document.createElement("span");      
      newPrice.innerHTML = item.price.toLocaleString() + 'đ';
      newli.appendChild(newPrice);

      let newBtnDel = document.createElement("button");      
      newBtnDel.classList.add("delete");
      newBtnDel.onclick = function() {clearLi(key)};
      newBtnDel.innerHTML = '<span><i class="fa fa-times" aria-hidden="true"></i></span>';
      newli.appendChild(newBtnDel);
  
    listCart.appendChild(newli);
    quantity.innerHTML =count;
    total.innerHTML = totalItem.toLocaleString() + ' đ';

  })

}

/**********************TOTAL PRICE IN CART */

function changeQuantity(key, quantity) {  
  if (quantity == 0) {
    delete listCarts[key];
  } else {
    listCarts[key].quantity = quantity;
    listCarts[key].price = quantity * products[key].price;
  }
  reloadCart();
}
/**********************remove item cart */
function clearLi(key){
  delete listCarts[key];
  if (key != null) {
    total.innerHTML = "0" +" đ";
  }
  reloadCart();
}


/***********************OPEN - CLOSE MODAL CART */
function closeCart() {
  document.querySelector(".modal-cart").style.display = "none";
  document.querySelector(".list").style.left = "50%";
  document.querySelector(".navbar").style.left = "50%";
}
function OpenCart() {
  document.querySelector(".modal-cart").style.display = "block";
  document.querySelector(".list").style.left = "47%";
  document.querySelector(".navbar").style.left = "47%";
}







/************************************FILTER PRODUCT */
filters.addEventListener("submit", function (event) {
  let kind = document.getElementById("category").value;
  let rangePrice = document.getElementById("price").value;
  let system = document.getElementById("system").value;
  let storageFilter = document.getElementById("storage").value;
  
  const max0 = 5000000;
  const max1 = 10000000;
  const max2 = 20000000;
  const max3 = 30000000;

  event.preventDefault();
  const items = products.slice(0, itemsToShow);
  const ProductFilter = items.filter((product) => {

    if (kind != "") {
      if (product.kind != kind) {
        return false;
      }
    }

    if (rangePrice != "") {
      if (rangePrice == max0) {
        if (product.price > max0) {
          return false;
        }
      }
    }

    if (rangePrice != "") {
      if (rangePrice == max1) {
        if (product.price < max0 || product.price >= max1) {
          return false;
        }
      }
    }

    if (rangePrice != "") {
      if (rangePrice == max2) {
        if (product.price < max1 || product.price >= max2) {
          return false;
        }
      }
    }

    if (rangePrice != "") {
      if (rangePrice == max3) {
        if (product.price < max2 || product.price >= max3) {
          return false;
        }
      }
    }

    if (system != "") {
      if (product.system != system) {
        return false;
      }
    }

    if(storageFilter !=''){
      if(!product.type.storage.includes(storageFilter)){
        return false;
      }
    }
    return true;
    
  });
  showCard(ProductFilter);      
});

/******************************LOGO - BRAND */
let logo1 = document.querySelector(".logo1");
let logo2 = document.querySelector(".logo2");
let logo3 = document.querySelector(".logo3");
let logo4 = document.querySelector(".logo4");
let logo5 = document.querySelector(".logo5");
let logo6 = document.querySelector(".logo6");
let logo7 = document.querySelector(".logo7");
let brand1 = logo1.getAttribute("data-value");
let brand2 = logo2.getAttribute("data-value");
let brand3 = logo3.getAttribute("data-value");
let brand4 = logo4.getAttribute("data-value");
let brand5 = logo5.getAttribute("data-value");
let brand6 = logo6.getAttribute("data-value");
let brand7 = logo7.getAttribute("data-value");
function filter1() {
  let ProductFilters = products.filter((product) => {
    if (brand1 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}

function filter2() {
  let ProductFilters = products.filter((product) => {
    if (brand2 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}

function filter2() {
  let ProductFilters = products.filter((product) => {
    if (brand2 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}

function filter3() {
  let ProductFilters = products.filter((product) => {
    if (brand3 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}

function filter4() {
  let ProductFilters = products.filter((product) => {
    if (brand4 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}

function filter5() {
  let ProductFilters = products.filter((product) => {
    if (brand5 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}

function filter6() {
  let ProductFilters = products.filter((product) => {
    if (brand6 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}

function filter7() {
  let ProductFilters = products.filter((product) => {
    if (brand7 != product.brand) {
      return false;
    }
    return true;
  });
  showCard(ProductFilters);
}


