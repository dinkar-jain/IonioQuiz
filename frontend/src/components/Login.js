import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(data => {
            if (data.msg) {
                alert(data.msg);
            }
            else {
                dispatch({ type: "SIGN_IN_SUCCESS", payload: data });
                navigate("/quiz");
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <div style={{
                background: "#FFFFFF",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px"
            }} className='sm:flex sm:absolute sm:top-[20vh] sm:left-[20vw] sm:right-[20vw]'>
                <img src="/images/login.png" className="w-[50%] h-[200px] ml-[auto] mr-[auto] sm:w-[24vw] sm:h-[48vh] sm:mt-[3.5rem]"></img>
                <div className="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8" style={{ paddingBottom: "2rem" }}>
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
                                Sign In
                            </h2>
                        </div>
                        <form style={{ marginTop: "1.5rem" }} onSubmit={submit}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <h4 style={{
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        lineHeight: "150%"
                                    }}>Your email</h4>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm sm:w-[29vw]"
                                        placeholder="name@example.com"
                                        style={{
                                            padding: "13px 20px",
                                            gap: "10px",
                                            height: "25px",
                                            background: "#F9FAFB",
                                            border: "1px solid #E5E7EB",
                                            borderRadius: "16px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 style={{
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        lineHeight: "150%",
                                        marginTop: "0.8rem"
                                    }}>Password</h4>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm sm:w-[29vw]"
                                        placeholder="**********"
                                        style={{
                                            padding: "13px 20px",
                                            gap: "10px",
                                            height: "25px",
                                            background: "#F9FAFB",
                                            border: "1px solid #E5E7EB",
                                            borderRadius: "16px"
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center" style={{ marginTop: "1rem" }}>
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div style={{ marginTop: "1rem" }}>
                                <button
                                    type="submit"
                                    style={{ borderRadius: "12px" }}
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#1C64F2] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Sign In
                                </button>
                            </div>
                            <hr style={{ width: "50%", marginLeft: "25%", borderColor: "#3F83F8", marginTop: "1rem" }} />
                            <div style={{ marginTop: "0.7rem", color: "#1C64F2", textAlign: "center", fontWeight: 600, fontSize: "14px" }}><Link to="/signup">Sign Up</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
}

export default Login