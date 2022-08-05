import "./TripCard.css"
import {faMapMarker} from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function TripCard(props) {
    return (
        <div className="TP_container">
            <img className="TP_image" src={props.imageUrl} alt="location image"/>
            <div className="TP_leftSection">
                <div className="headline_row">
                    <FontAwesomeIcon icon={faMapMarker} color="#F55A5A" className="TP_locationIcon" />
                    <p className="TP_country">{props.location}</p>
                    <a href={props.googleMapsUrl} className="TP_locationOnTheMap" >View on Google Maps</a>

                </div>
                <h2 className="TP_place">{props.title}</h2>
                <p className="TP_date" >{props.startDate} - {props.endDate}</p>
                <p className="TP_description"> {props.description} </p>
            </div>
        </div>
    );
}
export default TripCard;