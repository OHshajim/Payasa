const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="flex justify-center items-center flex-col mb-10">
      <p className="text-base font-bold bg-[#26ff3f34] text-green-500 px-2 py-1 mb-2">
        {subHeading}
      </p>
      <h3 className="md:text-3xl sm:text-2xl text-xl  font-bold uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
