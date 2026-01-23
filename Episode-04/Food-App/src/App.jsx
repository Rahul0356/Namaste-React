import React from 'react'
import Header from './components/Header'
import Body from './components/Body'


/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */


const App = () => {
  
  return (
    <div className='App'>
<Header/>
<Body/>

    </div>
  )
}

export default App