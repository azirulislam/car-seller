import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h3>About context API</h3>
            <p>The React context is API is a way for React app to effectively produce global variable that can be passed around.It major solver of prop drilling.Context API is a React hook.It returns a consumer and provider.It can Store all data in parent component. </p>
            <h3>About semantic tag.</h3>
            <p>Semantic tag using is the more important in modern website.Header, nav, article, aside,section,footer is the main semantic tag.Using these tags makes a website very easily.Article tag wrap the all article and nav tag wrap the navbar in a website.At a result a developer can read the code very easily. </p>
        </div>
    );
};

export default Blogs;