import ItemCount from "../ItemCount/itemCount"
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("agregado", quantity)}/>
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail