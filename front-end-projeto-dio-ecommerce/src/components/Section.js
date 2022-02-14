import capa from '../img/capa.jpg';
import { useEffect, useState} from 'react';



function Section(){

    const [services, setService] = useState([]);

    useEffect(()=>{
        async function fetchData(){ 
                const response = await fetch('http://localhost:5000');
                const data = await response.json();
                setService(data.data);  
            }
            fetchData();
    },[]);

 
      return(
        <>
        <div className="case">
            <img width='70%' src={capa} alt='capa mk details'></img>
        </div>

        <div className='section'>
            
       
        {services.map((content) => {

            return(
                <div className='service' key={content.id}>
            
            <img
                className="d-block mx-auto"
                src={content.img}
                
                alt={content.service}/>
            {content.service}<br/>
            <a href='https://api.whatsapp.com/send?phone=5521966774003'>Clique para agendar</a>
        </div>
            )
        } )} 

        </div>
    
        </>
    )
}

export default Section;