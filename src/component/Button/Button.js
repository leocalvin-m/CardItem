// import styles from "./Button.module.css"
// import styles from "../Card.module.css"

const Button = function (props) {
    console.log(props.fill);

    return (
        <>
            <button className={props.custom}>{props.children}</button>
        </>

    );

}

export default Button;