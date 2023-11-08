import Cookies from "js-cookie"
const playerOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get("access_token")}`
    }
}
export default playerOptions;