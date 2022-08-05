import PesonalCard from './Card/PesonalCard';
import './App.css';
import UserImg1 from "./images/imageSample.PNG"
import UserImg2 from "./images/personalPic.jpg"

function App() {
    return (
        <div className='container'>
            <PesonalCard
            userImg={UserImg1} 
            userName="Laura Smith" 
            userJobTitle="Frontend Developer"
            userEmailURL="#" 
            userLinkedinURL="#"
            userAbout="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." 
            userInterests="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
            userTwitterURL="#"
            userFacebookURL="#"
            userInstagramURL="#"
            userGithubURL="#"
            />

            <PesonalCard
            userImg={UserImg2} 
            userName="Kareem Hamdeen" 
            userJobTitle="Full-Stack Developer"
            userEmailURL="#" 
            userLinkedinURL="https://www.linkedin.com/in/kareem-hamdeen-744409199/"
            userAbout="I am a Full-stack developer with a great hunger to develop myself and bring value to the market by development awesome software products." 
            userInterests="Music. Entrepreneur. Reading. Food expert. video games. Coding. Discovring new things."
            userTwitterURL="#"
            userFacebookURL="https://www.facebook.com/kareemelsafy27"
            userInstagramURL="https://www.instagram.com/kareem_kh27/"
            userGithubURL="https://github.com/kareem207"
            />
        </div>
    );
}

export default App;