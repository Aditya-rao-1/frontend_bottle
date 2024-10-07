const BottleCard = ({ imgURL, changeBigBottleImage, bigBottleImg }) => {
    const handleClick = () => {
        if (bigBottleImg !== imgURL.bigBottle) {
          changeBigBottleImage(imgURL.bigBottle);
        }
      };
  return (
    <div
    className={`border-2 rounded-xl ${bigBottleImg === imgURL.bigBottle ? "border-coral-red": "border-transparent"}
     cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
  >
    <div className='flex justify-center items-center bg-primaryyy bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
      <img
        src={imgURL.thumbnail}
        alt='Bottle colletion'
        width={127}
        height={103.34}
        className='object-contain'
      />
    </div>
  </div>
  )
}

export default BottleCard