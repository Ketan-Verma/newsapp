import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Logo from './components/Logo'
import Explore from './pages/Explore'

let data = [
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Politics",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Politics",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Politics",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Politics",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Politics",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Entertainment",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Entertainment",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Entertainment",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Entertainment",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Entertainment",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Entertainment",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Health",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Health",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Health",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Health",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Health",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Finance",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Finance",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Finance",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Finance",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Finance",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
  {
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Sports",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },{
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Sports",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },{
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Sports",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },{
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Sports",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },{
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Sports",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },{
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Sports",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },{
    "title":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet`,
    "author":`Ketan Verma`,
    "date":"23/10/22",
    "category":"Sports",
    "article":`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas nam officia adipisci neque sed quo dolore molestias saepe quia ex sint, dignissimos accusamus excepturi labore aliquam! Dolore, aspernatur recusandae.`
  },
]
const App = () => {
  return (
    <Router>
      <Logo/>
      <Navbar/>
    <div className='site'>
      <Routes>
          <Route index element={<Home data ={data} />} />
          <Route path='/explore' element={<Explore data ={data}/>}/>
          <Route path="/news" element={<News />} />
          <Route path="/*" element={<Home />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App