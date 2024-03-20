import { CardSection1 } from "./cardSction1";
import { Cardsection2 } from "./cardsection2";
import { Cardsection3 } from "./cardsection3";
import { IconLogiciel } from "./iconLogiciel";


export default function Section1() {
  return (
    <div className="contenentKodeElements">
      <CardSection1/>
      <IconLogiciel/>
      <Cardsection2/>
      <Cardsection3/>
    </div >
  );
}
