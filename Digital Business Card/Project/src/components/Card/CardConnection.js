import ConnectionButt from './ConnectionButt'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons' 
import {faLinkedin} from '@fortawesome/free-brands-svg-icons' 


function CardConnection(props) {
    return (
        <div>
            <div className='Contact_area'>
                    <ConnectionButt name="Email" appLogo={faEnvelope} bgColor="white" url={props.emailURL}/>
                    <ConnectionButt name="Linkedin" appLogo={faLinkedin} iconSize="lg" bgColor="#5093E2" color="white" url={props.linkedinURL}/>
            </div>
        </div>
    );
}

export default CardConnection;