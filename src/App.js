import React from 'react';
import ReactDOM from 'react-dom';

//아폴로 클라이언트 라이브러리 임포트
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//API URI 및 캐시 설정
const uri = process.env.API_URI ;
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools : true
});

//글로벌 스타일
import GlobalStyle from './components/GlobalStyle';

//라우팅
import Pages from '/pages';

const App = () => {
    return (
        <ApolloProvider client = {client}>
            <GlobalStyle />
            <Pages />
        </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
