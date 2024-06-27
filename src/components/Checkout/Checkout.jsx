import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './Checkout.css';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        };
        console.log(pedido);

        const pedidosRef = collection(db, 'pedidos');

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })
            .catch((error) => {
                console.error('Error al agregar el documento: ', error);
            });
    };

    if (pedidoId) {
        return (
            <div className="container gracias">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
                <Link to='/' className='Button'>Productos</Link>
            </div>
        );
    }

    return (
        <div className="container finalizar">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register('nombre')} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register('telefono')} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register('email')} />
                <button className="Button" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
