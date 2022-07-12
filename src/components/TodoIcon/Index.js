import React from "react";
import "../../css/TodoIcon.css"
import { ReactComponent as Check} from '../../Icons/Check.svg'
import { ReactComponent as Edit} from '../../Icons/Edit.svg'
import { ReactComponent as Delete} from '../../Icons/Delete.svg'

const iconTypes ={
    "check": color => (
        <Check className="Icon-svg Icon-svg--Check" fill={color}/>
    ),
    "edit":color => (
        <Edit className="Icon-svg Icon-svg--Edit" fill={color}/>
    ),
    "delete":color => (
        <Delete className="Icon-svg Icon-svg--Delete" fill={color}/>
    )
}

function TodoIcon({type, color, onclick}){
    return(
        <span className={`Icon-container Icon-container--${type}`} onClick={onclick}>
            {iconTypes[type](color)}
        </span>
    )

}

export {TodoIcon}