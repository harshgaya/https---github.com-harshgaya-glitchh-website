import './AboutPage.css';
import img1 from '../../assets/About/aboutimg1.png';
import img2 from '../../assets/About/aboutimg2.png';
import PageFooter from '../Home/page_footer';
import Navbar from '../Navbar/Navbar';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Navbar />
            <div className="about_container">
                <div className="about_content">

                    <h5 className='about_subheading'>Mission  &#8212;</h5>
                    <h1 className='about-heading'>Proin tincidunt eget justo ullamcorper. </h1>
                    <p className='about-large-text'>Our primary motive is to transform your perception on gaming entirely by bringing to you an experience like never before. Glitchh melds cutting edge technologies with gaming expertise to provide you a platform where you can speak your mind without a hitch. We strive towards developing a gaming community we can all be proud of. </p>

                </div>
                <img src={img1} className="about_image"></img>

            </div>
            <div className="space"></div>
            <div className="about_container">
                <img src={img2} className="about_image"></img>

                <div className="about_content">

                    <h5 className='about_subheading'>Vision  &#8212;</h5>
                    <h1 className='about-heading'>Proin tincidunt eget justo ullamcorper. </h1>
                    <p className='about-large-text'>There’s more to Glitchh than serving as a mere means for socialising. We aspire to mould the toxic gaming culture into a secure global community blooming with opportunities and collaborations for gamers. Driven by the vision to bring together the gaming industry as one, our virtual platform seeks to take your gaming experience up a notch. </p>

                </div>

            </div>
            <div className="space"></div>
            <div className="footer">
                <PageFooter />
            </div>
        </div>
    )
}

export default AboutPage;