import './Home.css';

const Home = () => {
           return (
        <div>
            <h2>Wellcome to BMW CAR Market</h2>
            <div  className='container'>
            <div className='car-image'><img src="bmw.jpg" alt="" /></div>
            <div>
                <p>BMW, in full Bayerische Motoren Werke AG, German automaker noted for quality sports sedans and motorcycles. Headquarters are in Munich.It originated in 1916 as Bayerische Flugzeug-Werke, a builder of aircraft engines, but assumed the name Bayerische Motoren Werke in July 1917 and began producing motorcycles in the 1920s. </p>

             <button className='car-btn'>Know-more</button>
            </div>
            </div>
                     <button className='btn-all'>See-all</button>
        </div>
    );
};

export default Home;