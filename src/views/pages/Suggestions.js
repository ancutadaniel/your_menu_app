import React from 'react'
import { Link } from 'react-router-dom';


const Suggestions = (props) => {
    const option = props.results.map(r => (
        <li key={r.id}>
           <Link to={"/ordermenu/" + r.id}>{r.name}</Link>
        </li>
    ))
    return <ul className="sugestions">{option}</ul>
}

export default Suggestions