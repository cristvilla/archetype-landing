const BlockWithImage = ({ heading, contents, image, background }) => {
  return <section className={`section-gap ${background ? 'purple-gradient' : ''}`}>
    <div className="container">
      <div className={`flex items-center flex-wrap px-5 lg:px-14 ${background ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-full sm:w-1/2">
          <h2 className={`max-w-[650px] mb-6 text-xl whitespace-pre-line lg:text-3xl lg:font-medium ${background ? 'text-white' : 'text-gray'}`}>{heading}</h2>
          <ul className="max-w-[600px] list-disc pl-[18px] lg:pl-[23px]">
            {
              contents.map((item, idx) =>
                <li key={idx} className={`font-light text-sm mb-3 lg:text-base lg:mb-6 ${background ? 'text-white' : 'text-gray'}`}>
                  {item}
                </li>
              )
            }
          </ul>
        </div>
        <div className={`w-full flex justify-center mt-5 sm:w-1/2 sm:mt-0 ${background ? 'md:justify-end' : 'md:justify-start'}`}>
          <img className='w-2/3' src={image} alt='motion' />
        </div>
      </div>
    </div>
  </section>
}

export default BlockWithImage