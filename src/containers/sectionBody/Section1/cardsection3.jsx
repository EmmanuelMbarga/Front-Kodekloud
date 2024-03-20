import { NavigatCours } from "../../../model/NavigateCourse";
import { CardCourses } from "./cardCourses";

export const Cardsection3 = () => {
  const row = [];
  const Products = NavigatCours;

  Products.forEach((product) => {
   
    row.push(
      <CardCourses
        key={product.id}
        CadenasClose={product.CadenasClose}
        Nmbrecours={product.Nombrecours}
        chevron={product.chevronR.chevronright}
        TitleElemnt={product.titleelement}
        TitleLesson={product.sousMenu.titreLesson}
        Fiches={product.sousMenu.Fiche.fiche}
        play={product.sousMenu.playObject.play}
        Cours1={product.sousMenu.cours1}
        Cours2={product.sousMenu.cours2}
        Cours3={product.sousMenu.cours3}
        Cours4={product.sousMenu.cours4}
        Cours5={product.sousMenu.cours5}
        Cours6={product.sousMenu.cours6}
        Cours7={product.sousMenu.cours7}
        Cours8={product.sousMenu.cours8}
        Cours9={product.sousMenu.cours9}
        Cours10={product.sousMenu.cours10}
        Cours11={product.sousMenu.cours11}
        Cours12={product.sousMenu.cours12}
        Cours13={product.sousMenu.cours13}
        Cours14={product.sousMenu.cours14}
        Cours15={product.sousMenu.cours15}
        Cours16={product.sousMenu.cours16}
        Cours17={product.sousMenu.cours17}
        Cours18={product.sousMenu.cours18}
        Cours19={product.sousMenu.cours19}
        Cours20={product.sousMenu.cours20}
        Cours21={product.sousMenu.cours21}
        Cours22={product.sousMenu.cours22}
        Cours23={product.sousMenu.cours23}
        Cours24={product.sousMenu.cours24}
        Cours25={product.sousMenu.cours25}
        Cours26={product.sousMenu.cours26}
        Cours27={product.sousMenu.cours27}
        Cours28={product.sousMenu.cours28}
      />
    );
  });

  return (
    <div className="border-t w-[46rem] petitPortable:ml-0 petitPortable:m-auto petitPortable:w-[100%] portable:ml-0 portable:m-auto tablette:m-auto tablete:ml-0 tablete:w-[100%]">
      <div className="flex justify-between py-8 ">
        <h1 className=" text-xl font-Poppins font-semibold">
          courses content
        </h1>
        <button className="border border-sky-400 text-sky-500 py-1 px-4 rounded-full">
          expand all
        </button>
      </div>

      <div>
        <div>{row}</div>
      </div>
    </div>
  );
};
