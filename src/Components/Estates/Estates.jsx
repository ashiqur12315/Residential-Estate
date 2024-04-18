

import Cards from "../Cards/Cards";





const Estates = ({datas}) => {
    
    
    return (
        <div>
            
            <h2 className="text-4xl font-bold text-center my-10">Explore Our Residential Estates</h2>
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