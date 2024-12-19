import Header from "../Header/Header"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './skills.css';
function Skills(){

    return(
        <>
            <Header />
            <div className="main">
            <div className="con-1">
                <h2>HTML</h2>
                <div className="con">
                <div className=" s html">
                    70%
                </div>
                
            </div>
            </div>
        
            <div className="con-1">
                <h2>CSS</h2>
                <div className=" s css">
                    70%
                </div>
            </div>

            <div className="con-1">
                <h2>REACT</h2>
                <div className="s re">
                    40%
                </div>
            </div>

            <div className="con-1">
                <h2>JAVASCRIPT</h2>
                <div className="s js">
                    20%
                </div>
            </div>

            <div className="con-1">
                <h2>EXPRESS JS</h2>
                <div className="s ejs">
                    20%
                </div>
            </div>
        </div>
        </>

    )
}

export default Skills