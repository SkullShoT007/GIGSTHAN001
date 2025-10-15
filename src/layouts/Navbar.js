import { NavLink } from "react-router-dom"
export const Navbar = () => {
  return (
    <nav className="py-5 bg-customLightBlue flex justify-evenly items-center">
      
        <NavLink className="font-bold text-customDarkBlue">LOGO</NavLink>
        <NavLink className="font-bold text-customDarkBlue">Find a Job</NavLink>
        <NavLink className="font-bold text-customDarkBlue">Post a Job</NavLink>
        <NavLink className="font-bold text-customDarkBlue">About</NavLink>
        <NavLink className="font-bold text-customDarkBlue">Contact</NavLink>
      
      <div>
        <form className="relative w-72">
  <input type="text" placeholder="Search..." className="w-full pl-10 pr-2 py-1 rounded border border-gray-300 focus:outline-none" />
  <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
</form>
        
      </div>
        <button className="p-1 px-4 bg-customDarkBlue text-customLightBlue rounded">Sign Up</button>
        <button className="p-1 px-4 bg-customDarkBlue text-customLightBlue rounded">Login</button>
    </nav>
  )
}
