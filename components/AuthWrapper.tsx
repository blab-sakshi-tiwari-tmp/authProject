import {  useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface proptype{
  children: React.ReactNode;
}

 function AuthWrapper(props: proptype): React.ReactElement {
    const {children}=props
    const [isAuth, setIsAuth] = useState(false)
    const router=useRouter()
    async function get() {
    const token = localStorage.getItem('SavedToken')
    if(!token){
      router.push('/')
      return
    }
    const res= await fetch('./api/authverify',
      {method:'POST', headers: {authorization: token || ""}}
      )
      console.log("res-",{res});
      if(res.ok){
        setIsAuth(true)
      }else{
        router.push('/')
      }
    }
    useEffect(() => {
      get()
    },[])

    return <>{isAuth ? children : 'loading'}</>
}

export default AuthWrapper