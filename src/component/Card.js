import styles from "./Card.module.css"
import shoes from "./shoes.jpg"
import Button from "./Button/Button"

const Card = function () {
    console.log(styles);

    return (
        <>
            <div className={styles.cardComponent}>
                <img src={shoes} alt="" />
                <div className={styles.productDetails}>
                    <h2 className="heading">Nike Adapt BB 2.0</h2>
                    <p className="details">consistent, customize fit, game-Changing</p>
                    <div className={styles.pricing}>

                        <span>$279.97</span><span>$350</span><span>20% off</span>
                    </div>
                    <div className={styles.btn}>
                        <Button custom={styles.buttonFill}>Buy Now</Button>
                        <Button custom={styles.buttonOutline}>Add to Cart</Button>

                    </div>

                </div>


            </div>

        </>
    )

}

export default Card;