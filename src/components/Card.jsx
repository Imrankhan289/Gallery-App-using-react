const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-50 w-60  rounded-xl overflow-hidden    ">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <div className="flex justify-center m-3 ">
          <h2 className="font-bold text-xl"> {props.elem.author} </h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
