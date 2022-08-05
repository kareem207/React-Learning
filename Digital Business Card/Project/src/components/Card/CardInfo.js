
function CardInfo(props) {
    return (
        <div className="Card_info">
            <img src={props.img} />
            <h2 className="User_name">{props.name} </h2>
            <h5 className="User_job_title">{props.jobTitle}</h5>
            <a className="User_website" href="">laurasmith.website</a>

            
        </div>
    );
}

export default CardInfo;