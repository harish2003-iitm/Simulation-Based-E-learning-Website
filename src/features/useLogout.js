import { useAuthContext } from "./useauthcontext"
import { useNavigate } from "react-router-dom";


export const useLogout = () => {
    const navigateToHome = useNavigate();
    const { dispatch } = useAuthContext()
    const logout = () => {
        localStorage.removeItem('token');
        navigateToHome('/');
        window.location.reload();
        dispatch({type: 'LOGOUT'});
    }

    return {logout}
}