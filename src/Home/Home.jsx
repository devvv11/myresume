import Header from "../Header/Header";
import './Home.css';
import img from './img.jpeg' ;4


function Home(){
    return (
        <>
        <Header/>
        <main>
        <div className="container">
              <h1>  Hi there , i am Dev Jogi </h1>
              <h2> i am a Web Devloper</h2>
             
             <button className="btn"> Explore More</button>
        </div>

        <div className="container-2">
                    <img  className="profileimage" src={img} height={400}></img>
                </div>
                </main>
        </>
    )
}

export default Home