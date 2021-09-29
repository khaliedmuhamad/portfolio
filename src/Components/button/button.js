import './button.css';
export function Button(props){
    return <button className={`btn ${props.block} button`}>{props.name}</button>

}

