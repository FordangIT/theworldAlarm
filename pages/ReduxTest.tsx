import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/reducer/counterSlice";
import { selectAuthState, setAuthState } from "@/redux/reducer/authSlice";
import { wrapper } from "@/redux/store";
import { NextPage } from "next";

const ReduxTest = function () {
  const { value: count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuthState);
  return (
    <div>
      <div>home</div>
      <div>redux</div>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() => {
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true));
        }}
      >
        {authState ? "Logout" : "LogIN"}
      </button>
    </div>
  );
};
