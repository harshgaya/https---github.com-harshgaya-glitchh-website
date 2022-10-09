import './AboutPage.css';
import img1 from '../../assets/About/aboutimg1.png';
import img2 from '../../assets/About/aboutimg2.png';
import PageFooter from '../Home/page_footer';

function AboutPage() {
    return (
        <div className="AboutPage">
            <div className="about_container">
                <div className="about_content">

                    <h5 className='about_subheading'>Mission  &#8212;</h5>
                    <h1 className='about-heading'>Proin tincidunt eget justo ullamcorper. </h1>
                    <p className='about-large-text'>Maecenas vitae dolor et urna porta condimentum. Vestibulum finibus accumsan blandit. Sed iaculis tristique sapien, et consequat sem facilisis sed. Sed suscipit quam quis accumsan ornare. Aliquam erat volutpat. In hac habitasse platea dictumst. Donec risus ligula, convallis nec dignissim venenatis, condimentum sit amet orci. Curabitur eget nisi blandit, fermentum turpis quis, mollis dui. Aenean sit amet luctus urna. Aliquam lobortis semper libero dapibus tempor. Aenean in semper lectus, at gravida justo. Donec faucibus posuere dui.</p>

                </div>
                <img src={img1} className="about_image"></img>

            </div>
            <div className="space"></div>
            <div className="about_container">
                <img src={img2} className="about_image"></img>

                <div className="about_content">

                    <h5 className='about_subheading'>Vision  &#8212;</h5>
                    <h1 className='about-heading'>Proin tincidunt eget justo ullamcorper. </h1>
                    <p className='about-large-text'>Maecenas vitae dolor et urna porta condimentum. Vestibulum finibus accumsan blandit. Sed iaculis tristique sapien, et consequat sem facilisis sed. Sed suscipit quam quis accumsan ornare. Aliquam erat volutpat. In hac habitasse platea dictumst. Donec risus ligula, convallis nec dignissim venenatis, condimentum sit amet orci. Curabitur eget nisi blandit, fermentum turpis quis, mollis dui. Aenean sit amet luctus urna. Aliquam lobortis semper libero dapibus tempor. Aenean in semper lectus, at gravida justo. Donec faucibus posuere dui.</p>

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