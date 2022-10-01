import { Link } from "react-router-dom";

const Soda = () => {

    return (
        <div>
            <h1>Soda</h1>
            <img
            src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206"
            alt="Can of Coca-Cola"
            />
            <h2><Link to="/">Home</Link></h2>
        </div>
    )
}

export default Soda;