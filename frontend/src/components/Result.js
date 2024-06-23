import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
    let { signInDetails } = useSelector((state) => state.signIn);

    const { state } = useLocation();
    const navigate = useNavigate();

    const { result, total } = state;
    return (
        <>
            {signInDetails.user ?
                <div style={{
                    position: "absolute",
                    left: "20vw",
                    top: "17vh",
                    right: "20vw",
                    background: "#FFFFFF",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)"
                }}>
                    <div className="mx-4 mb-2">
                        <div style={{ textAlign: "center", color: "#6B7280", fontSize: "18px" }}>Quiz Completed</div>
                        <h1 style={{ textAlign: "center", color: "#111928", fontSize: "30px", fontWeight: 600 }}>Good Job!</h1>
                        <img src="images/result.png" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }}></img>
                        <div style={{ textAlign: "center", color: "#6B7280", fontSize: "18px" }}>You scored {result}/{total} points</div>
                        <div style={{ display: "flex", marginTop: "2rem" }}>
                            <button style={{ fontSize: "14px", color: "#1C64F2", fontWeight: "600" }} onClick={() => { window.location.replace("/") }}>Logout</button>
                            <div style={{ marginLeft: "auto" }}>
                                <button className="sm:w-[100px] px-1 py-0.5" style={{ borderRadius: "6px", border: "1px solid #D1D5DB", display: "flex" }} onClick={() => {
                                    navigate('/compare')
                                }}>
                                    <div style={{ fontSize: "12px", fontWeight: 600 }}>Compare Results</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default Result