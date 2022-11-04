import "./button.scss";

const Button = (props) => {

    let styles = props.styles;


    styles.display = "flex";
    styles.alignItems = "center";
    styles.justifyContent = "center";

    return <div className = "button" 
                style = {styles}
                onClick = {props.handleClick}            
            >
        {props.content}
        {props.icon &&
            <img src = {props.icon}></img>
        }
    </div>
}

export default Button;