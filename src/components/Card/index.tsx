
import './styles.css';
import cardImg from '../../assets/car-card 1.png';

export default function Card(){

    return(
        <div className="ct-card">
            <img src={cardImg} alt="Carro" />
            <p>Lorem ipsum dolor</p>
        </div>

    );
}

