
const Heading = ({ heading }) => {
  return (
    <h2 className='text-xl cursor-alias py-5 uppercase flex items-baseline tracking-wide'>
      {heading}
      <span className="text-primary-color text-7xl"> . </span>
    </h2>

  );
};

export default Heading;
