import './Login.css'
import Button from 'react-bootstrap/Button'

export default function Login () {

    
    return(
        <div className='container'>
            <div className='login-container'>
                <h2 className='title-login'>LOG IN:</h2>
                <h5 className='login-title'> Username: </h5>
                <input className='login-input'/>
                <h5 className='login-title'> Password: </h5>
                <input className='login-input'/> <br/>
                <Button className='login-button' variant="secondary">Login</Button>
            </div>
        </div>
    )
}