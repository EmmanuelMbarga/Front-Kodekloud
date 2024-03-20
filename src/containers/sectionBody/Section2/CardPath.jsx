export default function CardPath2(props) {
  return (
    <div className="flex bg-gray-200 p-3 w-[12rem] items-center rounded-lg ">
      <span className="mr-4">
        <img
          src={props.Logo}
          alt=""
        />
      </span>
      <span className="text-base font-medium text-gray-500">{props.text}</span>
    </div>
  );
}
