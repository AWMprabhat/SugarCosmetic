import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'


export const Slider4 = ()=>{
    return(
        <Carousel infiniteLoop autoPlay>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/e90a47e7-1d6c-4e0c-8374-f5425dddc66a.jpg" alt="Phones" />
                
           </div>
            
            
        </Carousel>
    )
}