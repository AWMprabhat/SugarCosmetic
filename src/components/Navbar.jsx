
import React from 'react'
import './nav.css';
import SearchBar from './shivam/SearchBar'

import { FaUser } from 'react-icons/fa'

import { Button, Icon, Select, Stack,Text} from '@chakra-ui/react'

const Navbar = ({flow,setflow,active,setActive,hadleclick, HandleClose,user,setuser,setShow,setShowSearchResult,setSearchResult,size }) => {

  return (
    <div id='nav'>
        <div className='mainBox' >
            {/* logo gif */}

            <div className='gif' onClick={()=>setShowSearchResult(false)}>

<img src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif" alt="###" />
            </div>
            {/* serch box */}
            {/* <div className='search'>
                <input className='inputSearch' type="text" />
            <button className='buttonSearch'>search</button>
             </div> */}
              <SearchBar setShowSearchResult={setShowSearchResult} setSearchResult={setSearchResult}/>
            {/* login */}
         
               
            {!flow ? (
        <Button className='login' onClick={()=>hadleclick()}>
          <Text _hover={{ textDecoration: "underline" }}>Register</Text>/
          <Text _hover={{ textDecoration: "underline" }}>Login</Text>
        </Button>
      ):(
        <Stack align="center" direction="row">
          <Icon as={FaUser} />
          <Select width="200px" onChange={(e)=>{if(e.target.value==="Logout")setflow(false)}}>
            <option value={user}>Hi {user}</option>
            <option value="Logout">Logout</option>
          </Select>
        </Stack>
      )
      }
      
            <div className='icon'>
                {/* wish list */}
                <a href="###">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>
                </a>
{/* cart */}


    <div className="cart" onClick={()=> setShow(true)}>
  <span>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
  </span>
  <span>
    {size}
  </span>
</div>


{/* discount */}
<a href="###">
    <img src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" alt="###" />
</a>
{/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-patch-minus-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
</svg> */}
            </div>
        </div>
        <div className='lowrBox'>
{/* filtr */}
<div className='hoverBox'>
    {/* <h3>MAKEUP</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">MAKEUP 
</button>
<div class="dropdown-content">
<a href="###">LIPS</a>
<a href="###">FACE</a>
<a href="###">EYE</a>
</div> </div> </div> 
    {/* <h3>BRUSHES</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">BRUSHES 
</button>
<div class="dropdown-content">
<a href="###">FACE BRUSHES</a>
<a href="###">EYE BRUSHES</a>
</div> </div> </div>
    {/* <h3>SKINCARE</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">SKINCARE 
</button>
<div class="dropdown-content">
<a href="###"> MOISTURIZERS</a>
<a href="###">SUNSCREEN</a>
<a href="###">SETTING MISTS</a>
<a href="###">COFFEE CULTURE RANGE</a>
<a href="###">SHEET MASK COMBO</a>
<a href="###">CITRUS GOT REAL RANGE</a>
<a href="###">AQUAHOLIC RANGE</a>
<a href="###">MASKS</a>
</div> </div> </div>
    {/* <h3>TRENDING</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">TRENDING 
</button>
<div class="dropdown-content">
<a href="###">SUGER MARCH STATION</a>
<a href="###">MAKEUP KITS</a>
<a href="###">BESTSELLERS</a>
<a href="###">SUGAR SETS</a>
<a href="###">VELUE SETS</a>
</div> </div> </div>
    {/* <h3>BLOG</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">BLOG 
</button>
<div class="dropdown-content">
<a href="###">FEATURED</a>
<a href="###">MACKUP</a>
<a href="###">SKINCARE</a>
</div> </div> </div>
    {/* <h3>OFFERS</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
                              {/* orignal link usewd */}
<button class="dropbtn"><a href="https://in.sugarcosmetics.com/pages/offer"> OFFERS </a>    
</button>
</div> </div>
    {/* <h3>STORES</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
                                 {/* orignal link usewd */}
<button class="dropbtn"><a href="https://in.sugarcosmetics.com/stores"> STORES </a>    
</button>
</div> </div>
</div>
        </div>
 </div>
  )
}
export default Navbar;




