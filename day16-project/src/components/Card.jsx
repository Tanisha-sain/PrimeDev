import React, { useEffect, useState } from 'react'
import "./Card.css"

const Card = ({name, email, githubLink}) => {
    const [data, setData] = useState({});
    const res = githubLink.split("/");
    const userId = res[3];
    const api_url = `https://api.github.com/users/${userId}`;

    const getData = async () => {
        const resp = await fetch(api_url);
        const temp = await resp.json();
        setData(temp);
    }

    useEffect(() => {
        getData();
    }, [])
  return (
    <div className='card'>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <a href={githubLink} target='_blank'>View Profile</a>
        <br />
        <img width="100px" src={data.avatar_url} alt="Profile" />
    </div>
  )
}

export default Card