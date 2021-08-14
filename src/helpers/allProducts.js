const productsAll = [
    {
        id: 0,
        title: "2001 Space Odyssey",
        price: 2800,
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 1,
        title: "Stalker",
        price: 2600,
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 2,
        title: "Paris, Texas",
        price: 2700,
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 3,
        title: "Rififi",
        price: 1500,
        pictureUrl:
            "/img/img-300x300.png",
    },
];



export const allProducts = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsAll);
            reject("Ocurrió un error");
        }, 2000);
    });
    return promise;
};

