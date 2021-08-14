const product = [
    {
        id: 4,
        title: "Quadrophenia",
        price: 2500,
        pictureUrl:
            "/img/img-300x300.png",
    },
]

export const productOne = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
            // reject("Ocurrió un error");
        }, 2000);
    });
    return promise;
}