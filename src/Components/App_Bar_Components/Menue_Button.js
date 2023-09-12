import { useState } from "react";
export default function Menue_Button(props) {
  const iconState = props.menuState;
  const [iconType, setIconType] = useState(iconState);
  const changeMenuState = props.changeMenuState;
  const changeState = () => {
    setIconType(!iconType)
    changeMenuState();
  };
  return (
    <div class="bar-menu">
      <i
        id="bar-list"
        onClick={changeState}
        class={iconType ? "ico-trans fas fa-bars" : "ico-trans fas fa-times"}
      ></i>
    </div>
  );
}
