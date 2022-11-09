let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp; // dummy variable

// total function
//======================

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value+ +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "#040";
    } else {
        total.innerHTML = "";
        total.style.background = "#a00d02";
    }
}

//  function to create new product
//=======================

let dataPro;
if (localStorage.product != null) {
    
    dataPro = JSON.parse(localStorage.product);
    
} else {
    
    dataPro= [];
}

submit.onclick = function () {
    
        let newPro = {
            title: title.value.toLowerCase(),
            price: price.value,
            taxes: taxes.value,
            ads: ads.value,
            discount: discount.value,
            total: total.innerHTML,
            count: count.value,
            category: category.value.toLowerCase() 
        }
        
        // check the mood of the button if it is create or update
        if (mood === 'create') {
            
            // check the count field 
            if (newPro.count > 1) {
                for (let i =0; i <newPro.count; i++) {
                    dataPro.push(newPro);  
                } 
            } else {
                dataPro.push(newPro);
            } 
        } else {
            dataPro[tmp] = newPro;
            mood = 'create';
            submit.innerHTML = 'Create';
            count.style.display = 'block';
        }

        localStorage.setItem('product', JSON.stringify(dataPro));
        clearData();
        showData();
     
}

//  function to clear input data come from user
//=======================

function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

//  function to read products that have been created
//=======================

function showData() {
    
    let table = '';
    for (let i= 0; i < dataPro.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button id="update" onclick= "updateData(${i})">update</button></td>
            <td><button id="delete" onclick= "deleteData(${i})">delete</button></td>     
        </tr>`
        
        getTotal();
        
    }
    document.getElementById('tbody').innerHTML = table;
    
    // Delete all btn
    let deleteAllbtn = document.getElementById('deleteAllBtn');
    if (dataPro.length > 0) {
        deleteAllbtn.innerHTML = `<td><button onclick= "deleteAll()">Delete All (${dataPro.length})</button></td>`
    } else {
        deleteAllbtn.innerHTML = '';
    }
}

showData();

//  function to delete a product
//=======================

function deleteData(i) {
    
    dataPro.splice(i, 1);
    localStorage.product = JSON.stringify(dataPro);
    showData();
}

//  function to delete all products
//=======================

function deleteAll () {
    dataPro.splice(0);
    localStorage.clear;
    showData();
    
}

//  function to update a product
//=======================

function updateData(i) {
    
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    count.style.display = "none";
    category.value = dataPro[i].category;
    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth"
    });
   
}

//  function for search for products
//=======================

let searchMood = 'title';
function getSearchMood (id) {
    
    if (id === "searchTitle") {
        searchMood = "title";
        
    } else {
        searchMood = "category";
        
    }
    search.placeholder = "search by " + searchMood;
    search.focus();
    search.value = "";
    showData();
}

function searchData(value) {
    let table = '';
    for (let i= 0; i < dataPro.length; i++) {
        if (searchMood == "title") {
            
            if (dataPro[i].title.includes(value.toLowerCase())) {
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button id="update" onclick= "updateData(${i})">update</button></td>
                    <td><button id="delete" onclick= "deleteData(${i})">delete</button></td>     
                </tr>`
            }  
            
        } else if (dataPro[i].category.includes(value.toLowerCase())) {
            table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button id="update" onclick= "updateData(${i})">update</button></td>
                <td><button id="delete" onclick= "deleteData(${i})">delete</button></td>     
            </tr>`
        }
    }
    document.getElementById('tbody').innerHTML = table;
}