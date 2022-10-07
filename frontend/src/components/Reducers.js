const signInReducer = (State = {}, Action) => {
    if (Action.type === "SIGN_IN_SUCCESS") {
        return { signInDetails: Action.payload };
    }

    else if (Action.type === "SIGN_OUT_SUCCESS") {
        return { signInDetails: Action.payload };
    }

    else {
        return State;
    }
};

export { signInReducer };