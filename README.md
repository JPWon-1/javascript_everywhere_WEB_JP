# Project Diary

- 2021-05-29 : 리액트를 오랜만에 써보았는데, 기초적인것만 다루어 보았지만 정말이지 하나도 기억이 안나서 처음부터 다시 시작하는 기분이었다.
우선 npm library들을 버젼을 맞추어 주었는데 
`DevTools warning: SharedArrayBuffer will require cross-origin isolation`
얘 는 왜 사라지지 않는것인가.
- 글로벌 스타일 , css-in-js 방식으로 스타일들을 적용해주었다.
   - src\components 하위 폴더에 Button, Header, Layout, Navigation 을 만들었다
   - GlobalStyle을 만들어 프로젝트 전반에 사용 될 css를 재정의 해주었다
        
~~~
component의 앞글자는 대문자로 만들어야 한다. 이유는 HTML 요소와의 충돌을 피하기 위해서다.
~~~

- 각 페이지별 이동을 위해
`import { BrowserRouter as Router, Route } from 'react-router-dom';`
를 해주었고 사용은 밑에와 같이

```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Pages = props => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/mynotes" component={MyNotes} />
                <Route path="/favorites" component={Favorites} />
            </Layout>
        </Router>
    );
};
```
처럼 썻다.
