import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footermain'>
            <div className='footerleftside'>
                <div>
                    <img src="/Images/Etherbottom.svg" alt="Logo" />
                </div>
                <p className='managed'>Managed by Artificial Intelligence</p>
                <div className='socialmediaimages'>
                    <img src="/Images/Yt.svg" alt="Logo" />
                    <img src="/Images/twitter.svg" alt="Logo" />
                    <img src="/Images/git.svg" alt="Logo" />
                    <img src="/Images/monkey.svg" alt="Logo" />
                    <img src="/Images/github.svg" alt="Logo" />
                    <img src="/Images/telegram.svg" alt="Logo" />
                </div>
            </div>

            <div className='footerrightside'>
                <div className='etherfirstdiv'>
                    <p className='etherfooterheading'>Ether</p>
                    <p className='etherfirstfooterunder'>Grants</p>
                    <p className='etherfooterunder'>Generator</p>
                    <p className='etherfooterunder'>Careers</p>
                    <p className='etherfooterunder'>Disclaimer</p>
                </div>
                <div className='connectedsecdiv'>
                    <p className='etherfooterheading'>Get Connected</p>
                    <p className='etherfirstfooterunder'>Services</p>
                    <p className='etherfooterunder'>Blog</p>
                    <p className='etherfooterunder'>Newsletter</p>
               
                </div>
            </div>
        </div>
    )
}

export default Footer
