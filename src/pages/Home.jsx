import Story from "../components/Story"
 const Plate = () => {
  return (
    <div className="plate">
      <figure><img src="https://i.ytimg.com/vi/yvs-M7yDfwQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqPYflcNgMPpIcXCYxtoK9euL4GA" alt="" /></figure>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum et quia </p>

    </div>
  )
}

const Block = () => {
  return (
    <div className="block">
          <figure><img src="https://i.ytimg.com/vi/yvs-M7yDfwQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqPYflcNgMPpIcXCYxtoK9euL4GA" alt="" /></figure>
          <p className="sheading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error?</p>
          <p className="time">Music | 2 hours ago</p>
        </div>
  )
}

const Home = () => {
  return (
    <div className='home'>
      <div className="section">
        <h2>Breaking News</h2>
        <div className="container">
          <Block/>        
          <Block/>        
          <Block/>        
          <Block/>        
        </div>
      </div>
      <div className="story-section section">
        <h2>Web Stories</h2>
        <div className="webstories">
          <Story/>
          <Story/>
          <Story/>
        </div>
      </div>
      <div className="section">
        <h2>Headlines</h2>
        <div className="plates">
          <Plate/>
          <Plate/>
          <Plate/>
        </div>

      </div>
    </div>
  )
}

export default Home