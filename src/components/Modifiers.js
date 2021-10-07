// import React, { useState } from "react";

// function Modifiers ({statData, statMod, setStatMod, handleModChange}) {


//     // const renderSavingThrowStr = () => {
//     //     if(!!statData.str) {
//     //      if (statData.str == 1){
//     //      return (
//     //          "-5"
//     //      )
//     //      } else if (statData.str == 2 || statData.str == 3) {
//     //      return (
//     //          "-4"
//     //      )
//     //      }else if (statData.str == 4 || statData.str == 5) {
//     //          return (
//     //              "-3"
//     //          )
//     //      }else if (statData.str == 6 || statData.str == 7) {
//     //          return (
//     //              "-2"
//     //          )
//     //      }else if (statData.str == 8 || statData.str == 9) {
//     //          return (
//     //              "-1"
//     //          )
//     //      }else if (statData.str == 10 || statData.str == 11) {
//     //          return (
//     //              "0"
//     //          )
//     //      }else if (statData.str == 12 || statData.str == 13) {
//     //          return (
//     //              "+1"
//     //          )
//     //      }else if (statData.str == 14 || statData.str == 15) {
//     //          return (
//     //              "+2"
//     //          )
//     //      }else if (statData.str == 16 || statData.str == 17) {
//     //          return (
//     //              "+3"
//     //          )
//     //      }else if (statData.str == 18 || statData.str == 19) {
//     //          return (
//     //              "+4"
//     //          )
//     //      }else {
//     //          return (
//     //              "+5"
//     //          )
//     //      }
//     //  } 
//     //  }
     
//     //  const renderSavingThrowDex = () => {
//     //  if(!!statData.dex) {
        
//     //      if (statData.dex == 1){
//     //      return (
//     //          "-5"
//     //      )
//     //      } else if (statData.dex == 2 || statData.dex == 3) {
//     //      return (
//     //          "-4"
//     //      )
//     //      }else if (statData.dex == 4 || statData.dex == 5) {
//     //          return (
//     //              "-3"
//     //          )
//     //      }else if (statData.dex == 6 || statData.dex == 7) {
//     //          return (
//     //              "-2"
//     //          )
//     //      }else if (statData.dex == 8 || statData.dex == 9) {
//     //          return (
//     //              "-1"
//     //          )
//     //      }else if (statData.dex == 10 || statData.dex == 11) {
//     //          return (
//     //              "0"
//     //          )
//     //      }else if (statData.dex == 12 || statData.dex == 13) {
//     //          return (
//     //              "+1"
//     //          )
//     //      }else if (statData.dex == 14 || statData.dex == 15) {
//     //          return (
//     //              "+2"
//     //          )
//     //      }else if (statData.dex == 16 || statData.dex == 17) {
//     //          return (
//     //              "+3"
//     //          )
//     //      }else if (statData.dex == 18 || statData.dex == 19) {
//     //          return (
//     //              "+4"
//     //          )
//     //      }else {
//     //          return (
//     //              "+5"
//     //          )
//     //      }
//     //  } 
//     //  }
     
//     //  const renderSavingThrowCon = () => {
//     //      if(!!statData.con) {
//     //          if (statData.con == 1){
//     //          return (
//     //              "-5"
//     //          )
//     //          } else if (statData.con == 2 || statData.con == 3) {
//     //          return (
//     //              "-4"
//     //          )
//     //          }else if (statData.con == 4 || statData.con == 5) {
//     //              return (
//     //                  "-3"
//     //              )
//     //          }else if (statData.con == 6 || statData.con == 7) {
//     //              return (
//     //                  "-2"
//     //              )
//     //          }else if (statData.con == 8 || statData.con == 9) {
//     //              return (
//     //                  "-1"
//     //              )
//     //          }else if (statData.con == 10 || statData.con == 11) {
//     //              return (
//     //                  "0"
//     //              )
//     //          }else if (statData.con == 12 || statData.con == 13) {
//     //              return (
//     //                  "+1"
//     //              )
//     //          }else if (statData.con == 14 || statData.con == 15) {
//     //              return (
//     //                  "+2"
//     //              )
//     //          }else if (statData.con == 16 || statData.con == 17) {
//     //              return (
//     //                  "+3"
//     //              )
//     //          }else if (statData.con == 18 || statData.con == 19) {
//     //              return (
//     //                  "+4"
//     //              )
//     //          }else {
//     //              return (
//     //                  "+5"
//     //              )
//     //          }
//     //      } 
//     //      }
     
//     //      const renderSavingThrowInt = () => {
//     //          if(!!statData.int) {
//     //              if (statData.int == 1){
//     //              return (
//     //                  "-5"
//     //              )
//     //              } else if (statData.int == 2 || statData.int == 3) {
//     //              return (
//     //                  "-4"
//     //              )
//     //              }else if (statData.int == 4 || statData.int == 5) {
//     //                  return (
//     //                      "-3"
//     //                  )
//     //              }else if (statData.int == 6 || statData.int == 7) {
//     //                  return (
//     //                      "-2"
//     //                  )
//     //              }else if (statData.int == 8 || statData.int == 9) {
//     //                  return (
//     //                      "-1"
//     //                  )
//     //              }else if (statData.int == 10 || statData.int == 11) {
//     //                  return (
//     //                      "0"
//     //                  )
//     //              }else if (statData.int == 12 || statData.int == 13) {
//     //                  return (
//     //                      "+1"
//     //                  )
//     //              }else if (statData.int == 14 || statData.int == 15) {
//     //                  return (
//     //                      "+2"
//     //                  )
//     //              }else if (statData.int == 16 || statData.int == 17) {
//     //                  return (
//     //                      "+3"
//     //                  )
//     //              }else if (statData.int == 18 || statData.int == 19) {
//     //                  return (
//     //                      "+4"
//     //                  )
//     //              }else {
//     //                  return (
//     //                      "+5"
//     //                  )
//     //              }
//     //          } 
//     //          }
     
//     //          const renderSavingThrowWis = () => {
//     //              if(!!statData.wis) {
//     //                  if (statData.wis == 1){
//     //                  return (
//     //                      "-5"
//     //                  )
//     //                  } else if (statData.wis == 2 || statData.wis == 3) {
//     //                  return (
//     //                      "-4"
//     //                  )
//     //                  }else if (statData.wis == 4 || statData.wis == 5) {
//     //                      return (
//     //                          "-3"
//     //                      )
//     //                  }else if (statData.wis == 6 || statData.wis == 7) {
//     //                      return (
//     //                          "-2"
//     //                      )
//     //                  }else if (statData.wis == 8 || statData.wis == 9) {
//     //                      return (
//     //                          "-1"
//     //                      )
//     //                  }else if (statData.wis == 10 || statData.wis == 11) {
//     //                      return (
//     //                          "0"
//     //                      )
//     //                  }else if (statData.wis == 12 || statData.wis == 13) {
//     //                      return (
//     //                          "+1"
//     //                      )
//     //                  }else if (statData.wis == 14 || statData.wis == 15) {
//     //                      return (
//     //                          "+2"
//     //                      )
//     //                  }else if (statData.wis == 16 || statData.wis == 17) {
//     //                      return (
//     //                          "+3"
//     //                      )
//     //                  }else if (statData.wis == 18 || statData.wis == 19) {
//     //                      return (
//     //                         "+4"
//     //                      )
//     //                  }else {
//     //                      return (
//     //                          "+5"
//     //                      )
//     //                  }
//     //              } 
//     //              }
     
//     //              const renderSavingThrowCha = () => {
//     //                  if(!!statData.cha) {
//     //                      if (statData.cha == 1){
//     //                      return (
//     //                          "-5"
//     //                      )
//     //                      } else if (statData.cha == 2 || statData.cha == 3) {
//     //                      return (
//     //                          "-4"
//     //                      )
//     //                      }else if (statData.cha == 4 || statData.cha == 5) {
//     //                          return (
//     //                              "-3"
//     //                          )
//     //                      }else if (statData.cha == 6 || statData.cha == 7) {
//     //                          return (
//     //                              "-2"
//     //                          )
//     //                      }else if (statData.cha == 8 || statData.cha == 9) {
//     //                          return (
//     //                              "-1"
//     //                          )
//     //                      }else if (statData.cha == 10 || statData.cha == 11) {
//     //                          return (
//     //                             "0"
//     //                          )
//     //                      }else if (statData.cha == 12 || statData.cha == 13) {
//     //                          return (
//     //                              "+1"
//     //                          )
//     //                      }else if (statData.cha == 14 || statData.cha == 15) {
//     //                          return (
//     //                              "+2"
//     //                          )
//     //                      }else if (statData.cha == 16 || statData.cha == 17) {
//     //                          return (
//     //                              "+3"
//     //                          )
//     //                      }else if (statData.cha == 18 || statData.cha == 19) {
//     //                          return (
//     //                              "+4"
//     //                          )
//     //                      }else {
//     //                          return (
//     //                              "+5"
//     //                          )
//     //                      }
//     //                  } 
//     //                  }
 
                      
//                     // const strModifier = renderSavingThrowStr()


//                     // const [statMod, setStatMod] = useState({
//                     //     strMod: strModifier,
//                     //     dexMod: renderSavingThrowDex(),
//                     //     conMod: renderSavingThrowCon(),
//                     //     intMod: renderSavingThrowInt(),
//                     //     wisMod: renderSavingThrowWis(),
//                     //     chaMod: renderSavingThrowCha()
//                     // })

//                     // function setStateModState () {
//                     //     setStatMod
//                     // }

// // function setStatModifiers () {


// //                     setStatMod({
// //                         ...statMod,
// //                         str:renderSavingThrowStr()
// //                     })
// //                 }



// const handleAbilitySubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:3000/abilityScores", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(statData)
//       })
//       .then(response => response.json())
//      }
  

//                      return (

//                          <div>
//                             {console.log(statMod)}
//                              <div>
//                              <h3>Ability Modifier:</h3>
//                              <form id="modForm" onSubmit={handleAbilitySubmit}>
//                             <label>  STR Modifier:
//                                 <input type="number" min="1" max="21"name="str" placeholder="10" onChange={handleModChange} value={statMod.str}/>
//                             </label>
//                             <label> <a href="#" data-toggle="tooltip" title="Dexterity measures agility, reflexes, and balance. Associated Character Skills: Acrobatics, Sleight of Hand, and Stealth">Dexterity (DEX): </a>
//                                 <input type="number" min="1" max="21"name="dex" placeholder="10" onChange={handleModChange} value={statMod.dex} />
//                             </label>
//                             <label> <a href="#" data-toggle="tooltip" title="Constitution measures health, stamina, and vital force. Associated Character Skills: Acrobatics, Sleight of Hand, and Stealth">Constitution (CON): </a>
//                                 <input type="number" min="1" max="21"name="con" placeholder="10" onChange={handleModChange} value={statMod.con} />
//                             </label>
//                             <label> <a href="#" data-toggle="tooltip" title="Intelligence measures mental acuity, accuracy of recall, and the ability to reason. Associated Character Skills: Arcana, History, Investigation, Nature, and Religion">Intelligence (INT): </a>
//                                 <input type="number" min="1" max="21"name="int" placeholder="10" onChange={handleModChange} value={statMod.int} />
//                             </label>
//                             <label> <a href="#" data-toggle="tooltip" title="Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition. Associated Character Skills: Animal Handling, Insight, Medicin, Perception, and Survival">Wisdom (WIS): </a>
//                                 <input type="number" min="1" max="21"name="wis" placeholder="10" onChange={handleModChange} value={statMod.wis} />
//                             </label>
//                             <label> <a href="#" data-toggle="tooltip" title="Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality. Associated Character Skills: Deception, Intimidation, Performance, and Persuasion"> Charisma (CHA): </a>
//                                 <input type="number" min="1" max="21"name="cha" placeholder="10" onChange={handleModChange} value={statMod.cha} />
//                             </label>
//                             <input type="submit" value="Confirm Stats"/>
//                         </form>







//                              {/* <div>Strength: {statMod.str}</div>
//                             <div>Dexterity:</div>
//                             <div>Constitution: {renderSavingThrowCon()}</div>
//                             <div>Intelligence: {renderSavingThrowInt()}</div>
//                             <div>Wisdom: {renderSavingThrowWis()}</div>
//                             <div>Charisma: {renderSavingThrowCha()}</div> */}
//                             </div>
//                          </div>
//                      )
// }

// export default Modifiers