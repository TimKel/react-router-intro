import { Link } from "react-router-dom";

const Chips = () => {

    return (
        <div>
            <h1>Chips</h1>
            <img 
            src="https://media.istockphoto.com/photos/chips-spilling-out-of-an-open-bag-picture-id174634598?k=20&m=174634598&s=612x612&w=0&h=zy-1EkgCcuUuXiuA64kGhqLwK8LR6cSMA6u8A9xIPjE="
            alt="Potato Chips"
            />
            <h2><Link to="/">Home</Link></h2>
        </div>
    )
}

export default Chips;