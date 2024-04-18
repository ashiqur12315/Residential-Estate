

import Cards from "../Cards/Cards";





const Estates = ({datas}) => {
    
    
    return (
        <div>
            
            <h2 className="text-4xl font-bold text-center mt-9 mb-3">Explore Our Residential Estates</h2>
            <h2 className=" font-medium text-gray-600 text-center mb-5">Welcome to our online sanctuary, where each click unveils the warmth and charm of our residential community, <br /> inviting you to embrace a lifestyle of comfort and serenity</h2>
            {/* cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-6 gap-3 ">
                {
                    datas.map(data => <Cards key={data.id} data={data} ></Cards>
                )}
            </div>
        </div>
    );
};

export default Estates;