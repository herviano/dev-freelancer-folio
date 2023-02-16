import { Typography } from '@mui/material';
import React from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import BlogOverviewCard from './BlogOverviewCard';
import ImageComponent from './ImageComponent';
import NewsCard from './NewsCard';

interface Props{
    settings? : {
        dots:boolean,
        infinite:boolean,
        slidesToShow:number,
        slidesToScroll:number,
        autoplay:boolean,
        autoplaySpeed:number,
        pauseOnHover:boolean,
        responsive? : Array<ResponsiveObject>
    }
}

function BlogCarousel({settings = {dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, pauseOnHover: false, responsive:[{breakpoint:600, settings:{slidesToShow:1, slidesToScroll:2, infinite:true, dots:true, initialSlide:2}},{breakpoint:1024, settings:{slidesToShow: 2,slidesToScroll: 2,infinite: true,dots: true}}]}}: Props) {
    return (
        <div>
            <Slider {...settings}>
                <div>
                    {/* <NewsCard/> */}
                    {/* <ImageComponent image='images/two.jpg'  /> */}
                    <BlogOverviewCard/>
                </div>
                <div>
                    {/* <NewsCard/> */}
                    {/* <ImageComponent image='images/two.jpg'  /> */}
                    <BlogOverviewCard/>
                </div>
                <div>
                    {/* <NewsCard/> */}
                    {/* <ImageComponent image='images/two.jpg'  /> */}
                    <BlogOverviewCard/>
                </div>
                <div>
                    {/* <NewsCard/> */}
                    {/* <ImageComponent image='images/two.jpg'  /> */}
                    <BlogOverviewCard/>
                </div>
                <div>
                    {/* <NewsCard/> */}
                    {/* <ImageComponent image='images/two.jpg'  /> */}
                    <BlogOverviewCard/>
                </div>
                <div>
                    {/* <NewsCard/> */}
                    {/* <ImageComponent image='images/two.jpg'  /> */}
                    <BlogOverviewCard/>
                </div>
                <div>
                    {/* <NewsCard/> */}
                    {/* <ImageComponent image='images/two.jpg'  /> */}
                    <BlogOverviewCard/>
                </div>
            </Slider>
        </div>
    );
}

export default BlogCarousel;