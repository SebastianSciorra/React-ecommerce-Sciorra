import { Link } from "react-router-dom"
import styles from './Item.module.css';

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className={styles.cardItem}>
          <header className={styles.header}>
            <h2>{name}</h2>
          </header>
          <picture>
            <img src={img} alt={name} className={styles.itemImg} />
          </picture>
          <section>
            <p className={styles.info}>Precio: $ {price}</p>
            <p className={styles.info}>Stock disponible: {stock}</p>
          </section>
          <footer className={styles.itemFooter}>
            <Link to={`/item/${id}`} className={styles.option}>Ver detalle</Link>
          </footer>
        </article>
      );
    };

export default Item