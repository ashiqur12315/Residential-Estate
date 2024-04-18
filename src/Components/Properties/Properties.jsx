

import { useLoaderData, useParams } from 'react-router-dom';
import { FaBuilding } from "react-icons/fa6";


const Properties = () => {
    const { id } = useParams();
    const data = useLoaderData();


    const property = data.find(p => p.id === id);
    const {estate_title,segment_name,description,area,facilities, image, price, status, location}=property;
    console.log(property);
    return (
        <div>
            
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="hero min-h-screen text-2xl rounded-3xl" style={{ backgroundImage: `url(${image})` }}>
                
                <div className=" rounded-3xl bg-gradient-to-r from-black to-transparent opacity-80 min-h-screen lg:pt-5 md:pt-3 sm:pt-3 text-neutral-content">
                    <div className="w-full">
                       <h1 data-aos="fade-right" data-aos-duration="3000" className="mb-5 lg:text-7xl md:text-5xl sm:text-2xl  font-bold pl-5 flex"><FaBuilding />{estate_title}</h1>
                        <p data-aos="fade-left" data-aos-duration="3000" className="m-3 pl-5 lg:text-3xl md:text-2xl sm:text-xl">{description}</p>
                        <p data-aos="fade-right" data-aos-duration="3000" className="m-3 pl-5">Type: {segment_name}</p>
                        <p data-aos="fade-left" data-aos-duration="3000" className="m-3 pl-5">Area: {area}</p>
                        <p data-aos="fade-right" data-aos-duration="3000" className="m-3 pl-5">Status: {status}</p>
                        <p data-aos="fade-left" data-aos-duration="3000" className="m-3 pl-5">Price: {price}</p>
                        <p data-aos="fade-right" data-aos-duration="3000" className="m-3 pl-5">Location: {location}</p>
                        <p data-aos="fade-up-right" data-aos-duration="3000" className="m-3 pl-5">Facilities: {
                            facilities.map(f => <li>{f}</li>)
                            }</p>
                        
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Properties;