import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";




const UpdateProfile = () => {
    const { updateUserProfile, user, setOn } = useContext(AuthContext);
    const {photoURL, displayName, email} = user;
    
    const [imageError, setImageError] = useState(false)
    const handleImageError=()=>{
        console.log('error oon image............');
        setImageError(true);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const image = form.get('photo')
        console.log(name, image)

        updateUserProfile(name, image)
            .then(() => setOn(true))
            .catch((error) => console.error(error))
        

    }
    return (
        <div>
            <Helmet><title>Update Profile</title></Helmet>
            

            {/* Mamba UI Components */}
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <div className="text-center">
                            <img data-aos="zoom-in" data-aos-duration="3000" src={photoURL} onError={handleImageError} alt={imageError ? 'No user photo' : ''} className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square ring ring-primary ring-offset-base-100 ring-offset-2" />
                            
                            <div className="my-2 space-y-2 text-center divide-y-2">
                                <h2 data-aos="zoom-out" data-aos-duration="3000" className="text-xl font-semibold sm:text-2xl">{displayName}</h2>
                                <p data-aos="fade-right" data-aos-duration="3000" className="px-5 text-xs font-semibold sm:text-base dark:text-gray-600 p-2">{email}</p>
                            </div>
                        </div>
                        
                        
                    </div>
                    <form data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" onSubmit={handleUpdate} noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <div className="text-3xl font-bold">
                            <h2>Here You Can Update Your Profile</h2>
                        </div>
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" name="name" placeholder="Your New Name" className="border p-3 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Photo URL</span>
                            <input type="text" name="photo" placeholder="Your New Photo URL" className="border p-3 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>

                        <button  className="border-green-500 border font-semibold  self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Save Changes</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default UpdateProfile;