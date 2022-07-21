import  * as C from './styles';
import { useNavigate } from "react-router-dom";
import UsersList from './UsersList';



const AddUser = ( ) => {
  
        return (
            <C.Container>
                <C.Area>
                    <C.Header>PREENCHA OS DADOS</C.Header>
                    <C.SignInButton onClick={UsersList}>SIGN IN</C.SignInButton>
                </C.Area>
            </C.Container>
        )

}

export default AddUser;