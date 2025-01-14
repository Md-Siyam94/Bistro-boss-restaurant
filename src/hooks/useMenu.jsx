import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import useAxiosSecure from '../provider/useAxiosSecure'

const useMenu =( )=>{
//  const [menu, setMenu] = useState([])
//  const [loading, setLoading] = useState(true)
 const axiosSecure = useAxiosSecure()

 const {data: menu = [], refetch, isPending: loading} = useQuery({
    queryKey: ['menu'],
    queryFn: async ()=>{
        const res = await axiosSecure.get('/menu')
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