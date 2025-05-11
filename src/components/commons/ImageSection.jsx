const ImageSection = ({ heading, title, des, imgPosition = "left" }) => {
  return (
    <div className="grid grid-cols-12">
      {imgPosition === "left" && (
        <div className="col-span-3 center">
          <div className="bg-black w-full h-96 rounded-t-[65px] rounded-b-[65px]" />
        </div>
      )}
      {imgPosition === "left" && (
        <div className=" col-start-8 col-span-5 space-y-5">
          <h1 className="heading">{heading}</h1>
          <h2 className="text-primary-text-color font-medium text-lg">
            {title}
          </h2>
          <p className="text-secondary-text-color">{des}</p>
        </div>
      )}
      {imgPosition !== "left" && (
        <div className="col-span-5 space-y-5">
          <h1 className="heading">{heading}</h1>
          <h2 className="text-primary-text-color font-medium text-lg">
            {title}
          </h2>
          <p className="text-secondary-text-color">{des}</p>
        </div>
      )}
      {imgPosition !== "left" && (
        <div className="col-start-9 col-span-3 center">
          <div className="w-full bg-black h-96 rounded-t-[65px] rounded-b-[65px]" />
        </div>
      )}
    </div>
  );
};

export default ImageSection;
