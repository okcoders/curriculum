export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">OKCoders</a>
      </div>
      <div className="flex-2">
        <ul className="menu menu-horizontal *:mx-5!">
          <li className="">
            <a>Overview</a>
          </li>
          <li>
            <a>React Router</a>
          </li>
          <li>
            <a>Fetch API</a>
          </li>
          <li>
            <a></a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
