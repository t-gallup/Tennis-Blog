// import '../../dist/output.css'
import '../index.css'

function NavBar() {
  return (
    <div className="navbar w-full h-10vh sticky top-0 bg-gray-700">
      <ul className="flex flex-row items-center justify-between list-none p-4">
        <li className="mr-4">
          <a href='/' className="no-underline">Home</a>
        </li>
        <li className="mr-4">
          <a href='/atp' className="text-white no-underline">ATP</a>
        </li>
        <li className="mr-4">
          <a href='/wta' className="text-white no-underline">WTA</a>
        </li>
        <li className="mr-4">
          <a href='/college' className="text-white no-underline">College</a>
        </li>
        <li className="mr-4">
          <a href='/about-us' className="text-white no-underline">About Us</a>
        </li>
        <li>
          <a href='/contact-us' className="text-white no-underline">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;