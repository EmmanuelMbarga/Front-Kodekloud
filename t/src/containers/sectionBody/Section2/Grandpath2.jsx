import CardPath2 from "./CardPath";
import SectionPath1 from "./sectionPath1";
import { SectionPath2 } from "./sectionPath2";

export default function PathGeneral() {
  return (
    <>
      <div className="SpacekodeElements">
        <div className=" mt-12 py-10 pl-8 pr-10 border-l">
          <SectionPath1 />
          {/* <video src="https://www.youtube.com/watch?v=iV1YvmOlXZc" alt='video'/> */}
        </div>
        <div className=" pl-8 pr-10 border-l">
          <div className="grid grid-cols-2 gap-1 w-[24.5rem] py-10 border-t">
            <CardPath2
              text="8 Lessons"
              Logo="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec60a6f3741a3c85af1617_material-symbols_menu-book.svg"
            />
            <CardPath2
              text="Course Certificate"
              Logo="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec65c7b3a02fbffa1da601_material-symbols_verified.svg"
            />
            <CardPath2
              text="Demo"
              Logo="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6a603a92495bda3f2_special_ondemand_video.svg"
            />
            <CardPath2
              text="Community support"
              Logo="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6e5b15cd976560a3e_special_people_alt.svg"
            />
            <CardPath2
              text="107 Topics"
              Logo="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec65acdc39b8dd510c8694_material-symbols_article.svg"
            />
            <CardPath2
              text="11.00Hours of Video"
              Logo="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6e7fe502ef68f4268_material-symbols_video-library.svg"
            />
            <CardPath2
              text="Labs"
              Logo="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6da2b102225fcc8bc_material-symbols_laptop-mac.svg"
            />
          </div>
          <SectionPath2 />
          <p className="text-xs my-2 text-center text-black">
            When you join KodeKloud, {"you'll"} get access to all of our premium
            courses and hands-on labs.
          </p>
          {/* <video src="https://www.youtube.com/watch?v=iV1YvmOlXZc" alt='video'/> */}
        </div>
      </div>
    </>
  );
}
