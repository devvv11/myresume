import './Eduction.css'
import Header from '../Header/Header'
function Education(){
        return(
            <>
                <Header />
                    <main className='main-container'>
                        <div className="Card-1">
                                <h2>Passing Year : 2019</h2>
                                <p>10th</p><br />
                                <p>School : Sir C.J.N.Z.Madresha.High School Navsari</p> <br />
                                <p>Percentage : 49%</p> <br />
                        </div>

                        <div className="Card-1">
                                <h2>Passing Year : 2021</h2>
                                <p>12th</p><br />
                                <p>School : Sir C.J.N.Z.Madresha.High School Navsari</p> <br />
                                <p>Percentage : 55%</p> <br />
                        </div>

                        <div className="Card-1">
                                <h2>Year : 2022-25</h2>
                                <p>B.C.A</p><br />
                                <p>College : S.S Agrawal College Navsari </p> <br />
                                <p>YGPA : 7.43 ( highest obtained )</p> <br />
                        </div>
                    </main>
            
            </>
        )

}
export default Education