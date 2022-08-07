import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'


export const Slider2 = ()=>{
    return(
        <Carousel infiniteLoop autoPlay>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg" alt="Phones" />
                
           </div>
            
            
        </Carousel>
    )
}