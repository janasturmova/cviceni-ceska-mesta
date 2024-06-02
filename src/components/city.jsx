import { cities } from '../cz-cities';
import './city.css';



const City = ({name, population, area, district, photo}) => (
    <div className="city">
        <h2>{name}</h2>
        <p><span>Počet obyvatel: </span><strong>{population}</strong></p>
        <p><span>Rozloha: </span><strong>{area} km²</strong></p>
        <p><span>Kraj: </span><strong>{district}</strong></p>
        <img src={photo} alt={`${name} photo`} />
        
    </div>
)

export const HomePage = () => (
   <div className='homepageDiv'>
    {cities.map(city => (
       <City 
       key={city.name}
       name={city.name}
       population={city.population}
       area={city.area}
       district={city.district}
       photo={city.photo}
       />
    ))}
   </div>
)
  