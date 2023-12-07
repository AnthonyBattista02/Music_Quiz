import './Login.css'
import Button from 'react-bootstrap/Button'

export default function Login () {

    
    return(
        <div className='container'>
            <div className='login-container'>
                <h4 className='login-title'> Username: </h4>
                <input className='login-input'/>
                <h4 className='login-title'> Password: </h4>
                <input className='login-input'/> <br/>
                <Button className='login-button' variant="secondary">Login</Button>
            </div>
        </div>
    )
}