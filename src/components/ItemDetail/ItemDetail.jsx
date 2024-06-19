import { useContext, useState } from "react"
import ItemCount from "../ItemCount/itemCount"
import './ItemDetail.css'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const HandleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const articulo = {
            id, name, price, img
        }

        addItem(articulo, quantity)
    }


    return (
        <div className="CardItemContainer">
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHEader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg" />
                </picture>
                <section>
                <p className="Info">
                        Categoría: {category}
                    </p>
                    <p className="Info">
                        Descripción: {description}
                    </p>
                    <p className="Info">
                        Precio: $ {price}
                    </p>
                </section>
                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="Option">Finalizar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={HandleOnAdd}/>
                        )
                    }
                
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail