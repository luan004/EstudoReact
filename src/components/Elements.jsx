import '../css/Elements.css';

export default function Button(props) {
    return (
        <button className="Button {props.class}" onClick={props.onClick}>
            {props.label}
        </button>
    );
}