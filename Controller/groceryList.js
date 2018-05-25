//Implemented IIFE
(function(){
'use strict'
// Creating Grocery list from given Local JSON Data
 $(document).ready(function CreateTableFromJSON() {
    var myGrocery = [     {         "category": "fruit",         "item": "apples",         "type": "Honey Crisp",         "brand": "Little cuties",         "qty": 10     }, 
    {         "category": "beverage",         "item": "milk",         "type": "2%",         "brand": "generic",         "qty": "1 gallon"     },
    {         "category": "pasta",         "item": "Pasta",         "type": "Penne",         "brand": "Barilla",         "qty": 3     },
    {         "category": "dessert",         "item": "Gelatin dessert",         "type": "Green",         "brand": "Jello",         "qty": 3     },
    {         "category": "dairy",         "item": "Yogurt",         "type": "Assorted flavors",         "brand": "Chobani",         "qty": 12     },
    {         "category": "pasta",         "item": "Pasta",         "type": "Linguini",         "brand": "Barilla",         "qty": 3     },
    {         "category": "beverage",         "item": "Apple juice",         "type": "regular",         "brand": "Happy Farms",         "qty": 2     },
    {         "category": "beverage",         "item": "Vodka", "type": "Tangerine",         "brand": "Grey Goose",         "qty": 1     } ]

    var myCategory=['fruit','beverage','pasta','dessert','dairy'];

    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currMonth=months[d.getMonth()];
    
    
    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Category', 'Item', 'Type'  'Brand' and 'qty')
    var col = [];
    for (var i = 0; i < myGrocery.length; i++) {
        for (var key in myGrocery[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.className='tablespan';

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
   var caption=table.createCaption();
   caption.innerHTML="<strong> " + currMonth + "'s Grocery List</strong>"
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
        tr.className='toupper';
        th.className='text-bold';
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myGrocery.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1),
            item = myGrocery[i][col[j]],
            strInner ='';
            tabCell.className='columnSpan';
            
            if(j===0){
                 //alert(item);
                switch(item) {
                    case 'fruit':
                    strInner = getSvg('fruit');
                    break;
                    case 'beverage':
                    strInner = getSvg('beverage');
                    break;
                    case 'pasta':
                    strInner = getSvg('pasta');
                     break;
                    case 'dairy':
                    strInner = getSvg('dairy');
                    break;
                    case 'dessert':
                    strInner = getSvg('dessert');
                    break;
                    default:
                    tabCell.innerHTML=item;  
                }
                tabCell.innerHTML= strInner;
            }else{
                tabCell.innerHTML = item;
            }
            
        }
    }


    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
 }
 
 );
 //MODULAR FUNCTION TO GET SVG IMAGES 
 function getSvg(category){
    return '<svg class="item_img color'+ category +'"><image xlink:href="..\\UI\\images\\' + category + '.svg" src="..\\UI\\images\\' + category + '.png" alt="' + category + '" ></image></svg>';
 }
})();