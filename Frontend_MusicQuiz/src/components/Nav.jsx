import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';

export default function Nav () {

    return(
        <div className="navbar">
            <Button variant="outline-primary"><Link to="/Login"> <h2> Login </h2> </Link></Button>
            <Button variant="outline-primary"><Link to="/MyAccount"> <h2> MyAccount </h2> </Link></Button>
            <Button variant="outline-primary"><Link to="/Play"> <h2> Play </h2> </Link></Button>
            <Button variant="outline-primary"><Link to="/Question"> <h2> Question </h2> </Link></Button>
        </div>
    )
}