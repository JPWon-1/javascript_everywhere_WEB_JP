import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Note from '../components/Note';

const GET_NOTE = gql`
    query note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author{
                username
                id
                avatar
            }
        }
    }
`;

//props(속성) 객체를 컴포넌트에 전달하기 위해서는 리액트 라우터를 통한 match 속성이 포함된다.
//이 속성에는 경로를 URL에 일치시키는 방법에 대한 정보가 포함되기 때문에, 이 속성을 전달하면 match.params를 통해 URL 파라미터에 접근할 수 있다.
const NotePage = props => {
    const id = props.match.params.id;// URL의 ID를 변수로 저장
    //훅을 쿼리하며 ID값을 변수로 전달
    const {loading, error, data} = useQuery(GET_NOTE,{variables:{id}});
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error! Note not found</p>;

    return <Note note={data.note} />;
};

export default NotePage;