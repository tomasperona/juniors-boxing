import products from "./products"

function getData(){
    return new Promise((resolve) => {
        console.log("Solicitando datos a la base de datos.");
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export default getData