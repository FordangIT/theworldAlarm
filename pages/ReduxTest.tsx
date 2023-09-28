import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { increment, decrement } from "@/redux/reducer/counterSlice";
import { selectAuthState, setAuthState } from "@/redux/reducer/authSlice";
import { wrapper } from "@/redux/store";
import { NextPage } from "next";
import Alarming from "@/components/Alarming";
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
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <Alarming />
    </div>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      store.dispatch(increment());
      store.dispatch(setAuthState(false));
      console.log("state on server", store.getState());
      return {
        props: {},
      };
    }
);

export default ReduxTest;
