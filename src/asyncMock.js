const products = [
    {
        id: '1',
        name: 'Cuaderno',
        price: 100,
        category: 'Cuadernos',
        img: 'https://st.depositphotos.com/1875497/3781/i/450/depositphotos_37810929-stock-photo-books-on-white.jpg',
        stock: 20,
        description: 'cuaderno chico'
    },
    {
        id: '2',
        name: 'Lápices',
        price: 100,
        category: 'Lapices',
        img: 'https://acdn.mitiendanube.com/stores/001/261/715/products/1682348695423-efeef852b4a296299616859835078202-640-0.jpg',
        stock: 20,
        description: 'Lápices de colores'
    },
    {
        id: '3',
        name: 'Cartuchera',
        price: 100,
        category: 'Otros',
        img: 'https://http2.mlstatic.com/D_NQ_NP_845414-MLU72612670441_112023-O.webp',
        stock: 20,
        description: 'Cartuchera grande'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}