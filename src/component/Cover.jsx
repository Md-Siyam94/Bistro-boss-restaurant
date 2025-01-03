import { Parallax } from 'react-parallax';

const Cover = ({bgImage, heading, subHeading}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        style={{objectFit: "cover"}}
        bgImage={bgImage}
        bgImageAlt="the menu image"
        strength={-200}
    >
        <div
            className="hero min-h-[calc(100vh-100px)] object-cover"
           >
            <div className=" bg-opacity-60"></div>
            <div className="hero-content text-white text-center ">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                    <p className="mb-5">
                       {subHeading}
                    </p>
                    
                </div>
            </div>
        </div>
    </Parallax>
       
    );
};

export default Cover;