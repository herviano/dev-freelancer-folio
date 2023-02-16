import React from 'react';
import Carousel from '../components/Carousel';
import Pages from '../components/Pages';
import NewsSectionPage from '../sections/NewsSectionPage';

function News() {
    return (
        <Pages title="Nouveautés">
            <NewsSectionPage/>
        </Pages>
    );
}

export default News;