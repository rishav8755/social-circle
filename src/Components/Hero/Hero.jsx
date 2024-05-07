import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Impact of Online Learning on Student Engagement and Academic Performance</h1>
        <p>Education can be thought of as the transmission of the values and accumulated knowledge of a society. In this sense, it is equivalent to what social scientists term socialization or enculturation. Children—whether conceived among New Guinea tribespeople, the Renaissance Florentines, or the middle classes of Manhattan—are born without culture. </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

