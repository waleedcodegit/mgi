import React, { Component } from 'react';
import VideoList from '../articles/videoList/List';
import ArticleList from '../articles/articleList/List';

class Index extends Component {
    render() {
        return (
            <div>
                <ArticleList></ArticleList>
                <VideoList></VideoList>
            </div>
        )
    }
}
export default Index;
