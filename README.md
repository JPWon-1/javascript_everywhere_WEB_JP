# Project Diary

## 2021-05-29 : 리액트를 오랜만에 써보았는데, 기초적인것만 다루어 보았지만 정말이지 하나도 기억이 안나서 처음부터 다시 시작하는 기분이었다.
- 우선 npm library들을 버젼을 맞추어 주었는데 
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

## 2021-05-31
- 아폴로 클라이언트를 셋업해서 리액트 애플리케이션과 함께 작동하고 여러 그래프QL쿼리를 UI에 통합하였다.

## 2021-06-03
- 그래프 QL API를 사용하여 웹 인증 시스템을 구축. 브라우저에 JWT를 저장하고, 요청마다 토큰을 전송하여 애플리케이션 상태를 추적할 수 있게 만들었다.

## 2021-06-05
- 회원가입과 로그인을 구현하였는데...점점 책이 설명이 짧아지고 오타가 나오고 기존에 만들어놓은 소스와 연동이 안되는 사태까지 생겼다. ( 기존 api 구현할때 로그인은 username, email, password 로 짯는데 web에서는 넘기는 파라미터가 email, password 뿐이라던지.. ) 점점 이 책을 내가 하는게 의미가 있나 싶다.
225/386 페이지까지 온 상태로..포기하기도 애매하지만....
이 쯤에서 MongoDB 와 React 그리고 GraphQL을 맛봤다는 것으로 만족해야하나? 라는 생각이 든다.
