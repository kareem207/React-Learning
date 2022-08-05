import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ConnectionButt(props) {
    return (
        <div>
            <a href={props.url}>
                <button className="Contact_area_button" style={{ backgroundColor: props.bgColor, color:props.color }}>
                    <FontAwesomeIcon icon={props.appLogo} size={props.iconSize} /> {props.name}
                </button>
            </a>
        </div>
    );
}

export default ConnectionButt;