import React, { Component } from 'react';
import VideoList from '../videos/videoList/List';
import ArticleList from '../videos/articleList/List';

class Index extends Component {
    render() {
        return (
            <div>
                <VideoList></VideoList>
                <ArticleList></ArticleList>
                
            </div>
        )
    }
}
export default Index;
