import { useState } from "react";
import { NavigatCours } from "../../../model/NavigateCourse";

// NavigatCours

export const CardCourses = (props) => {
  const [allume, setAllume] = useState(false);

  const handlerCliked = () => {
    setAllume(!allume);
  };
  
  return (
    <>
      <div className=" h-34 bg-gray-100 my-2 p-4 rounded-lg">
        {/* --------------------------------------------------------------boxMenu-course-------------------------------------------------------------- */}
        <div className="flex justify-between text-base font-Poppins">
          <div className="flex items-center justify-items-center">
            <button onClick={handlerCliked} className={!allume ? "Rotatechevronfalse" : "RotatechevronTrue"}>
              {props.chevron}
            </button>
            <h1 className="capitalize mx-4 text-gray-600 ">
              {props.TitleElemnt}
            </h1>
            <img src={props.CadenasClose} />
          </div>
          <div>
            <p className="text-sm text-gray-500">
              {props.Nmbrecours}
            </p>
          </div>
        </div>

        {/* ----------------------------------------------------------------sousMenus-Course---------------------------------------------------------------- */}
        {allume && (
          <div>
            <div className="mt-6 border-t border-gray-300 ">
              <h1 className="text-sm font-Poppins font-semibold py-8 ">{props.TitleLesson}</h1>
              {/* <div className="flex text-sm font-Poppins font-medium ">
                    <span className="mr-4 text-slate-600" >{props.play}</span>
                    <span className="text-slate-500">{props.Cours1}</span>
              </div> */}
              <Cours PlaySvg={props.play} CoursElement={props.Cours1}/>
              <Cours PlaySvg={props.play} CoursElement={props.Cours2}/>
              <Cours PlaySvg={props.play} CoursElement={props.Cours3}/>
              <Cours PlaySvg={props.play} CoursElement={props.Cours4}/>
              <Cours PlaySvg={props.play} CoursElement={props.Cours5}/>
              <Cours PlaySvg={props.play} CoursElement={props.Cours6}/>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
};


const Cours=(props)=>{
    return(
      <>
          <div className="flex text-base font-Poppins my-4 font-medium ">
                    <span className="mr-4 text-slate-600" >{props.PlaySvg}</span>
                    <span className="text-slate-500">{props.CoursElement}</span>
              </div>
      </>
    )
}