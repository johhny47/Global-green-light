
import bannerIMG from "../assets/banner_img_1.webp"
const Banner = () => {
    return (
       <div className="flex h-[500px] w-[1200px] mx-auto gap-5">
        <div className=" w-[45%] text-left mt-24">
           <h1 className="text-5xl font-extrabold">The memories made <br /> during travel are <br /> priceless</h1>
           <p className="mt-8 font-normal ">Traveling pushes you out of your comfort zone and challenges you in ways you might not encounter in your everyday life. Navigating unfamiliar environments, overcoming language barriers, and adapting to new situations build resilience and self-confidence.</p>
           <button className="bg-accent px-7 py-3 text-slate-100 font-semibold mt-8">Book Now</button>
        </div>
        <div className="w-[45%]">
         <img src={bannerIMG} alt="" />
      </div>
       </div>
    );
};

export default Banner;