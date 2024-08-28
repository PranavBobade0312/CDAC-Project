import { Link } from "react-router-dom"
import { Container, Row ,Col} from "reactstrap";
import Footer from "../../Components/Header/Footer";
import Cars from "./car";
import Crousel from "./Carousel";
import image1 from "./offer-706850__340.jpg"

import "./home.css"
import SignUpCard from "./SignUpCard";
import HorizontalCard from "../../Components/Header/HorizontalCard";

const Home = () => {

    return (
        
<Container>
        <div > 
            <nav class="navbar navbar-info bg-light  ">
                <div class="container-fluid ">
                    <span >
                        <h1 className="mt-2 mb-2 " class="markee" > Welcome To Restaurant Management System -Restrorun</h1>
                        <marquee behavior="scroll" direction="left" scrollamount="10" class="markee1">
                        Running your restaurant smoothly !!!!!</marquee>
                    </span>
                </div>
            </nav>
        </div>
    <div>
    <Crousel /> 
    <SignUpCard/>
        
        <HorizontalCard/>

      
        </div>

        </Container>

    )
}

export default Home;

