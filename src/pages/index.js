import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 공유 레이아웃 컴포넌트 임포트
import Layout from '../components/Layout';
// 라우팅 임포트
import Home from './home';
import MyNotes from './myNotes';
import NotePage from './note';
import Favorites from './favorites';

//signUp 경로 임포트
import SignUp from './signUp';


//라우팅 정의
const Pages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/myNotes" component={MyNotes} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/note/:id" component={NotePage} />
            </Layout>
        </Router>
    );
};

export default Pages;