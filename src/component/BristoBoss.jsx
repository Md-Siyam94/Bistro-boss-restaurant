

const BristoBoss = ({bgImg, heading, subHeading}) => {
    return (
        <div className="my-28">
            <div className='absolute p-14 w-8/12  bg-base-100 z-10 mt-20 mx-56 text-center'>
                <h1 className='text-5xl font-thin mb-4 '>{heading}</h1>
                <p className='w-[80%] mx-auto'>{subHeading}</p>
            </div>
            <img
            className='max-w-6xl  relative mx-auto  '
            src={bgImg} alt="chef-service" />
            
        </div>
    );
};

export default BristoBoss;