import App, {Container} from 'next/app';
import Page from '../components/Page/Page';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';
import {ApolloProvider} from 'react-apollo';
import withData from '../lib/withData';

library.add(faAngleDoubleLeft);

class MyApp extends App{
    static async getInitialProps({Component, ctx}){
        let pageProps = {};
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.query = ctx.query;
        return {pageProps};
    }

    render(){

        const {Component, apollo, pageProps} = this.props;

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }

}
export default withData(MyApp);