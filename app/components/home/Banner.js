"use client";
import content from "@content/home.json";

const Banner = ({ data }) => {
  const { b_l_icon, b_c_icon, monkey3d } = content.banner;
  return (
    <div className="bg-tcs-black rounded-[35px] p-4 h-[500px] sm:h-[820px] sm:p-10 pt-20 sm:pt-56 grid">
      <h1 className="text-center">
        <div className="relative h-[320px] overflow-hidden">
          <div className="absolute w-full pt-1.5">
            <h2 className="max-h-[220px] overflow-hidden font-helvetica-neue-extra-regular tracking-normal text-5xl lg:text-[108px] max-w-[250px] sm:max-w-5xl mx-auto leading-[55px] sm:leading-none text-tcs-pure-white uppercase">
              <span className="relative  animate-plateUp">
                {data?.mainTitle}
              </span>
            </h2>
            <p className="max-h-[120px] overflow-hidden font-helvetica-neue-regular mt-4 md:leading-[30px] max-w-[200px] sm:max-w-md mx-auto text-[17px] sm:text-[25px] text-tcs-pure-white ">
              <span className=" relative animate-plateDown">
                {data?.subtitles}
              </span>
            </p>
          </div>
        </div>
      </h1>
      <div className="relative animate__animated animate__zoomIn animate__delay-2s">
        <img
          className={`r-transition z-30  absolute hover:scale-110 w-[50px] sm:w-[167px] right-[20%] sm:right-[35%] md:right-[40%] lg:right-[42%] 3xl:right-[45%] -top-[350px] sm:-top-[470px] lg:-top-[450px]`}
          src="https://firebasestorage.googleapis.com/v0/b/tcs-website-edf68.appspot.com/o/Keyframe.gif?alt=media&token=0a0eb23a-ed20-4a97-a005-f903bf6b33e9"
        />
      </div>
      <div className="relative animate__animated animate__zoomIn animate__delay-2s">
        <img
          className={`r-transition absolute hover:scale-110 w-[80px] sm:w-[200px] md:w-[300px] 2xl:w-[324px] left-[0%] sm:-left-[8%] lg:left-0 xl:left-32 2xl:left-44 3xl:left-[16%] -top-[220px] sm:-top-96 md:-top-[420px] lg:-top-[265px]`}
          src="https://firebasestorage.googleapis.com/v0/b/tcs-website-edf68.appspot.com/o/Star-0%20(1).gif?alt=media&token=6b5c202c-9584-460f-8068-cf20d0c19123"
        />
      </div>
      <div className="relative animate__animated animate__zoomIn animate__delay-2s">
        <img
          className={`r-transition absolute hover:scale-110 w-[100px] sm:w-[200px] md:w-[300px] lg:w-[375px] -right-[8%] sm:-right-[8%] lg:-right-8 xl:right-20 2xl:right-28 3xl:right-40 -top-[235px] sm:-top-96 md:-top-[420px] lg:-top-[270px]`}
          src="https://firebasestorage.googleapis.com/v0/b/tcs-website-edf68.appspot.com/o/Monkey.gif?alt=media&token=1fd2932d-313b-41cc-9a90-99dc9ea6c6b0"
        />
      </div>
      <div className="grid grid-cols-3 justify-between items-end">
        <img
          src={b_l_icon}
          className="r-transition h-6 sm:h-7  mx-auto sm:mx-0 hover:scale-[1.05]"
        />
        <img
          src={b_c_icon}
          className="r-transition h-9 sm:h-10 mx-auto hover:scale-125 hover:translate-y-1"
        />
      </div>
    </div>
  );
};

export default Banner;
