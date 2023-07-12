
import Logout from '../components/Logout'
import AuthWrapper from '@/components/AuthWrapper';
import Student from '@/components/Student';
import Teacher from '@/components/Teacher';
import Admin from '@/components/Admin';
import {useAppSelector} from '../redux/store'
function Homepage() {
    const role=useAppSelector((state)=>state.roleReducer.role)

        return (
        
        <AuthWrapper>
            {role==='admin' && <Admin/>}
            {role==='teacher' && <Teacher/>}
            {role==='student' && <Student/>}
            <Logout/>
        </AuthWrapper>
        
        
    )
}
export default Homepage
