/*let i = 10;
function printAll(){
    for(let i = 0; i < arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}
printAll(i);*/

function greeting(){
    let message = "Hello";
    let sayHi = function hi(){
        let message = "Hi";
    };
    sayHi();
    console.log(message);
}
greeting()

function forinSample(){
    let product = {
        "productID": 680,
        "name": "Road frame",
        "color": "Black",
        "standardCost": 1059.31,
        "listPrice": 1431.50,
        calculateGrossProfit: function(){
            return this.listPrice - this.standardCost;
        }
    };

    for(const key in product){
        console.log("'" + key + "'=" + product[key]);
    }
}

    let _product = [
        {
            "productID": 680,
            "name": "Road frame",
            "color": "Black",
            "standardCost": 1059.31,
            "listPrice": 1431.50,
        },
        {
            "productID": 680,
            "name": "Road frame",
            "color": "Black",
            "standardCost": 1059.31,
            "listPrice": 1431.50,
        },
        {
            "productID": 680,
            "name": "Road frame",
            "color": "Black",
            "standardCost": 1059.31,
            "listPrice": 1431.50,
        }
    ];
    
    function forofSample(){
        for(const item of _product){
            console.log(3)
        }
    }
function mathSample(){
    //'use strict';

    let price = 200;
    let result = 0;

    console.log("price = " + price.toString());

    result = price + 200;
    console.log("price + 100 = " + result.toString());

    result = price - 200;
    console.log("price - 100 = " + result.toString());

    result = price * 200;
    console.log("price * 100 = " + result.toString());

    result = price / 200;
    console.log("price / 100 = " + result.toString());

    result = price ** 200;
    console.log("price ** 100 = " + result.toString());
}
    function ternary(){
        let price = 100;
        let result;

        result = price < 1500 ? "'less than 1500'" : "'greater than 1500'";
        console.log("ternary = " + result);
    }

    function trueFalseSample(){
        let price = 200;
        let color = 'Red';
        let results;

        console.log("Check for 'true' values");
        results = price > 10;
        console.log("Price is > 10");

        if(price > 10){
            console.log("Price is > 10");
        }
    }
    
    function getRndInteger() {
        let max = 10;
        let min = 1;
        let result;

        result =  Math.floor(Math.random() * (max - min + 1) ) + min;
        console.log(result)    
        //return
          }
    'use strict';
    
    let length = 3;
    let width = 4.5;
    //let area;
    //let perimeter;

    //area = (length * width);
    //perimeter = 2 * (length + width);

    function getArea(){
        console.log(area);
        return area;
    }

    function getPerimeter(){
        console.log(perimeter);
        return perimeter;
    }

    /*const PI = Math.PI;
    //let readline = ('readline');
    let r = 2.6;
    let area;
    let perimeter;

    area = PI * r**2;
    perimeter = 2 * PI * r;

    console.log(area);
    console.log(perimeter);*/

    function simpleTryCatch(){
        let res;
        let x= 100;

        try{
            console.log("An error will occur.");
            res = x/10;
            console.log("This line will never run.")
        }
        catch(error){
            console.log("In the 'catch' block " + error.message);
        }
        finally{
            console.log("In the 'finally block");
        }
    }

    let sum = (num1, num2)=> num1 + num2;
    
    let output = sum(10, 5);
    console.log(output);