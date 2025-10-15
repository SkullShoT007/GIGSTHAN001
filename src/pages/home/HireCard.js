import hire_a_pro from "../../assets/hire_a_pro.svg"
import user_avatar from "../../assets/user_avatar.png"
export const HireCard = () => {
  return (
    <div className="m-10 bg-customLightBlue rounded flex items-center justify-evenly p-10">
        <div className="w-96">
            <img src={hire_a_pro} alt="" />
        </div>
        <div className="w-96 h-80 flex flex-col items-center justify-evenly">
            <div>
                <h1 className="font-bold text-4xl text-customDarkBlue text-center">HIRE TALENTED FREELANCERS</h1>
            </div>
            <div className="p-5 bg-customDarkBlue rounded flex justify-center items-center w-full">
                <h1 className="font-bold text-2xl text-customLightBlue">POST A JOB AND HIRE A PRO</h1>
                <img className="w-24 h-24" src={user_avatar} alt="" />
            </div>
        </div>
    </div>
  )
}
