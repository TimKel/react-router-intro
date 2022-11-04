import { Link } from 'react-router-dom'
const Chocolate = () => {
    return (
            <div>
                <h1>Chocolate</h1>
                <img
                    src="https://i.pinimg.com/736x/2b/1c/ae/2b1caecc723712711329d543026f8277--candy-bar-labels-candy-bar-wrappers.jpg"
                    alt="Willy Wonka Bar"
                />
                <h2><Link to="/">Home</Link></h2>
            </div>
    )
}

export default Chocolate;