import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client'

import Button from '../components/Button';
import NoteFeed from '../components/NoteFeed';


// 변수로 저장한 그래프QL 쿼리
const GET_NOTES = gql`
    query noteFeed($cursor: String) {
        noteFeed(cursor: $cursor){
            cursor
            hasNextPage
            notes{
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
}
`;


const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>

    return (
        <React.Fragment>
            <NoteFeed notes={data.noteFeed.notes} />
            {/* hasNextPage가 true면 Load More 표시 */}
            {/* onClick 클릭하면 fetchMore 메서드를 사용하여 새 쿼리를 실행하고 그 과정에서 이전 쿼리에서 반환된 cursor값을 전달한다.
                반환값을 받으면 updateQuery를 실행해서 cursor와 hasNextPage값을 업데이트하고 결과를 단일 뱅렬로 결합한다.
                __typename은 쿼리의 이름이며 아폴로의 결과에 포함된다.
                이 변경을 통해 노트 피드에서 모든 노트를 볼 수 있다.
            */}
            {data.noteFeed.hasNextPage && (
                <Button
                    onClick={() =>
                        fetchMore({
                            variables: {
                                cursor: data.noteFeed.cursor
                            },
                            updateQuery: (previousResult, { fetchMoreResult }) => {
                                return {
                                    noteFeed: {
                                        cursor: fetchMoreResult.noteFeed.cursor,
                                        hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                                        //새 결과를 기존 결과와 결합
                                        notes: [
                                            ...previousResult.noteFeed.notes,
                                            ...fetchMoreResult.noteFeed.notes
                                        ],
                                        __typename: 'noteFeed'
                                    }
                                };
                            }
                        })
                    }
                >
                    Load More
                </Button>
            )}
        </React.Fragment>
    )
};

export default Home;
