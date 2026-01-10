import products from "./products"

function getData(){
    const promiseData = new Promise((resolve, reject) => {
    console.log("Solicitando datos a la base de datos.")
    setTimeout(() => {
        
    }, resolve(products), 1000);
    })
    return promiseData
}

export default getData