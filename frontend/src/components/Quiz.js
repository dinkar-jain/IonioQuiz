import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const Quiz = () => {
    let { signInDetails } = useSelector((state) => state.signIn);
    const [questions, setQuestions] = useState([{
        question: '',
        options: [{
            option: '',
            extra: ''
        }],
        answer: ''
    }]);
    const [pointer, setPointer] = useState(0);
    const [score, setScore] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + '/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': signInDetails.user
            }
        }).then(res => res.json().then(data => {
            if (data.length !== 0)
                setQuestions(data);
        }))
        return () => {
            //
        }
    }, [])
    return (
        <>
            {
                signInDetails.user ?
                    <div style={{
                        background: "#FFFFFF"
                    }} className='sm:absolute sm:top-[14vh] sm:left-[20vw] sm:right-[20vw] sm:shadow'>
                        <div style={{ margin: "2rem", marginBottom: "0.5rem" }}>
                            <div style={{
                                color: "#6B7280",
                            }}>Question {pointer + 1} of {questions.length}</div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900" style={{
                                marginTop: "0.8rem"
                            }}>
                                {questions[pointer].question}
                            </h2>
                            <div style={{

                                color: "#6B7280",
                            }}>Answer the question</div>

                            {questions[pointer].options.map((option, index) => {
                                return (
                                    <div key={index} style={{
                                        marginTop: "0.8rem", background: "#FFFFFF",
                                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "5px",
                                        padding: "1rem",
                                        display: "flex"
                                    }}>
                                        <div style={{ marginRight: "2rem", position: "relative", top: "2vh" }}>
                                            <input type="radio" id={index} value={option.option} name="options"></input>
                                        </div>
                                        <div style={{ fontFamily: 'Inter' }}>
                                            <div style={{ color: "#4B5563", fontSize: "16px" }}>{option.option}</div>
                                            <div style={{ color: "#6B7280", fontSize: "14px" }}>{option.extra}</div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div style={{ display: "flex", marginTop: "2rem" }}>
                                <button style={{ fontSize: "14px", color: "#1C64F2", fontWeight: "600" }} onClick={() => { window.location.replace("/") }}>Logout</button>
                                <div style={{ marginLeft: "auto", display: "flex" }}>
                                    {
                                        pointer === 0 ? <></> :
                                            <button style={{ borderRadius: "6px", border: "1px solid #D1D5DB", width: "70px", height: "30px", display: "flex", marginRight: "1rem" }} onClick={() => {
                                                setPointer(pointer - 1)
                                            }}>
                                                <div style={{ position: "relative", top: '0.5rem', paddingRight: "0.5rem", paddingLeft: "0.5rem" }}>
                                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.20703 13.7069C8.0195 13.8944 7.76519 13.9997 7.50003 13.9997C7.23487 13.9997 6.98056 13.8944 6.79303 13.7069L0.793031 7.70692C0.605559 7.51939 0.500244 7.26508 0.500244 6.99992C0.500244 6.73475 0.605559 6.48045 0.793031 6.29292L6.79303 0.292919C6.98163 0.110761 7.23423 0.00996641 7.49643 0.0122448C7.75863 0.0145233 8.00944 0.119692 8.19485 0.3051C8.38026 0.490508 8.48543 0.741321 8.4877 1.00352C8.48998 1.26571 8.38919 1.51832 8.20703 1.70692L3.91403 5.99992H15.5C15.7652 5.99992 16.0196 6.10528 16.2071 6.29281C16.3947 6.48035 16.5 6.7347 16.5 6.99992C16.5 7.26514 16.3947 7.51949 16.2071 7.70703C16.0196 7.89456 15.7652 7.99992 15.5 7.99992H3.91403L8.20703 12.2929C8.3945 12.4804 8.49982 12.7348 8.49982 12.9999C8.49982 13.2651 8.3945 13.5194 8.20703 13.7069Z" fill="#111928" />
                                                    </svg>
                                                </div>
                                                <div style={{ position: "relative", top: '0.3rem' }}>
                                                    <div style={{ fontSize: "14px" }}>Back</div>
                                                </div>
                                            </button>
                                    }
                                    {
                                        pointer === questions.length - 1 ?
                                            <button style={{ background: "#1C64F2", borderRadius: "6px", width: "85px", height: "30px", display: "flex" }} onClick={async () => {
                                                let current = score;
                                                if (questions[pointer].answer === document.querySelector('input[name="options"]:checked').value) {
                                                    current = current + 1;
                                                }
                                                const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/updateScore", {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "Authorization": signInDetails.user
                                                    },
                                                    body: JSON.stringify({
                                                        score: current + "/" + questions.length
                                                    })
                                                });
                                                const data = await response.json();
                                                if (data.msg) {
                                                    navigate("/result", { state: { result: current, total: questions.length } })
                                                }
                                            }}>
                                                <div style={{ position: "relative", top: '0.5rem', paddingRight: "0.5rem", paddingLeft: "0.5rem" }}>
                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.7931 7.50003L12.9396 8.35358L8.65013 12.643C8.56064 12.737 8.51118 12.8622 8.51231 12.9921C8.51345 13.1232 8.56603 13.2486 8.65874 13.3413C8.75144 13.434 8.87685 13.4866 9.00794 13.4877C9.13783 13.4889 9.26301 13.4394 9.35703 13.3499L15.3534 7.35353C15.3534 7.35351 15.3534 7.35349 15.3534 7.35348C15.4471 7.25972 15.4998 7.13259 15.4998 7.00003C15.4998 6.86747 15.4471 6.74034 15.3534 6.64658L13.7931 7.50003ZM13.7931 7.50003H12.586H1C0.867392 7.50003 0.740215 7.44735 0.646446 7.35358C0.552678 7.25982 0.5 7.13264 0.5 7.00003C0.5 6.86742 0.552678 6.74025 0.646446 6.64648C0.740215 6.55271 0.867392 6.50003 1 6.50003H12.586H13.7931L12.9396 5.64648L8.64661 1.35353C8.64659 1.35351 8.64657 1.35349 8.64655 1.35348C8.55285 1.25972 8.50021 1.13259 8.50021 1.00003C8.50021 0.867498 8.55283 0.740391 8.6465 0.646637C8.74026 0.552902 8.86742 0.500244 9 0.500244C9.13256 0.500244 9.25969 0.552882 9.35345 0.646584C9.35346 0.646602 9.35348 0.646619 9.3535 0.646637L15.3534 6.64653L13.7931 7.50003Z" fill="white" stroke="white" />
                                                    </svg>
                                                </div>
                                                <div style={{ position: "relative", top: '0.3rem' }}>
                                                    <div style={{ color: "#FFFFFF", fontSize: "14px" }}>Submit</div>
                                                </div>
                                            </button>
                                            :
                                            <button style={{ background: "#1C64F2", borderRadius: "6px", width: "70px", height: "30px", display: "flex" }} onClick={() => {
                                                if (document.querySelector('input[name="options"]:checked') === null) {
                                                    return;
                                                }

                                                if (questions[pointer].answer === document.querySelector('input[name="options"]:checked').value) {
                                                    setScore(score + 1);
                                                }
                                                setPointer(pointer + 1);
                                            }}>
                                                <div style={{ position: "relative", top: '0.5rem', paddingRight: "0.5rem", paddingLeft: "0.5rem" }}>
                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.7931 7.50003L12.9396 8.35358L8.65013 12.643C8.56064 12.737 8.51118 12.8622 8.51231 12.9921C8.51345 13.1232 8.56603 13.2486 8.65874 13.3413C8.75144 13.434 8.87685 13.4866 9.00794 13.4877C9.13783 13.4889 9.26301 13.4394 9.35703 13.3499L15.3534 7.35353C15.3534 7.35351 15.3534 7.35349 15.3534 7.35348C15.4471 7.25972 15.4998 7.13259 15.4998 7.00003C15.4998 6.86747 15.4471 6.74034 15.3534 6.64658L13.7931 7.50003ZM13.7931 7.50003H12.586H1C0.867392 7.50003 0.740215 7.44735 0.646446 7.35358C0.552678 7.25982 0.5 7.13264 0.5 7.00003C0.5 6.86742 0.552678 6.74025 0.646446 6.64648C0.740215 6.55271 0.867392 6.50003 1 6.50003H12.586H13.7931L12.9396 5.64648L8.64661 1.35353C8.64659 1.35351 8.64657 1.35349 8.64655 1.35348C8.55285 1.25972 8.50021 1.13259 8.50021 1.00003C8.50021 0.867498 8.55283 0.740391 8.6465 0.646637C8.74026 0.552902 8.86742 0.500244 9 0.500244C9.13256 0.500244 9.25969 0.552882 9.35345 0.646584C9.35346 0.646602 9.35348 0.646619 9.3535 0.646637L15.3534 6.64653L13.7931 7.50003Z" fill="white" stroke="white" />
                                                    </svg>
                                                </div>
                                                <div style={{ position: "relative", top: '0.3rem' }}>
                                                    <div style={{ color: "#FFFFFF", fontSize: "14px" }}>Next</div>
                                                </div>
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div >
                    : null
            }
        </>
    )
}

export default Quiz