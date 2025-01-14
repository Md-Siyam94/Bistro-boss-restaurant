import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import useAxiosPublic from '../provider/useAxiosPublic'

const useMenu =( )=>{
//  const [menu, setMenu] = useState([])
//  const [loading, setLoading] = useState(true)
 const axiosPublic = useAxiosPublic()

 const {data: menu = [], refetch, isPending: loading} = useQuery({
    queryKey: ['menu'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/menu')
        return res.data
    }
 })

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/menu`)
    //     .then(res=> res.json())  
    //     .then(data=>{
    //        setMenu(data)
    //     })
    // },[])

    return [menu, loading,refetch ]
}

export default useMenu;