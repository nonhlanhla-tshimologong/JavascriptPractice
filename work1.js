function tryCatch(){
    let result;

    try{
        result = x/10;
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        console.log("in the 'finally' block")
    }
}

function dataTypeSample(){
    let productName = 'product name';
    let productCount = 5;
    let isActive = true;
    let value = null;
    let result;
    let sellByDate = new Date();

    let product = {
        description: 'this is the product object'
    };
    let products = [];

    console.log(typeof productName);
    console.log(typeof productCount);
    console.log(typeof isActive);
    console.log(typeof value);
    console.log(typeof result);
    console.log(typeof sellByDate);
}