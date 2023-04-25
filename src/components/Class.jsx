const Class = ({ name, icon }) => {
  const overlayStyles = `p-5 absolute z-30 flex
      h-[50px] w-[50px] flex-col items-center justify-center
      whitespace-normal bg-primary-500 text-center text-white
      opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[100px] w-[100px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
      </div>
      <img alt={`${icon}`} src={icon} />
    </li>
  );
};

export default Class;
