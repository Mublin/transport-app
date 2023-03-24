import React from 'react'
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { TravelProps, data } from '../data';

export default function JourneyScreen() {
    const navigate = useNavigate()
    const {search} = useLocation()
    const sp = new URLSearchParams(search)
    const query = sp.get("searchjourney")
    const journey = data.journeys.find(journey => query === journey.Route)
    const clickHandler = (item: TravelProps)=>{
        navigate(`/booking/${query}/${item._id}`)
    }
  return (
    <div>
        {query === "" ? <Navigate to={"/search"}/> : journey?.available.map((move, i)=>(
            <div style={{border: "2px solid black", cursor: "pointer"}} key={move._id} onClick={()=>clickHandler(move)}>
                    <div>
                        <p>Organization: {move.brand}</p>
                        <p>Travel: {move.carType}</p>
                        <p>Price: NGN{move.Price}</p>
                        <p>Take-off Time: {move.TakeOff}</p>
                    </div>
            </div>
        ))}
    </div>
  )
}

