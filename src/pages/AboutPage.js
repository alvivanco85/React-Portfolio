import React from 'react';
import Jumbo from '../components/Jumbo'
import Content from '../components/Content'

function AboutPage(props) {

    return (
        <div>
            <Jumbo title={props.title}/>
            <Content>
               <p className='a-text'>Hello, my name is Aldo Vibanco and I am a full stack web develeoper.</p> 

                <p className='a-text'>I am a passionate problem solver with more than 15 years of customer service
                experience. I am always willing to go that extra mile to help people feel 100%
                satisfied with the service they receive. I love to help and always do so with a smile. 
                I am fluent in Spanish but also in interpersonal skills.
                </p> 

                <p className='a-text'>My passion for learning new things has always been a driving force in making changes in life and 
                has led me down the path of webdevelopment. Thanks to my change in careers and the knowledge I gained,
                I can proudly say that I am well-versed in Html, Css, Javascript, NOde JS, SQL, MongoDB, Express JS and 
                currently learning REACT. 
                </p>
               
                <p className='a-text'>
                "Because everything is always changing, so should you!" is my motto.
                </p>
            </Content>
        </div>
    )

}

export default AboutPage;