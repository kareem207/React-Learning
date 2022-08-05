import React from 'react';
import FooterButt from './FooterButt';
import { faFacebookSquare,faTwitterSquare,faInstagramSquare,faGithubSquare } from '@fortawesome/free-brands-svg-icons' 



function CardFooter(props) {
    return (
        <div className='Footer_section'>
            <FooterButt appLogo={faTwitterSquare} URL={props.userTwitterURL} />
            <FooterButt appLogo={faFacebookSquare}  URL={props.userFacebookURL}/>
            <FooterButt appLogo={faInstagramSquare}  URL={props.userInstagramURL}/>
            <FooterButt appLogo={faGithubSquare}  URL={props.userGithubURL}/>
        </div>
    );
}

export default CardFooter;