import React from 'react';
import Card from './Card';

import muse from '../assets/images/MuSe.jpg';
import passwordgen from '../assets/images/passwordgenerator.jpg'
import dailyplan from '../assets/images/daily-planner.jpg';
import weather from '../assets/images/Weather-Dashboard.jpg';
import portfolio from '../assets/images/portfolio.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Muse Music Seach Engine',
                    subTitle: 'App',
                    imgSrc: muse,
                    link: 'https://alvivanco85.github.io/MuSe/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Password Generator',
                    subTitle: 'App',
                    imgSrc: passwordgen,
                    link: 'https://alvivanco85.github.io/password-generator/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Daily Planner',
                    subTitle: 'App',
                    imgSrc: dailyplan,
                    link: 'https://alvivanco85.github.io/Day-Planner/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Weahter Dashboard',
                    subTitle: 'App',
                    imgSrc: weather,
                    link: 'https://alvivanco85.github.io/Weather-Dashboard/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Portfolio',
                    subTitle: 'App',
                    imgSrc: portfolio,
                    link: 'https://alvivanco85.github.io/Portfolio/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;