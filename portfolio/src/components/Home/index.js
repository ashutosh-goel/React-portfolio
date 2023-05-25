import './index.scss'
import pic from '../../assets/img/pic.jpeg'

const Home = () => {

  return (
    <>
      <div className="container home-page">
        <img className='profile-pic' img src={pic} alt='dp' />
        <div className="text-zone"> 
          <h1>
            Hi,
            <br/>
            I'm <span className='Name'>Ashutosh Goel</span>
          </h1>
          <h2>Freshman at <strong>IIT Kanpur</strong></h2>
          <p>I am a BS ECO student passionate about <br/> <strong>Stock Trading</strong> and <strong>Web Development</strong></p>
        </div>
      </div>
    </>
  )
}

export default Home