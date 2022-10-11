import './HomePage.css';
import React from 'react';
import PageFooter from './page_footer';
import NavbarPlane from '../Navbar/NavbarPlane';
import chatImg from '../../assets/Home/chat.png';
import glitchhImg from '../../assets/Home/glitchh.png';
import monitizeImg from '../../assets/Home/Monitize.png';
import newsImg from '../../assets/Home/news.png';



function HomePage() {

    return (
        <React.Fragment>
            <div className="home-page1">
                <NavbarPlane />
                <div className="connecting-gamers-text">
                    <h1 className='heading-text1'>Connecting Gamers Like</h1>
                    <h1 className='heading-text2'>Never Before.</h1>

                </div>

            </div>
            <div className="home-page2">

                <h1 className='heading-text3'>Who we are</h1>
                <p className='long-text'>Modern day gamers currently seek a platform that houses the entire gaming community under one big roof. Glitchh serves as a global means of expression in helping gamers to pal around and fraternise with like-minded individuals in a phenomenal manner. </p>

                <div className="divider"></div>

                <h2 className="heading-text4">Tag along for the love of gaming</h2>
                <p className='small-text'>Form covens that help you blossom .Reckon Glitchh as a fantasized destination for gamers</p>

                <div className="container">

                    <div className="box">
                        <div className="white_box" />


                        <p className='take-care-text'>We acknowledge your passion </p>
                        <p className='create-share-text'>Catalyze, express and consume relevant industry content. </p>

                    </div>
                    <div className="box">
                        <div className="white_box" />


                        <p className='take-care-text'>Of one mind with one voice </p>
                        <p className='create-share-text'>Socialize with players who take the gaming craze up a notch</p>

                    </div>
                    <div className="box">
                        <div className="white_box" />


                        <p className='take-care-text'> We take care of your passion</p>
                        <p className='create-share-text'>Bringing to you gaming experience that’s once in a life-time </p>

                    </div>

                </div>
                <div className="divider"></div>
                <h1 className='heading-text3'>What we offer</h1>
                <p className='long-text'>Learn How To Build Your Gaming Network With Glitchh</p>

                <div className="container1">

                    <img src={glitchhImg} className="box2">

                    </img>
                    <div className="container1-text">

                        <h3 className='heading-text5'>The Hangout</h3>
                        <p className='long-text2'>We bring to you cool new avatars, each fierce in their own unique ways accompanied by a special character with powers that could make the devil shiver! Set up your profile with an avatar that expresses you best to enjoy Glitchh to the fullest.</p>

                    </div>


                </div>
                <div className="container1">
                    <div className="container1-text">

                        <h3 className='heading-text5'>Stay in loop</h3>
                        <p className='long-text2'>Teamwork is vital for gamers and lacking proper means of communication is not very different from entering an enemy’s territory blindfolded. Always stay in loop with your team using our chat/voice channel to share prompt plan Bs and vital gaming insights.</p>

                    </div>

                    <img src={chatImg} className="box2">

                    </img>



                </div>
                <div className="container1">

                    <img src={newsImg} className="box2">

                    </img>
                    <div className="container1-text">

                        <h3 className='heading-text5'>News updates</h3>
                        <p className='long-text2'>Glitchh clues you in on the latest esports gossip, competitions and collaboration opportunities round the clock. Stay tuned with everything that’s going on in the gaming industry and more.</p>

                    </div>


                </div>
                <div className="container1">
                    <div className="container1-text">

                        <h3 className='heading-text5'>Earn from Glitchh</h3>
                        <p className='long-text2'>Express yourself with creative posts and sharing bites of your gameplay to experience a gaming journey like never before.</p>

                    </div>

                    <img src={monitizeImg} className="box2">

                    </img>



                </div>




            </div>

            <div className="footer">
                <PageFooter />
            </div>





        </React.Fragment>
    )

}

export default HomePage;