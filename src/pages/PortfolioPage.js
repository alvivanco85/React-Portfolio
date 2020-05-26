import React from 'react';

import Jumbo from '../components/Jumbo'
import Projects from '../components/Projects';


function PortfolioPage(props) {

    return (
            <div> 
                <Jumbo title={props.title} subTitle={props.subTitle} text={props.text}/>
                <Projects/>
            </div>
    )

}

export default PortfolioPage;