

import { Slider } from "./Slider"
import { Slider2 } from "./slider2"
import { Slider4 } from "./Slider4"
import React from 'react'
import list from "../../data"
import Carousel from 'react-grid-carousel'
// import { Slider3 } from "./Slider3"
import "./Homepage.css"
import styled from "styled-components"
const HomePage = ({playMovie,stopMovie, handleClick}) => {
   const StyleRegisterContainer=styled.div`
     @media (min-width:375px) and (max-width:667px)
    { 

  
//   *{
//     background-color: black;
// }
  .ytp-cued-thumbnail-overlay-image {
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 32% !important;
    height: 83%;
    position: absolute;
}
 
   .cTPVlv * {
    background-color: #f5f5f5;
   


 } 
//  .fQSOLW * {
//     background-color: black !important;
    
// }

.hot-deals{
  text-align: center;
 display: grid;
 grid-template-columns: repeat(1,1fr);


}
.this-that{
  text-align: center;
 display: grid;
 grid-template-columns: repeat(1,1fr);


}
.hot-deal1{
  text-align: center;
  display: grid;
  grid-template-columns: repeat(1,1fr);
}

 .referimg {
  height: 326px;
  width: 968px;
  margin: 15px 13px 1px -49px;
}
.ytp-cued-thumbnail-overlay-image {
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 34% !important;
  height: 100%;
  position: absolute;
}

.quick{
  font-size: 17px;
}
.flexit figcaption {
  position: absolute;
  bottom: 15px;
  font-size: 6px;
  left: 85px;
  background: none;
}
  } 

 `
  return (
   
    <>

      <StyleRegisterContainer className="body-div">
  
      <Slider/>

     <div ><h1 className="h1-tag-div quick">REFER YOUR FRIENDS</h1></div>
  
     <img  className="referimg"src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg" alt="sugar.png"/>
     <div ><h1 className="h1-tag-div quick" >AIR KISS POWDER LIPSTICK</h1></div>
    
     <iframe  className="youtubefix"  src="https://www.youtube.com/embed/_TTJmiTiiOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
     <div class="fourth_box">
            <h2 className="quick">BESTSELLERS</h2>
           <div className="boxbest">
           <Carousel cols={4} rows={1} gap={5} loop
            >
     {list.map((item) => {
         return(
          <Carousel.Item>
            <div className="flexit" key={item.id}>
              <img className="imagefix" src={item.img} alt="abc" />
              <h3>{item.title}</h3>
              <p className="ptagfix">₹ {item.price}</p>
              <button className="btnfix" onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
          </Carousel.Item>
              )
      }
      )}
      {/* ... */}
    </Carousel>
           </div>
        </div>


     <div ><h1 className="h1-tag-div quick marginfix">QUICK BEAUTY TIPS WITH SUGAR</h1></div>
     <Slider2/>
     <div ><h1 className="h1-tag-div quick" >HOT DEALS</h1></div>
     <div className="hot-deals">
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/b6b3cb0a-2e6f-4fe9-99cc-ae327336040a.jpg" alt="sugar.png" />
        <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg" alt="sugar.png"/>
        <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg" alt="sugar.png"/>
     </div>
     <div ><h1 className="h1-tag-div quick" >NEWLY LAUNCHED</h1></div>
     {/* <img src="https://d32baadbbpueqt.cloudfront.net/55b14ff1-ff6e-4af7-bbb6-9dbe8771037f.jpg" alt="ultimate.png"/> */}
     <Slider4/>
{/* HERE */}

<div class="fourth_box">
            <h2 className="quick">SUGAR STREAMING</h2>
           <div className="boxbest">

           <Carousel  cols={5} rows={1} gap={5} loop 
            >
             
              <Carousel.Item    >
      <figure className="flexit">
  
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/13/1655117515-auwlnygr/watermarked/540/7dd51bb6b9d044ee9920301f4573d9261.mp4'
            poster='https://cdn1.fireworktv.com/assets/default_event_trailer.jpg'
            preload='none'
            autoplay
            muted
            loop/>
<figcaption className="fig">5 minute office<br/> makeup look kaise<br/> karte hai?</figcaption>

        </figure>
      
      </Carousel.Item>
             
               <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/13/1655117515-auwlnygr/watermarked/540/7dd51bb6b9d044ee9920301f4573d9261.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/6/13/1655117515-auwlnygr/transcoded/240/7dd51bb6b9d044ee9920301f4573d9261.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">Makeup V/S <br/> No Makeup look</figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/13/1655124425-rtfcalou/watermarked/540/InShot_20220613_180813047.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/6/13/1655124425-rtfcalou/transcoded/240/InShot_20220613_180813047.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">5 minute mein <br/>wedding guest<br/> makeup look kaise kare?</figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/13/1655117001-qixpvzty/watermarked/540/7b3bf791506243339c3382787bb694e6.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/6/13/1655117001-qixpvzty/transcoded/240/7b3bf791506243339c3382787bb694e6.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">Quick 5 minute <br/> glam makeup</figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/5/30/1653917654-awvoesiz/watermarked/540/InShot_20220530_185239658.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/5/30/1653917654-awvoesiz/transcoded/240/InShot_20220530_185239658.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">Jawline Contouring<br/> Guide</figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/13/1655117448-ukahzifr/watermarked/540/sugartransformation.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/6/13/1655118375-udlvmqir/transcoded/240/WhatsAppVideo2022-06-13at4.33.40PM.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">Jawline Contouring<br/> Guide</figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/13/1655118375-udlvmqir/watermarked/540/WhatsAppVideo2022-06-13at4.33.40PM.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/6/13/1655117448-ukahzifr/transcoded/240/sugartransformation.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">Step by step makeup routine for beginners</figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/13/1655117448-ukahzifr/watermarked/540/sugartransformation.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/6/6/1654523135-lgzvsijh/240_400/Screenshot_20220606-191429_InShot.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">Makeup tutorial : Pride Edition</figcaption>
        </figure>
      </Carousel.Item>
      <Carousel.Item>
      <figure className="flexit">
        {/* <iframe className="imagefix1" width="60%" src="https://www.youtube.com/watch?v=kblDyxQPMRA?autoplay=1" allow='autoplay' alt="abc.png" >
          </iframe> */}
          <video  className="imagefix1" controls=""
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src='https://cdn4.fireworktv.com/medias/2022/6/6/1654521278-gvoxjphn/watermarked/540/InShot_20220606_183714941.mp4'
            poster='https://cdn4.fireworktv.com/medias/2022/6/6/1654523135-lgzvsijh/240_400/Screenshot_20220606-191429_InShot.jpg.62.jpg'
            preload='none'
            autoplay
            muted
            loop/>
            <figcaption className="fig">.5 minute office makeup look kaise karte hai?</figcaption>
        </figure>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
           </div>
        </div>

     {/* END */}
     <div class="fourth_box">
            <h2 className="quick marginfix1">SUPER SAVERS</h2>
           <div className="boxbest">
           <Carousel cols={4} rows={1} gap={5} loop
            >
      <Carousel.Item>
      <div className="flexit">
      <img className="imagefix"width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283" alt="abc.png" />
      <h4>SET THE TINTED TONE POWDER</h4>
      <p className="ptagfix">₹ 499.00</p>
        <button className="btnfix">SELECT SHADE</button>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_116c638f-21f6-4640-aab0-6022540b24e1.jpg?v=1649692784" alt="abc.png" />
        <h4>LIP ZIP MATTE TONER</h4>
      <p className="ptagfix">₹ 399.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655300033" alt="abc.png"/>
        <h4>MATTE PRIMBLING BAR</h4>
      <p className="ptagfix">₹ 299.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681" alt="abc.png"/>
      <h4>BLING ILLUMINATING SUNSCREEN</h4>
      <p className="ptagfix">₹ 599</p>


        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681" alt="abc.png"/>
        <h4>SUNSCREEN PAAF4++</h4>
      <p className="ptagfix">₹ 799</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      {/* https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232 */}
      <div className="flexit">
      <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012" alt="abc.png"/>
      <h4>SET THE TONE TINTED POWDER</h4>
      <p className="ptagfix">₹ 199</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg?v=1619152222" alt="abc.png"/>
        <h4>SUNSCREEN PAAF4++</h4>
      <p className="ptagfix">₹ 799</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Value-set-wbg.jpg?v=1627055238" alt="abc.png"/>
        <h4>SUNSCREEN PAAF4++</h4>
      <p className="ptagfix">₹ 799</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
           </div>
        </div>
     <div ><h1 className="h1-tag-div quick marginfix" >TOP PICKS OF THE WEEK</h1></div>

     <div className="hot-deals">
        <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/f40172c6-147a-4895-ac1f-d430c3cc0a55.jpg" alt="sugar.png"/>
        <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/a246bd5c-0383-4f03-905c-d6ab7f3bdb23.jpg" alt="sugar.png"/>
        <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/2ef5fc68-77d8-4083-9a4d-f37f42e98feb.jpg" alt="sugar.png"/>
     </div>
     <div class="fourth_box">
            <h2 className="quick">GIFTING</h2>
           <div className="boxbest">
           <Carousel cols={4} rows={1} gap={5} loop
            >
      <Carousel.Item>
      <div className="flexit">
      <img className="imagefix"width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_172725a5-b5f9-4648-869a-4c05561a1f81.jpg?v=1650023118" alt="abc.png" />
      <h4>SET THE TINTED TONE POWDER</h4>
      <p className="ptagfix">₹ 499.00</p>
        <button className="btnfix">SELECT SHADE</button>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966" alt="abc.png" />
        <h4>LIP ZIP MATTE TONER</h4>
      <p className="ptagfix">₹ 399.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Wedding-Makeup-Kit---WBG-Images-op-3.jpg?v=1653494398" alt="abc.png"/>
        <h4>MATTE PRIMBLING BAR</h4>
      <p className="ptagfix">₹ 299.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg?v=1649423983" alt="abc.png"/>
      <h4>BLING ILLUMINATING SUNSCREEN</h4>
      <p className="ptagfix">₹ 599</p>


        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/RakshaBandhanKit-WBGImages.jpg?v=1654578412" alt="abc.png"/>
        <h4>SUNSCREEN PAAF4++</h4>
      <p className="ptagfix">₹ 799</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      {/* https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232 */}
      <div className="flexit">
      <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-SETS-WBG-IMAGES-Set2.jpg?v=1632844196" alt="abc.png"/>
      <h4>SET THE TONE TINTED POWDER</h4>
      <p className="ptagfix">₹ 199</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      {/* https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232 */}
      <div className="flexit">
      <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_969f5548-2c56-4506-ada8-159b53a8f630.jpg?v=1649423977" alt="abc.png"/>
      <h4>SET THE TONE TINTED POWDER</h4>
      <p className="ptagfix">₹ 199</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      {/* https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232 */}
      <div className="flexit">
      <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1650022932" alt="abc.png"/>
      <h4>SET THE TONE TINTED POWDER</h4>
      <p className="ptagfix">₹ 199</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      
      {/* ... */}
    </Carousel>
           </div>
        </div>
     <div ><h1 className="h1-tag-div quick marginfix" >THIS OR THAT</h1></div>

     <div className="this-that">
        <img className="this-that-image" src="https://d32baadbbpueqt.cloudfront.net/87e180d8-98a5-44d4-88f2-4af24327cd7c.jpg" alt="sugar.png"/>
        <img className="this-that-image" src="https://d32baadbbpueqt.cloudfront.net/38a305ba-a808-4ade-ba72-fc55f5bc6183.jpg" alt="sugar.png"/>
        
     </div>
     <div class="fourth_box">
            <h2 className="quick">JUST IN</h2>
           <div className="boxbest">
           <Carousel cols={4} rows={1} gap={5} loop
            >
      <Carousel.Item>
      <div className="flexit">
      <img className="imagefix"width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/399160329-9-to-5-makeup-kit-wbg-01.jpg?v=1654013564" alt="abc.png" />
      <h4>SET THE TINTED TONE POWDER</h4>
      <p className="ptagfix">₹ 499.00</p>
        <button className="btnfix">SELECT SHADE</button>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141" alt="abc.png" />
        <h4>LIP ZIP MATTE TONER</h4>
      <p className="ptagfix">₹ 399.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="abc.png"/>
        <h4>MATTE PRIMBLING BAR</h4>
      <p className="ptagfix">₹ 299.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771" alt="abc.png"/>
      <h4>BLING ILLUMINATING SUNSCREEN</h4>
      <p className="ptagfix">₹ 599</p>


        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253" alt="abc.png"/>
        <h4>SUNSCREEN PAAF4++</h4>
      <p className="ptagfix">₹ 799</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      {/* https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232 */}
      <div className="flexit">
      <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232" alt="abc.png"/>
      <h4>SET THE TONE TINTED POWDER</h4>
      <p className="ptagfix">₹ 199</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
           </div>
        </div>


     <div ><h1 className="h1-tag-div quick marginfix" >SUGAR BEAUTY BLOG</h1></div>

     
     <div className="hot-deals">
   
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3d719924-5511-4ebb-b31f-dc3fabbe4cb1.jpg" alt="sugar.png" />
       
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/4570aaa9-52a7-4082-8d59-d2c1d298cdc8.jpg" alt="sugar.png"/>
   
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/6095fb33-4d09-4a55-8ceb-395a0818420c.jpg" alt="sugar.png"/>
     </div>
     
     <div class="fourth_box">
            <h2 className="quick">SKINCARE BASIC</h2>
           <div className="boxbest">
           <Carousel cols={4} rows={1} gap={5} loop
            >
      <Carousel.Item>
      <div className="flexit">
      <img className="imagefix"width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116" alt="abc.png" />
      <h4>SET THE TINTED TONE POWDER</h4>
      <p className="ptagfix">₹ 499.00</p>
        <button className="btnfix">SELECT SHADE</button>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141" alt="abc.png" />
        <h4>LIP ZIP MATTE TONER</h4>
      <p className="ptagfix">₹ 399.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="abc.png"/>
        <h4>MATTE PRIMBLING BAR</h4>
      <p className="ptagfix">₹ 299.00</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771" alt="abc.png"/>
      <h4>BLING ILLUMINATING SUNSCREEN</h4>
      <p className="ptagfix">₹ 599</p>


        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flexit">
        <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253" alt="abc.png"/>
        <h4>SUNSCREEN PAAF4++</h4>
      <p className="ptagfix">₹ 799</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      {/* https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232 */}
      <div className="flexit">
      <img className="imagefix" width="60%" src="https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232" alt="abc.png"/>
      <h4>SET THE TONE TINTED POWDER</h4>
      <p className="ptagfix">₹ 199</p>
        <button className="btnfix">SELECT SHADE</button>
        </div>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
           </div>
        </div>
      <div ><h1 className="h1-tag-div quick marginfix" >EXPLORE</h1></div>

      <div className="hot-deal1">
   
   <img className="hot-deal-image " src="https://d32baadbbpueqt.cloudfront.net/Homepage/f6d29c12-e7cf-476e-a654-b6697e0fa8de.jpg" alt="sugar.png" />
  
   <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/7b184616-6420-4992-ac33-23feeb482956.jpg" alt="sugar.png"/>

   <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/60cfcab0-427f-4748-8c44-5bae2bbfa3a4.jpg" alt="sugar.png"/>
   <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/Homepage/4188e9cd-11e4-452e-bec3-577894e7ec81.jpg" alt="sugar.png"/>
</div>


      </StyleRegisterContainer>
      </>
      
  )
}

export default HomePage
