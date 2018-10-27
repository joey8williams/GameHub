import App, {Container} from 'next/app';
import Page from '../components/Page/Page';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDoubleLeft);

class MyApp extends App{
    render(){
        const {Component} = this.props;

        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }

}
export default MyApp;