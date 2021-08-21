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
        description: "Acá va la descripción del producto",
        stock: 5,
        category: "cine",
        pictureUrl:
            "/img/stalker.jpg",
    },
    {
        id: 2,
        title: "Akira",
        description: "Acá va la descripción del producto",
        stock: 5,
        price: 2700,
        category: "anime",
        pictureUrl:
            "/img/akira.jpg",
    },
    {
        id: 3,
        title: "Mad Men",
        category: "series",
        description: "Acá va la descripción del producto",
        stock: 5,
        price: 1500,
        pictureUrl:
            "/img/madmen.jpg",
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

