import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    console.log('userCredential',userCredential)

    const res = await axios.post("/api/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    return "ok"

  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    return "error"

  }
};

