import { useNavigate, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"

export const Form = () =>{
    const navigate = useNavigate()

    const {store, dispatch} = useGlobalReducer()

    const {id} = useParams()


    const [character, setcharacter] = useState({
        id: "",
        gender: "",
        age: "",
        occupation: ""

    })



  
}