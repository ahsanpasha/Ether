import React from 'react'
import './Second.css'
import "./TopSection.css";
const Second = () => {
    return (
        <div className='mainsecond'>
            <div className='logoandtext'>
                <div>
                    <p className='poweringtext'>Powering tools and integrations from companies all around the world</p>
                </div>
                <div className='alllogos'>
                    <img src="/Images/brave.svg" alt="Logo" />
                    <img src="/Images/circlelogo.svg" alt="Logo" />
                    <img src="/Images/discord.svg" alt="Logo" />
                    <img src="/Images/Google.svg" alt="Logo" />
                    <img src="/Images/jump.svg" alt="Logo" />
                    <img src="/Images/loola.svg" alt="Logo" />
                    <img src="/Images/magic.svg" alt="Logo" />
                </div>

            </div>


            <div className='boxesmain'>

                <div className='firstblackbox'>
                    <div className='firstboxwithbtns'>
                        <div className='firsttextofbox'>
                            <p className='automated'>Automated Image Synthesis and Design</p>
                            <p className='automatedsmall'>With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency.</p>
                        </div>
                        <div className='buttondivthree'>
                            <button className='btndesign'><img src="/Images/Youtube.svg" alt="Youtube" className='btnimg' /></button>
                            <button className='btndesign'><img src="/Images/Podcast.svg" alt="Podcast" className='btnimg' /></button>

                        </div>
                    </div>
                </div>

                <div className='secblackbox'>
                    <div className='firstboxwithbtns'>
                        <div className='firsttextofsecbox'>
                            <p className='create'>Create stunning visual in seconds</p>
                            <p className='createsmall'>Generating innovative ideas is a crucial aspect of any creative endeavor. AI tools can help spark inspiration by analyzing vast amounts of data</p>
                        </div>
                        <div className='buttomininput'>
                            <div>
                            <input className='Email-input' placeholder='Write Prompt to generate image' /></div>
                            <div>
                            <button className='buttomininputdesign'>Generate</button></div>
                        </div>
                        <button className='buttomininputdesignnone'>Generate</button>

                    </div>
                </div>

            </div>


            <div className='maincommunity'>
                <div>
                    <p className='community'>Join a community<br /> of millions.</p>
                </div>

                <div className='accountsnumber'>
                    <div>
                        <p className='plusnumber'>10.2M+</p>
                        <p className='plusinner'>ACTIVE ACCOUNTS</p>
                    </div>

                    <div>
                        <p className='plusnumber'>300+</p>
                        <p className='plusinner'>PROJECTS</p>
                    </div>

                    <div>
                        <p className='plusnumber'>1000+</p>
                        <p className='plusinner'>TOPICS</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Second
