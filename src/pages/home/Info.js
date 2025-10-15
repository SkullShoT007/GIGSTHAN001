import image from "../../assets/carausal/carausal-image-1.gif"
export const Info = () => {
  return (
    <div className="bg-customOrange p-10 m-10 rounded flex ">
      <div className="w-[100rem]">
        <h1 className="font-bold text-7xl text-customLightBlue">Why Gigsthan</h1>
        <p className="font-bold text-4xl text-customLightBlue mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="w-[100rem]">
        <img src={image} alt="" />
      </div>
    </div>
  )
}
