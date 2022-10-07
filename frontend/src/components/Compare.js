import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Compare = () => {
    let { signInDetails } = useSelector((state) => state.signIn);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/compare', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': signInDetails.user
            }
        }).then(res => res.json().then(data => {
            if (data !== [])
                setUsers(data);
        }))
        return () => {
            //
        }
    }, [])

    return (
        <>
            {signInDetails.user ?
                <div style={{
                    position: "absolute",
                    left: "20vw",
                    top: "17vh",
                    right: "20vw",
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                    borderRadius: "16px"
                }}>
                    <div style={{ margin: "1rem", marginBottom: "0.8rem", marginLeft: "1.3rem" }}>
                        <div style={{ color: "#111928", fontSize: "20px", fontWeight: 700, marginBottom: "1.2rem" }}>Other Results</div>
                        {users.map((user, index) => {
                            return (
                                <>
                                    <div style={{ display: "flex", marginBottom: "0.5rem", marginTop: "0.5rem" }}>
                                        <div>
                                            <div style={{ color: "#111928", fontWeight: 600, fontSize: "16px" }}>{user.name}</div>
                                            <div style={{ color: "#6B7280", fontWeight: 500, fontSize: "12px" }}>{user.email}</div>
                                        </div>
                                        <div style={{ marginLeft: "auto", color: "#111928", fontWeight: 600, fontSize: "16px" }}>{user.score}</div>
                                    </div>
                                    {index !== users.length - 1 ? <hr style={{}} /> : null}
                                </>
                            )
                        })}
                    </div>
                </div> : null}
        </>
    )
}

export default Compare;