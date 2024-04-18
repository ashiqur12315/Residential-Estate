import { Link } from "react-router-dom";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiPriceTagFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";



const Cards = ({data}) => {
    const {estate_title, id, image, price, status, location}=data;
    return (
        <div className=" flex justify-center">
            <div data-aos="flip-right" data-aos-duration="1700" className="card card-compact max-w-96 bg-base-100 shadow-2xl border-2">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body font-semibold">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="flex items-center gap-2"> <RiPriceTagFill />Status: For <span className="text-gray-600 bg-sky-200 p-1 rounded-md uppercase tracking-widest font-semibold mb-2">{status}</span></p>
                    <p className="flex items-center gap-2"> < IoPricetagsOutline /> Price: <span className="text-xl italic rounded-lg p-1 bg-green-300 ">{price}</span></p>
                    <p className="bg-purple-200 rounded-md border border-green-700 flex items-center gap-2"><FaLocationDot />Location: <span>{location}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/properties/${id}`}  className="btn btn-outline btn-accent">View Property</Link>
                        {/* <Link to={`/properties`} className="btn btn-primary">View Property</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;