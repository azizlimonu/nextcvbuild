import loadable from "@loadable/component"
// import { IconBaseProps, IconType } from "react-icons/lib"
import style from '../../styles/Icons.module.css'

export const Icons = ({ nameIcon, className, onClick, link }) => {

  const lib = nameIcon.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[0].toLocaleLowerCase();

  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {

    resolveComponent: (el) => el[nameIcon]

  });

  const classIcon = `${style[className]} ${link ? style.link : ''}`;

  return (
    <ElementIcon
      className={classIcon}
      size={20}
      onClick={onClick}
    />
  )
}