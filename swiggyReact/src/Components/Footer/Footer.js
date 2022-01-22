import React from 'react'
import './Footer.css'

import Text from './Text/Text.js'
import cities,{companies,contacts,legals} from './Arrays.js'
import Image from '../Restaurants/Image/Image'
// import swiggyimg from '../../Images/Swiggy.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFacebookF} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faPinterest,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
   
    return (
        <footer>
            <div className="footerContainer">
                <div className="upperfooter">
                        <div className="container">
                            <p className="grey">COMPANY</p> 
                            <ul>
                                {
                                    companies.map((company,index)=>{

                                        return <Text txtcls="white" text={company}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className="grey">CONTACT</p>
                            <ul>
                                {
                                    contacts.map((contact,index)=>{
                                        
                                            return <Text txtcls="white" text={contact}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className="grey">LEGAL</p>
                            <ul>
                                {
                                    legals.map((legal,index)=>{
                                            return <Text txtcls="white" text={legal}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="imgdivfoot">
                            <Image src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" imgcls="appstorefoot"/>
                            <Image src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" imgcls="googleplayfoot"/>
                        </div>
                </div>
                <hr size="1"/>
                
                <p className="grey margn">WE DELIVER TO</p>
                <div className="middlefooter">
                    <div>
                        <ul>
                            {
                                cities[0].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="mrgnlft">
                            {
                                cities[1].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="mrgnlft">
                            {
                                cities[2].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="mrgnlft">
                            {
                                cities[3].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <hr size="1"/>

                <div className="lowerfooter">
                    <Image src={swiggyimg} imgcls="swigyimg"/>
                    <p className="copy">© 2022 Swiggy</p>
                    <div className="footicon">
                        <FontAwesomeIcon icon={faFacebookF} color="white" size="lg" className="icon"/>
                        <FontAwesomeIcon icon={faPinterest} color="white" size="lg" className="icon"/>
                        <FontAwesomeIcon icon={faInstagram} color="white" size="lg" className="icon"/>
                        <FontAwesomeIcon icon={faTwitter} color="white" size="lg" className="icon"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
