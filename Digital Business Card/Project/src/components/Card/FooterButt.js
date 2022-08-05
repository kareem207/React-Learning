import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterButt(props) {
    return (
        <div >
            <a href={props.URL} className='Footer_section_a'> <FontAwesomeIcon icon={props.appLogo} size="2x" /> </a>
        </div>
    );
}

export default FooterButt;