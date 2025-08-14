import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="">
      <header>Header Title</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
