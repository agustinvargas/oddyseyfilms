const products = [
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

export const monkAsync = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            console.log(reject);
        }, 2000);
    });
    return promise;
};