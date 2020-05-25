import React from 'react';
import Card from './Card';

import aboutme from '../assets/images/thebiopic.jpg';
import resume from '../assets/images/resume.jpg';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'About Me',
                    subTitle: 'Work and Stuff!',
                    imgSrc: aboutme,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Resume',
                    subTitle: 'Work and Stuff!',
                    imgSrc: resume,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'See my projects!',
                    imgSrc: github,
                    link: 'https://github.com/alvivanco85',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Linkedin',
                    subTitle: 'Connect with me!',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/aldo-vibanco-194b71191/',
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