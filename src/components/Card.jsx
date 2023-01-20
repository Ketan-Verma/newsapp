import {Link} from "react-router-dom"
const Card = () => {
  return (
    <Link to={`/news`}>
    <div className="plate">
            <figure><img src="https://i.ytimg.com/vi/ugaFRvwqy0s/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCFg-jrNyEM4R1z_nD0wBfU6FxwmA" alt="" /></figure> 
            <p  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laborum id et i</p>
             
    </div> 
    </Link>
  )
}

export default Card