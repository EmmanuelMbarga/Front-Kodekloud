import BtnSousmenu from "./btnSousmenu";
import CardDomain from "./cardDomain";
import { CardRoleBase } from "./cardRoleBase";


function SousMenu() {
  return (
    <>

    <ul className="sousMenuPrimary">
        <div className="sousMenuContainer ">
          <li className="sousMenucontainerElement">
            <h1 className="sousMenucontainerElementsTitle">Domaine-based</h1>
            <div className="displositionGrid1">
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
            </div>
            <div className="displositionGrid2">
              <CardDomain />
              <CardDomain />
              <CardDomain />
              <CardDomain />
            </div>
            <>
              <BtnSousmenu/>
            </>
          </li>
          <li className="conrRoleBased">
            <h1 className="sousMenucontainerElementsTitle">Role-Based</h1>
            <>
              <CardRoleBase />
              <CardRoleBase />
              <CardRoleBase />
              <CardRoleBase />
              <CardRoleBase />
              <CardRoleBase />
              <CardRoleBase />
            </>
          </li>
        </div>
      </ul>
      
    </>
  );
}

export default SousMenu;
