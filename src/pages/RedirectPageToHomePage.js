import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function RedirectToHomePage() {
    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/buy-and-sell')
    },[])

  return (
    <div>
        Redirecting...
    </div>
  )
}
