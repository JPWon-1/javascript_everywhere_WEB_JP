import React, { useEffect } from 'react';

import Button from '../components/Button';

const Home = () => {
    useEffect(() => {
        //문서 제목 업데이트
        document.title = 'Home - Notedly';
    });
    return (
        <div>
            <p>This is the home page</p>
            <Button>Click Me!</Button>
        </div>
    );
};

export default Home;
