import {ChangeEvent, MouseEvent, useState} from "react"
import { useNavigate } from "react-router-dom"
import { data } from "../data";

export default function SearchScreen() {
    const [selectV, setSelectv] = useState<string>("Kontagora to Kano")
    const navigate = useNavigate()
    const journeyHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
        setSelectv(e.target.value)
    }
    const submitHandler = (e: MouseEvent<HTMLButtonElement>)=>{
        navigate(`/journey?searchjourney=${selectV}`)
    }
  return (
    <div>
        <select value={selectV} onChange={journeyHandler} >
            {data.journeys.map((route)=> (
                <option key={route.Route}>{route.Route}</option>
            ))}
        </select>
        <button onClick={submitHandler}>submit</button>
    </div>
  )
}
