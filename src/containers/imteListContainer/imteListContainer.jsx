import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(Array.isArray(response) ? response : [])
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return( 
        <div className="container mt-5">
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer