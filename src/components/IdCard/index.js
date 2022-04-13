import "./styles.modules.css";
import MaxImg from "../../assets/images/maxence.png"

function IdCard(props) {
    <>
        <div>

            <img className="Max-img" src={MaxImg} alt="Imagem do Max" />
            <ul className="list">
                <li>First Name: {props.name} </li>
                <li>Last Name: {props.lastName} </li>
                <li>Gender: {props.gender} </li>
                <li>Height: {props.height} </li>
                <li>Birth: {props.birth} </li>
            </ul>


        </div>


    </>
}

export default IdCard