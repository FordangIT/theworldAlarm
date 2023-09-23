import Header from "./Header";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      {/* <Header />
      <Navbar /> */}
      <div>{children}</div>
    </>
  );
}
