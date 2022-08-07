import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import styled from "styled-components"
import "./Homepage.css"
export const Slider = ()=>{
    const StyleRegisterContainer=styled.div`
    @media (min-width:375px) and (max-width:667px)
  {
  
   
.limage{
    width: 100%
}
.cTPVlv * {
  
    width: 100%;


 } 
//  .fQSOLW * {
   
//     width: 1412px !important;
// }



`
    return(
       <StyleRegisterContainer>
         <Carousel infiniteLoop autoPlay>
            <div className='limage'>
                <img className="sliderimg" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/b6a49a8b-a546-41e5-9f1e-22076faf4a46.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/9bbfbc4e-f613-4265-8ea6-aac3e4893ac9.gif" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/177972e0-4583-428b-b4db-da5546b71310.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/d1cfea92-87ad-427d-82e9-8be93466830c.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/612fa0b2-93e7-44f3-a1f7-3c34ee900a9b.gif" alt="Phones" />
                
            </div>
        </Carousel>
       </StyleRegisterContainer>
    )
}