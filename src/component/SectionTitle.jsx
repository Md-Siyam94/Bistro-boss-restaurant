

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto w-4/12 text-center my-8'>
            <p className='italic text-yellow-600 my-2'>---{subHeading}---</p>
            <h1 className='py-3 border-y text-3xl '>{heading}</h1>
        </div>
    );
};

export default SectionTitle;