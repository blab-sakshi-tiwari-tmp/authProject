
import {  useRouter } from 'next/router'
function Logout() {
    const router=useRouter()
    function logoutHandler(){
        localStorage.clear();
        router.push('/')

    }
    return (<>
        <button type="button" onClick={logoutHandler}>logout</button>
        </>
    )
}

export default Logout
