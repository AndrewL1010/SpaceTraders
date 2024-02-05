import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar';
import styles from './NotFoundPage.module.css'
function NotFoundPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = async () => {
            const response = await fetch("/api/auth",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    mode: "cors",
                    credentials: "include",
                }
            )
            if (response.status !== 201) {
                navigate("/");
            }
        }
        auth();
    }, [navigate])

    return (
        <div>
            <Navbar />
            <h2>This Page Does Not Exist <br /></h2>
            <h2 onClick={() => { navigate("/Dashboard") }} className={styles.span}>Back To DashBoard</h2>
        </div>
    )
}

export default NotFoundPage