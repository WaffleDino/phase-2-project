//here's the component where you put in strength, dex, const, intelligence, wisdom, charisma scores
//also! tied to saving throws--will need to do that math. can make that stuff a child component later if need be

//probably will need to make child component for the next section, armor class/initiative/speed, all that stuff. 

import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Stats from "./Stats"
import Modifiers from "./Modifiers"
import { NavLink } from "react-router-dom";




function AbilityScores () {

const allStats = ['str','dex','con','int','wis','cha']
const [skills, setSkills] = useState([])




useEffect(() => {
fetch('https://www.dnd5eapi.co/api/skills')
.then(response => response.json())
.then(json => setSkills(json.results))
}, [])


// const renderSkills = () => {
//    if (!!skills) {
//     console.log(skills)
//     return skills.map(eachSkill => {
//         return (
//             <ul>
//             <li>{eachSkill.name}: {statData.strMod}</li>
//             </ul>
//             )
//     })}
// }
// const [statMod, setStatMod] = useState({
//     str:'',
//     strMod:'',
//     dex:'',
//     dexMod:'',
//     con:'',
//     conMod:'',
//     int:'',
//     intMod:'',
//     wis:'',
//     widMod:'',
//     cha:'',
//     ChaMod:''
// })






// const renderSavingThrowStr = () => {
//     if(!!statData.str) {
//      if (statData.str == 1){
//      return (
//          "-5"
//      )
//      } else if (statData.str == 2 || statData.str == 3) {
//      return (
//          "-4"
//      )
//      }else if (statData.str == 4 || statData.str == 5) {
//          return (
//              "-3"
//          )
//      }else if (statData.str == 6 || statData.str == 7) {
//          return (
//              "-2"
//          )
//      }else if (statData.str == 8 || statData.str == 9) {
//          return (
//              "-1"
//          )
//      }else if (statData.str == 10 || statData.str == 11) {
//          return (
//              "0"
//          )
//      }else if (statData.str == 12 || statData.str == 13) {
//          return (
//              "+1"
//          )
//      }else if (statData.str == 14 || statData.str == 15) {
//          return (
//              "+2"
//          )
//      }else if (statData.str == 16 || statData.str == 17) {
//          return (
//              "+3"
//          )
//      }else if (statData.str == 18 || statData.str == 19) {
//          return (
//              "+4"
//          )
//      }else {
//          return (
//              "+5"
//          )
//      }
//  } 
//  }

// const renderSavingThrowDex = () => {
// if(!!statData.dex) {
//     if (statData.dex == 1){
//     return (<div>
//         Dexterity: -5
//     </div>)
//     } else if (statData.dex == 2 || statData.dex == 3) {
//     return (<div>
//         Dexterity: -4
//     </div>)
//     }else if (statData.dex == 4 || statData.dex == 5) {
//         return (<div>
//             Dexterity: -3
//         </div>)
//     }else if (statData.dex == 6 || statData.dex == 7) {
//         return (<div>
//             Dexterity: -2
//         </div>)
//     }else if (statData.dex == 8 || statData.dex == 9) {
//         return (<div>
//             Dexterity: -1
//         </div>)
//     }else if (statData.dex == 10 || statData.dex == 11) {
//         return (<div>
//             Dexterity: 0
//         </div>)
//     }else if (statData.dex == 12 || statData.dex == 13) {
//         return (<div>
//             Dexterity: +1
//         </div>)
//     }else if (statData.dex == 14 || statData.dex == 15) {
//         return (<div>
//             Dexterity: +2
//         </div>)
//     }else if (statData.dex == 16 || statData.dex == 17) {
//         return (<div>
//             Dexterity: +3
//         </div>)
//     }else if (statData.dex == 18 || statData.dex == 19) {
//         return (<div>
//             Dexterity: +4
//         </div>)
//     }else {
//         return (<div>
//             Dexterity: +5
//         </div>)
//     }
// } 
// }

// const renderSavingThrowCon = () => {
//     if(!!statData.con) {
//         if (statData.con == 1){
//         return (<div>
//             Constitution: -5
//         </div>)
//         } else if (statData.con == 2 || statData.con == 3) {
//         return (<div>
//             Constitution: -4
//         </div>)
//         }else if (statData.con == 4 || statData.con == 5) {
//             return (<div>
//                 Constitution: -3
//             </div>)
//         }else if (statData.con == 6 || statData.con == 7) {
//             return (<div>
//                 Constitution: -2
//             </div>)
//         }else if (statData.con == 8 || statData.con == 9) {
//             return (<div>
//                 Constitution: -1
//             </div>)
//         }else if (statData.con == 10 || statData.con == 11) {
//             return (<div>
//                 Constitution: 0
//             </div>)
//         }else if (statData.con == 12 || statData.con == 13) {
//             return (<div>
//                 Constitution: +1
//             </div>)
//         }else if (statData.con == 14 || statData.con == 15) {
//             return (<div>
//                 Constitution: +2
//             </div>)
//         }else if (statData.con == 16 || statData.con == 17) {
//             return (<div>
//                 Constitution: +3
//             </div>)
//         }else if (statData.con == 18 || statData.con == 19) {
//             return (<div>
//                 Constitution: +4
//             </div>)
//         }else {
//             return (<div>
//                 Constitution: +5
//             </div>)
//         }
//     } 
//     }

//     const renderSavingThrowInt = () => {
//         if(!!statData.int) {
//             if (statData.int == 1){
//             return (<div>
//                 Intelligence: -5
//             </div>)
//             } else if (statData.int == 2 || statData.int == 3) {
//             return (<div>
//                 Intelligence: -4
//             </div>)
//             }else if (statData.int == 4 || statData.int == 5) {
//                 return (<div>
//                     Intelligence: -3
//                 </div>)
//             }else if (statData.int == 6 || statData.int == 7) {
//                 return (<div>
//                     Intelligence: -2
//                 </div>)
//             }else if (statData.int == 8 || statData.int == 9) {
//                 return (<div>
//                     Intelligence: -1
//                 </div>)
//             }else if (statData.int == 10 || statData.int == 11) {
//                 return (<div>
//                     Intelligence: 0
//                 </div>)
//             }else if (statData.int == 12 || statData.int == 13) {
//                 return (<div>
//                     Intelligence: +1
//                 </div>)
//             }else if (statData.int == 14 || statData.int == 15) {
//                 return (<div>
//                     Intelligence: +2
//                 </div>)
//             }else if (statData.int == 16 || statData.int == 17) {
//                 return (<div>
//                     Intelligence: +3
//                 </div>)
//             }else if (statData.int == 18 || statData.int == 19) {
//                 return (<div>
//                     Intelligence: +4
//                 </div>)
//             }else {
//                 return (<div>
//                     Intelligence: +5
//                 </div>)
//             }
//         } 
//         }

//         const renderSavingThrowWis = () => {
//             if(!!statData.wis) {
//                 if (statData.wis == 1){
//                 return (<div>
//                     Wisdom: -5
//                 </div>)
//                 } else if (statData.wis == 2 || statData.wis == 3) {
//                 return (<div>
//                     Wisdom: -4
//                 </div>)
//                 }else if (statData.wis == 4 || statData.wis == 5) {
//                     return (<div>
//                         Wisdom: -3
//                     </div>)
//                 }else if (statData.wis == 6 || statData.wis == 7) {
//                     return (<div>
//                         Wisdom: -2
//                     </div>)
//                 }else if (statData.wis == 8 || statData.wis == 9) {
//                     return (<div>
//                         Wisdom: -1
//                     </div>)
//                 }else if (statData.wis == 10 || statData.wis == 11) {
//                     return (<div>
//                         Wisdom: 0
//                     </div>)
//                 }else if (statData.wis == 12 || statData.wis == 13) {
//                     return (<div>
//                         Wisdom: +1
//                     </div>)
//                 }else if (statData.wis == 14 || statData.wis == 15) {
//                     return (<div>
//                         Wisdom: +2
//                     </div>)
//                 }else if (statData.wis == 16 || statData.wis == 17) {
//                     return (<div>
//                         Wisdom: +3
//                     </div>)
//                 }else if (statData.wis == 18 || statData.wis == 19) {
//                     return (<div>
//                         Wisdom: +4
//                     </div>)
//                 }else {
//                     return (<div>
//                         Wisdom: +5
//                     </div>)
//                 }
//             } 
//             }

//             const renderSavingThrowCha = () => {
//                 if(!!statData.cha) {
//                     if (statData.cha == 1){
//                     return (<div>
//                         Charisma: -5
//                     </div>)
//                     } else if (statData.cha == 2 || statData.cha == 3) {
//                     return (<div>
//                         Charisma: -4
//                     </div>)
//                     }else if (statData.cha == 4 || statData.cha == 5) {
//                         return (<div>
//                             Charisma: -3
//                         </div>)
//                     }else if (statData.cha == 6 || statData.cha == 7) {
//                         return (<div>
//                             Charisma: -2
//                         </div>)
//                     }else if (statData.cha == 8 || statData.cha == 9) {
//                         return (<div>
//                             Charisma: -1
//                         </div>)
//                     }else if (statData.cha == 10 || statData.cha == 11) {
//                         return (<div>
//                             Charisma: 0
//                         </div>)
//                     }else if (statData.cha == 12 || statData.cha == 13) {
//                         return (<div>
//                             Charisma: +1
//                         </div>)
//                     }else if (statData.cha == 14 || statData.cha == 15) {
//                         return (<div>
//                             Charisma: +2
//                         </div>)
//                     }else if (statData.cha == 16 || statData.cha == 17) {
//                         return (<div>
//                             Charisma: +3
//                         </div>)
//                     }else if (statData.cha == 18 || statData.cha == 19) {
//                         return (<div>
//                             Charisma: +4
//                         </div>)
//                     }else {
//                         return (<div>
//                             Charisma: +5
//                         </div>)
//                     }
//                 } 
//                 }

const [statData, setStatData] = useState({
    str:'',
    strMod:'',
    dex:'',
    dexMod:'',
    con:'',
    conMod:'',
    int:'',
    intMod:'',
    wis:'',
    widMod:'',
    cha:'',
    ChaMod:''
})

const handleStatChange = (e) => {
    setStatData({
        ...statData,
        [e.target.name]: e.target.value
    })
}

   

   return <div>
        <h1>ability scores</h1>
        
        <Stats statData={statData} handleStatChange={handleStatChange}/>
        {/* <Modifiers   statData={statData} statMod={statMod} setStatMod={setStatMod} handleModChange={handleModChange} /> */}
        <form id="skillsForm">
            {/* {renderSkills()} */}
        </form>

        <div>
            <NavLink to="characterbio">
                <button>Back</button>
            </NavLink>
            <NavLink to="equipment">
                <button>Next</button>
            </NavLink>
        </div>

        </div>

}

export default AbilityScores;