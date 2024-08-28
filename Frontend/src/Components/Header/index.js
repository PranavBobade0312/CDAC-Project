import { useNavigate } from 'react-router';
import './index.css'
import logo from './logo.png'
import logo1 from './logo1.png'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import CustomerSignUp from '../../Pages/Customer/CustomerSignUp';

const Header = () => {

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.clear()
        navigate("/")
    }

    return (
        
          
        <Container style={{backgroundColor:"aliceblue"}}>
            <div>
                
            <div>
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        marginBottom: '1rem',
        backgroundColor: '#dc3545', // Bootstrap 'danger' color, adjust as needed
        borderBottom: '1px solid #d6d6d6', // Adjust border color if needed
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Bootstrap shadow-sm style
    }}>
        <div style={{
            marginRight: '1rem' // Space between logo and navbar
        }}>
            <img src={logo1} alt="logo" style={{
                maxHeight: '50px' // Adjust as needed
            }} />
        </div>

        <nav style={{
            flexGrow: 1
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: '#ffffff', // White text color
                    fontSize: '1.25rem',
                    fontWeight: 'bold'
                }}>
                    RestroRun
                </Link>
            </div>
        </nav>
    </div>
</div>


            <nav>
        
            </nav>

           
            {(sessionStorage["personType"] === "customer" && sessionStorage["loginStatus"] === "1") ?
                <div className='d-flex align-items-center flex-md-row'>
                    <nav className="my-5 my-md-3 mr-md-3" >
                        <Link className="p-2 text-dark" to="/customer/home" >Home</Link>
                        <Link className="p-2 text-dark" to="/customer/orders">All Orders</Link>
                        <Link className="p-2 text-dark" to="/customer/cart">Cart</Link>
                        {/* <Link className="p-2 text-dark" to="/customer/home">Hello {name}</Link> */}
                    </nav>
                    <a className="btn btn-outline-primary" href="#" onClick={() => logout()}>Log Out</a>
                </div>
                : <div></div>
            }

            {(sessionStorage["personType"] === "manager" && sessionStorage["loginStatus"] === "1") ?
                <div className='d-flex align-items-center'>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to="/manager/home">Home</Link>
                        <Link className="p-2 text-dark" to="/manager/restaurantmenu">Restaurant Menu</Link>
                        <Link className="p-2 text-dark" to="/manager/allorders">All Orders</Link>
                    </nav>
                    <a className="btn btn-outline-primary" href="#" onClick={() => logout()}>Log Out</a>
                </div>
                : <div></div>
            }
            {(sessionStorage["personType"] === "deliveryPerson" && sessionStorage["loginStatus"] === "1") ?
                <div className='d-flex align-items-center'>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to="/dp/home">Home</Link>
                        <Link className="p-2 text-dark" to="/dp/allorders">All Orders</Link>
                    </nav>
                    <a className="btn btn-outline-primary" href="#" onClick={() => logout()}>Log Out</a>
                </div>
                : <div></div>
            }
        </div>
        </Container>
        
    )
}

export default Header
