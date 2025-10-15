import AiServicesImage from "../../assets/jobTypes/Ai-services-image.svg";
import ProgrammingandTech from "../../assets/jobTypes/Programming-and-tech-image.svg"
import GraphicandDesign from "../../assets/jobTypes/Graphic-design-image.svg"
import DigitalMarketing from "../../assets/jobTypes/Digital-Marketing-image.svg"
import VideoandAnimation from "../../assets/jobTypes/Video-and-animation-image.svg"
import Business from "../../assets/jobTypes/Business-Image.svg"
import Consulting from "../../assets/jobTypes/Consulting-image.svg"
import MusicandAudio from "../../assets/jobTypes/Music-and-audio-image.svg"
export const JobTypes = () => {
    const jobTypes = [
        {
            image: ProgrammingandTech,
            text: "Programming and Tech"
        },
        {
            image: GraphicandDesign,
            text: "Graphic and Design"
        },
        {
            image: DigitalMarketing,
            text: "Digital Marketing"
        },
        {
            image: VideoandAnimation,
            text: "Video and Animation"
        },
        {
            image: AiServicesImage,
            text: "Ai Services"
        },
        {
            image: Business,
            text: "Business"
        },
        {
            image: Consulting,
            text: "Consulting"
        },
        {
            image: ProgrammingandTech,
            text: "Music & Audio"
        },
    ]
  return (
    <div className="w-full flex justify-evenly mt-5">
        {
            jobTypes.map((item) => (
                <div className="bg-customLightBlue p-5 rounded w-36">
                    <img className="w-10" src={item.image} alt="" />
                    <p className="font-bold mt-2">{item.text}</p>
                </div>
            ))
        }
    </div>
  )
}
