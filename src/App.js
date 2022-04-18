import React, {useState} from "react"
import Category from './Category.js'
import Item from './Item.js'
import data from './data.js'

const uniqueCategories = ['all', ...new Set(data.map(item => item.category))]
console.log(uniqueCategories);

function App() {
  const [menu, setMenu] = useState(data)
  const [categories, _] = useState([...uniqueCategories])
  
  const filterCategory = (category) => {
    console.log(category)
    if(category === 'all') {
        setMenu(data)
    } else {
        setMenu(data.filter(item => item.category === category))
    }
  }

  return (
    <main className="App">
      <header>
        <h2 className="title">Our Menu</h2>
      </header>
      <section className="categories">
        {categories.map((category, index) => {
          return <Category key={index} category={category} filterCategory={filterCategory} />
        })}
        
      </section>
      <section className="menu">
        {menu.map(item => {
          return <Item key={item.id} {...item} />
        })}        
      </section>   
    </main>
  )
}

export default App
