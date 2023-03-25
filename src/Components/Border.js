const Border = () => {
    return (
      <>
        <div className="outer border-container">
          <div className="border top"></div>
          <div className="border right"></div>
          <div className="border bottom"></div>
          <div className="border left"></div>
        </div>
        <div className=" inner border-container">
          <div className="border top"></div>
          <div className="border right"></div>
          <div className="border bottom"></div>
          <div className="border left"></div>
        </div>
      </>
    );
};

export default Border;