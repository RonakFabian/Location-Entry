import LocationCard from './LocationCard'

function Hero({ entryDatas })
{
  const listItems = entryDatas.map((name) =>
    <LocationCard Data={entryDatas} />
  );


  return (


    <>
      {listItems}


    </>
  );
}

export default Hero;

