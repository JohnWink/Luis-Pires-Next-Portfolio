interface IProps {
  handleCallback: Function;
  text: String;
  class?: String;
}
export default function SpaceTraderButton(props: IProps) {
  return (
    <div className="space-traders">
      <button
        type="button"
        className={` ${props.class || ""}`}
        onClick={() => props.handleCallback}
      >
        <h2 className="text-color--secondary">{props.text}</h2>
      </button>
    </div>
  );
}
