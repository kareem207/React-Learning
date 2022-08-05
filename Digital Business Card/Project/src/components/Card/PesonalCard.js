import CardInfo from "./CardInfo";
import CardConnction from "./CardConnection"
import CardAbout from "./CardAbout"
import CardInterests from "./CardInterests"
import CardFooter from "./CardFooter"
import "./Card.css"

function PesonalCard(props) {
    return (
        <div className="personal_card_container">
            <div className="Pesronal_card">
                <CardInfo img={props.userImg} name={props.userName} jobTitle={props.userJobTitle}/>
                <CardConnction emailURL={props.userEmailURL} linkedinURL = {props.userLinkedinURL} />
                <CardAbout aboutInfo={props.userAbout} />
                <CardInterests interestsInfo={props.userInterests}/>
                <CardFooter 
                userTwitterURL= {props.userTwitterURL} userFacebookURL= {props.userFacebookURL}
                userInstagramURL= {props.userInstagramURL} userGithubURL= {props.userGithubURL} 
                />
            </div>
        </div>
    );
}

export default PesonalCard;