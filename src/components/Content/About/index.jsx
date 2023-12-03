import React, { useEffect } from 'react';
import 'assets/scss/Content/About/about.css'
import about from 'assets/images/banner-about.png'
import about1 from 'assets/images/banner-about1.png'
import about2 from 'assets/images/banner-about2.png'
import about3 from 'assets/images/banner-about3.png'
import GAbout from 'assets/images/GAbout.png'
import appAbout from 'assets/images/appAbout.png'
const Index = () => {
    useEffect(() => {
        document.title = 'About us'
    }, []);
    return (
        <div>
            <div id="SECTION516" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container">
                    <div id="BOX476" className="ladi-element">
                        <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="IMAGE911" className="ladi-element">
                        <div className="ladi-image">
                            <div className="ladi-image-background" />
                        </div>
                    </div>
                    <div id="HEADLINE512" className="ladi-element">
                        <h3 className="ladi-headline">
                            About KTech<br />
                        </h3>
                    </div>
                    <div id="PARAGRAPH544" className="ladi-element">
                        <div className="ladi-paragraph">
                            KTech is a brand born from a gamer's dream, developed by a collective of gamers to serve the Vietnamese gaming community.
                            <br />
                            <br />
                            KTech's consulting team is not simply a sales staff, we are also game lovers with the desire to help people with similar interests get the right system and gear.
                            <br />
                            <br />
                            Customer satisfaction is the driving force that helps KTech constantly improve, bringing more and more positive values to the community.&nbsp; &nbsp;<br />
                        </div>
                    </div>
                    <div id="PARAGRAPH545" className="ladi-element">
                        <div className="ladi-paragraph">
                            Today's customers are future teammates! Together we spread positive values ​​to the gaming community and all technology lovers in Vietnam.”<br />
                        </div>
                    </div>
                    <div id="IMAGE910" className="ladi-element">
                        <div className="ladi-image">
                            <div className="ladi-image-background" />
                        </div>
                    </div>
                    <div id="IMAGE865" className="ladi-element">
                        <div className="ladi-image">
                            <div className="ladi-image-background" />
                        </div>
                    </div>
                    <div id="IMAGE864" className="ladi-element">
                        <div className="ladi-image">
                            <div className="ladi-image-background" />
                        </div>
                    </div>
                    <div id="IMAGE863" className="ladi-element">
                        <div className="ladi-image">
                            <div className="ladi-image-background" />
                        </div>
                    </div>
                    <div id="HEADLINE514" className="ladi-element">
                        <h3 className="ladi-headline">
                            Mr. Lân<br />
                        </h3>
                    </div>
                    <div id="HEADLINE515" className="ladi-element">
                        <h3 className="ladi-headline">
                            KTech Founder<br />
                        </h3>
                    </div>
                </div>
            </div>
            <div id='about-content'>
                <div id="aboutImage" className='row'>
                    <div className='col-md-6' style={{ padding: 0 }}>
                        <div className='col-md-12' style={{ padding: 0 }}>
                            <img src={about} alt='' style={{ width: '50%', padding: 20 }} />
                            <img src={about1} alt='' style={{ width: '50%', padding: 20 }} />
                        </div>
                    </div>
                    <div className='col-md-6' style={{ padding: 0 }}>
                        <div className='col-md-12' style={{ padding: 0 }}>
                            <img src={about2} alt='' style={{ width: '50%', padding: 20 }} />
                            <img src={about3} alt='' style={{ width: '50%', padding: 20 }} />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='title-method-about'>
                            Comprehensive shopping experience
                        </div>
                    </div>
                    <div className='col-md-6' style={{ padding: 40 }}>
                        <img src={GAbout} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='col-md-6' style={{ padding: 40 }}>
                        <img src={appAbout} alt='' style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
