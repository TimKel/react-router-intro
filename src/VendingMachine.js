import { Link } from "react-router-dom";


function VendingMachine() {
  return (
    <div>
      <h1>The Vending Machine</h1>
        <h2><Link to="/Chocolate">Chocolate</Link></h2>
        <h2><Link to="/Soda">Soda</Link></h2>
        <h2><Link to="/Chips">Chips</Link></h2>
      <img 
        src="http://web.mit.edu/2.744/studentSubmissions/humanUseAnalysis/keval/vm.jpg" 
        alt="Vending Machine"
      />
        </div>
  );
}

export default VendingMachine;
