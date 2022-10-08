import './HomePage.css';
import React from 'react';
import PageFooter from './page_footer';



function HomePage() {

    return (
        <React.Fragment>
            <div className="home-page1">
                <div className="connecting-gamers-text">
                    <h1 className='heading-text1'>Connecting Gamers Like</h1>
                    <h1 className='heading-text2'>Never Before.</h1>

                </div>

            </div>
            <div className="home-page2">

                <h1 className='heading-text3'>Who we are</h1>
                <p className='long-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <div className="divider"></div>

                <h2 className="heading-text4">Join Glitchh Because You Love Gaming</h2>
                <p className='small-text'>If you’re a gamer, you’ll love hanging out on Glitchh. </p>

                <div className="container">

                    <div className="box">
                        <div className="white_box" />


                        <p className='take-care-text'> We take care of your passion</p>
                        <p className='create-share-text'>Create, share and consume only what’s relevant!</p>

                    </div>
                    <div className="box">
                        <div className="white_box" />


                        <p className='take-care-text'> We take care of your passion</p>
                        <p className='create-share-text'>Create, share and consume only what’s relevant!</p>

                    </div>
                    <div className="box">
                        <div className="white_box" />


                        <p className='take-care-text'> We take care of your passion</p>
                        <p className='create-share-text'>Create, share and consume only what’s relevant!</p>

                    </div>

                </div>
                <div className="divider"></div>
                <h1 className='heading-text3'>What we offer</h1>
                <p className='long-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <div className="container1">

                    <div className="box2">

                    </div>
                    <div className="container1-text">

                        <h3 className='heading-text5'>Post</h3>
                        <p className='long-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>


                </div>
                <div className="container1">
                    <div className="container1-text">

                        <h3 className='heading-text5'>Post</h3>
                        <p className='long-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>

                    <div className="box2">

                    </div>



                </div>
                <div className="container1">

                    <div className="box2">

                    </div>
                    <div className="container1-text">

                        <h3 className='heading-text5'>Post</h3>
                        <p className='long-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>


                </div>
                <div className="container1">
                    <div className="container1-text">

                        <h3 className='heading-text5'>Post</h3>
                        <p className='long-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>

                    <div className="box2">

                    </div>



                </div>




            </div>

            <div className="footer">
                <PageFooter />
            </div>





        </React.Fragment>
    )

}

export default HomePage;