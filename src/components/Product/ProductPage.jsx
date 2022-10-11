import './ProductPage.css';
import productImage1 from '../../assets/Product/productimg1.png';
import productImage2 from '../../assets/Product/productimg2.png';
import image34 from '../../assets/Product/34.png';
import image1b from '../../assets/Product/1b.png';
import image495mn from '../../assets/Product/495mn.png';
import image26 from '../../assets/Product/26.png';
import graph from '../../assets/Product/graphImg.png';
import user from '../../assets/Product/userImg.png';
import publicImg from '../../assets/Product/publicImg.png';
import boost from '../../assets/Product/boostImg.png';
import React from 'react';
import PageFooter from '../Home/page_footer';
import Navbar from '../Navbar/Navbar';



function ProductPage() {
    return (
        <React.Fragment>
            <div className="ProductPage">
                <Navbar />
                <div className="ProductPage-Container1">

                    <img className='productImg1' src={productImage1} alt="" />

                    <div className="ProductPage-Container">
                        <h5 className='product-subheading'>About Wrecked eSports &#8212;</h5>
                        <h1 className='product-heading'>Collaborate to advance the esports.</h1>
                        <div className="product-space"></div>
                        <p className='product-large-text'>Through Wrecked Esports, gaming and esports professionals collaborate to advance the esports and gaming industries. The organization's primary goal is to assist aspiring gaming content creators to monetize their content through mentorship and brand integration, as well as to provide platforms and publishers with thetools to reach and retain audiences.</p>

                    </div>

                </div>

                <div className="productPage-Container2">
                    <img className='productImg2' src={productImage2} alt="" />
                    <div className="ProductPage-Container2">
                        <h5 className='product-subheading'>&#8212; Our Vision</h5>
                        <h1 className='product-heading'>An eco-system within the gaming industry.</h1>

                        <div className='large-text-container'>

                            <p className='product-large-text'>We strive to be leaders in Brand Collabrations for eSports industry and to build an eco-system within the gaming industry that bridges the gap between the creators and the Brands.</p>
                            <p className='product-large-text'>The vision of the company is particularly given importance to the development of gaming industry in India.</p>
                            <p className='product-large-text'>To provide a unique and most effective brand promotions with a strategic planning for each clients or brands through exclusive creators.</p>
                            <p className='product-large-text'>The effective growth rate to be maintained at 200% every financial year throughout the gaming industry.</p>
                        </div>
                    </div>
                </div>
                <div className="product-space"></div>
                <div className='productPage-Container3'>

                    <h5 className='product-subheading'>&#8212; The Opportunity &#8212;</h5>
                    <h1 className='product-heading'>Gaming is the fastest-growing and the most consumed form of entertainment
                        .</h1>

                    <div className="productPage-Container4">

                        <img src={image34} alt="" />
                        <p className='product-large-text'>According to the recently released report,
                            Online gaming grew by 28% in 2021 to have a
                            total revenue of Rs 101 Billion. <br />
                            Source:IGN India
                        </p>


                    </div>
                    <div className="productPage-Container4">

                        <img src={image495mn} alt="" />
                        <p className='product-large-text'>From 134M in 2012 to 359M in 2018,
                            Esports viewership has had an explosive
                            growth of 195%<br />
                            Source: Newzoo, Superdata.</p>


                    </div>
                    <div className="productPage-Container4">

                        <img src={image26} alt="" />
                        <p className='product-large-text'>I.E., 365 Million is the estimated number
                            of gamers in India in 2020<br />
                            Source: FICCI & EY,2020 REPORT</p>


                    </div>
                    <div className="productPage-Container4">

                        <img src={image1b} alt="" />
                        <p className='product-large-text'>From 134M in 2012 to 359M in 2018,
                            Esports viewership has had an explosive
                            growth of 195%<br />
                            Source: Newzoo, Superdata</p>


                    </div>
                </div>
                <div className="product-space"></div>
                <div className='productPage-Container5'>

                    <div className="productPage-Container6">
                        <h5 className='product-subheading'> &#8212; Why us ?</h5>

                        <h1 className='product-heading'>Gaming is the <span className='fast-text'>fastest-growing</span> and the <br /><span className='most-text'>most consumed </span>form of entertainment
                            . </h1>
                        <p className='product-large-text'>We give brands the value and the subtlenss it deserves for their business needs such as:
                        </p>

                        <div className="productPage-Container9">

                            <div className="productPage-Container7">

                                <img className='whyusImg' src={graph} alt="graph" />
                                <div className="productPage-Container8">

                                    <h2>Increasing userbase of brand</h2>
                                    <p className='product-large-text'>Increase your customer base by joining hands with us.
                                    </p>


                                </div>

                            </div>
                            <div className="productPage-Container7">

                                <img className='whyusImg' src={publicImg} alt="graph" />
                                <div className="productPage-Container8">

                                    <h2>Brand Awareness</h2>
                                    <p className='product-large-text'>Increase your brand awareness by joining hands with us.
                                    </p>


                                </div>

                            </div>

                        </div>
                        <div className="productPage-Container9">

                            <div className="productPage-Container7">

                                <img className='whyusImg' src={user} alt="graph" />
                                <div className="productPage-Container8">

                                    <h2>User Retention</h2>
                                    <p className='product-large-text'>Increase your customer base by joining hands with us.
                                    </p>


                                </div>

                            </div>
                            <div className="productPage-Container7">

                                <img className='whyusImg' src={boost} alt="graph" />
                                <div className="productPage-Container8">

                                    <h2>Boosting of Sales</h2>
                                    <p className='product-large-text'>Increase your boosting of sales base by joining hands with us.
                                    </p>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className="product-space"></div>




                </div>


            </div>
            <div className="footer">
                <PageFooter />
            </div>
        </React.Fragment>
    )
}
export default ProductPage;