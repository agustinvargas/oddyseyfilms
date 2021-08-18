const productsAll = [
    {
        id: 0,
        title: "2001 Space Odyssey",
        price: 2800,
        description: "Acá va la descripción del producto",
        stock: 5,
        category: "cine",
        pictureUrl:
            "/img/spaceodyssey.png",
    },
    {
        id: 1,
        title: "Stalker",
        price: 2600,
        category: "cine",
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 2,
        title: "Dragon Ball Z",
        price: 2700,
        category: "anime",
        pictureUrl:
            "/img/img-300x300.png",
    },
    {
        id: 3,
        title: "Okupas",
        category: "series",
        price: 1500,
        pictureUrl:
            "/img/img-300x300.png",
    },
];



export const allProducts = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsAll);
            // reject("Ocurrió un error");
        }, 2000);
    });
    return promise;
};

