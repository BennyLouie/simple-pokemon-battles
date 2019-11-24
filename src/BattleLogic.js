const battleLogic = (user_action, opponent_action, userPokemon, first, second) => {
    const user_roll = Math.floor(Math.random() * 3) + 1
    const opponent_roll = Math.floor(Math.random() * 3) + 1
    let firstHealth = document.getElementById(`${first.name}-health`)
      ? document.getElementById(`${first.name}-health`)
      : 1
    let secondHealth = document.getElementById(`${second.name}-health`)
      ? document.getElementById(`${second.name}-health`)
      : 1
    if (first === userPokemon) {
        if (user_action === 1 && opponent_action === 1) {
          console.log("Yup")
          if (user_roll > opponent_roll) {
              if (first.atk > second.def) {
                console.log(`${first.name} attacks ${second.name}`)
              secondHealth.value -= 2
              console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                console.log(`${second.name}'s attack misses! Turn Ends!`)
              } else {
                console.log(`${first.name} wins!`)
              }
              } else if (first.atk <= second.def) {
                  console.log(`${first.name} attacks ${second.name}`)
                secondHealth.value -= 1
                console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                console.log(`${second.name}'s attack misses! Turn ends!`)
              } else {
                console.log(`${first.name} wins!`)
              }
            }
          } else if (user_roll < opponent_roll) {
            console.log(`${first.name}'s attack misses!`)
              if (second.atk > first.def) {
                console.log(`${second.name} attacks ${first.name}`)
              firstHealth.value -= 2
              console.log(`${first.name} has ${firstHealth.value} health left`)
              if (firstHealth.value > 0) {
                console.log("Turn Ends!")
              } else {
                console.log(`${first.name} loses!`)
              }
              } else if (second.atk <= first.def) {
                  console.log(`${second.name} attacks ${first.name}`)
              firstHealth.value -= 1
              console.log(`${first.name} has ${firstHealth.value} health left`)
              if (firstHealth.value > 0) {
                console.log("Turn ends!")
              } else {
                console.log(`${first.name} loses!`)
              }
            }
          } else {
              if (first.atk > second.def) {
                console.log(`${first.name} attacks ${second.name}`)
              secondHealth.value -= 2
              console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                  if (second.atk > first.def) {
                    console.log(`${second.name} attacks ${first.name}`)
                  firstHealth.value -= 2
                  console.log(`${first.name} has ${firstHealth.value} health left`)
                  if (firstHealth.value > 0) {
                    console.log("Turn ends!")
                  } else {
                    console.log(`${first.name} loses!`)
                  }
                  } else if (second.atk <= first.def) {
                      console.log(`${second.name} attacks ${first.name}`)
                  firstHealth.value -= 1
                  console.log(`${first.name} has ${firstHealth.value} health left`)
                  if (firstHealth.value > 0) {
                    console.log("Turn Ends!")
                  } else {
                    console.log(`${first.name} loses!`)
                  }
                }
              } else {
                console.log(`${second.name} has ${secondHealth.value} health left`)
                console.log(`${first.name} wins!`)
              }
              } else if (first.atk <= second.def) {
                  console.log(`${first.name} attacks ${second.name}`)
                  secondHealth.value -= 1
                  console.log(`${second.name} has ${secondHealth.value} health left!`)
                  if (secondHealth.value > 0) {
                    console.log(`${second.name} attacks ${first.name}`)
                    if (second.atk > first.def) {
                      firstHealth.value -= 2
                    } else if (second.atk <= first.def) {
                      firstHealth.value -= 1
                    }
                    console.log(`${first.name} has ${firstHealth.value} health left`)
                    if (firstHealth.value > 0) {
                      console.log("Turn Ends!")
                    } else {
                      console.log(`${first.name} loses!`)
                    }
                  } else {
                    console.log(`${first.name} wins!`)
                  }
            }
          }
        } else if (user_action === 1 && opponent_action === 2) {
        //   const user_roll = Math.floor(Math.random() * 3) + 1
        //   const opponent_roll = Math.floor(Math.random() * 3) + 1
          if (user_roll > opponent_roll) {
              if (first.atk > second.def) {
                console.log(`${first.name} attacks ${second.name}`)
              console.log(`${second.name} defends! Still took some damage...`)
                  secondHealth.value -= 1
                  console.log(`${second.name} has ${secondHealth.value} health left.`)
              if (secondHealth.value > 0) {
                console.log("Turn Ends!")
              } else {
                console.log(`${first.name} wins!`)
              }
              } else if (first.atk <= second.def) {
                  console.log(`${first.name} attacks ${second.name}`)
              console.log(`${second.name} defends! Nothing happens!`)
              console.log("Turn ends!")
            }
          } else if (user_roll < opponent_roll) {
              if (first.atk > second.def) {
                console.log(`${first.name} attacks ${second.name}`)
              console.log(`${second.name} defends! Still took some damage...`)
                  secondHealth.value -= 1
                  console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                console.log("Turn ends!")
              } else {
                console.log(`${first.name} wins!`)
              }
              } else if (first.atk < second.def) {
                  console.log(`${first.name} attacks ${second.name}`)
              console.log(`${second.name} defends! ${first.name} accidentally hurts itself!`)
                  firstHealth.value -= 2
                  console.log(`${first.name} has ${firstHealth.value} health left`)
              if (firstHealth.value > 0) {
                console.log("Turn ends!")
              } else {
                console.log(`${first.name} loses!`)
              }
              } else if (first.atk === second.def) {
                  console.log(`${first.name} attacks ${second.name}`)
                  console.log(`${second.name} defends!`)
              console.log(`${first.name} accidentally hurts itself!`)
                firstHealth.value -= 1
                console.log(`${first.name} has ${firstHealth.value} health left!`)
              if (firstHealth.value > 0) {
                console.log("Turn Ends!")
              } else {
                console.log(`${first.name} loses!`)
              }
            }
          } else if (user_roll === opponent_roll) {
            console.log(`${first.name} misses! Turn Ends!`)
          }
        } else if (user_action === 2 && opponent_action === 1) {
        //   const user_roll = Math.floor(Math.random() * 3) + 1
        //   const opponent_roll = Math.floor(Math.random() * 3) + 1
          if (user_roll > opponent_roll) {
              if (first.def > second.atk) {
                console.log(`${second.name} attacks ${first.name}`)
              console.log(`${first.name} defends! ${second.name} accidentally hurts itself!`)
                secondHealth.value -= 2
                console.log(`${second.name} has ${secondHealth.value} health left!`)
              if (secondHealth.value > 0) {
                console.log("Turn Ends!")
              } else {
                console.log(`${first.name} wins!`)
              }
              } else if (first.def <= second.atk) {
                  console.log(`${second.name} attacks ${first.name}`)
              console.log(`${first.name} defends! Nothing happens!`)
              console.log("Turn ends!")
            }
          } else if (user_roll < opponent_roll) {
              if (first.def > second.atk) {
                console.log(`${second.name} attacks ${first.name}`)
              console.log(`${first.name} defends! Turn Ends! ${second.name} accidentally hurts itself!`)
                  secondHealth.value -= 1
                  console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                console.log("Turn ends!")
              } else {
                console.log(`${first.name} wins!`)
              }
              } else if (first.def <= second.atk) {
                  console.log(`${second.name} attacks ${first.name}`)
              console.log(`${first.name} defends! Turn ends!`)
            }
          } else if (user_roll === opponent_roll) {
            console.log(`${second.name} misses! Turn Ends!`)
          }
        } else if (user_action === 2 && opponent_action === 2) {
          console.log(
            "The two Pokemon have a staring contest... No one makes a move..."
          )
        }
    } else {
        if (user_action === 1 && opponent_action === 1) {
            if (user_roll > opponent_roll) {
                if (first.atk > second.def) {
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 2
                    console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                console.log(`${second.name}'s attack misses! Turn ends!`)
              } else {
                console.log(`${first.name} wins!`)
              }
                } else if (first.atk <= second.def) {
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 1
                    console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                console.log(`${second.name}'s attack misses! Turn Ends!`)
              } else {
                console.log(`${first.name} wins!`)
              }
            }
          } else if (user_roll < opponent_roll) {
            console.log(`${first.name}'s attack misses!`)
            if (second.atk > first.def) {
                console.log(`${second.name} attacks ${first.name}`)
                firstHealth.value -= 2
                console.log(`${first.name} has ${firstHealth.value} health left`)
              if (firstHealth.value > 0) {
                console.log("Turn Ends!")
              } else {
                console.log(`${first.name} loses!`)
              }
            } else if (second.atk <= first.def) {
                console.log(`${second.name} attacks ${first.name}`)
              firstHealth.value -= 1
              console.log(`${first.name} has ${firstHealth.value} health left`)
              if (firstHealth.value > 0) {
                console.log("Turn ends!")
              } else {
                console.log(`${first.name} loses!`)
              }
            }
          } else {
                if (first.atk > second.def) {
                console.log(`${first.name} attacks ${second.name}`)
              secondHealth.value -= 2
              console.log(`${second.name} has ${secondHealth.value} health left`)
              if (secondHealth.value > 0) {
                  if (second.atk > first.def) {
                    console.log(`${second.name} attacks ${first.name}`)
                  firstHealth.value -= 2
                  console.log(`${first.name} has ${firstHealth.value} health left`)
                  if (firstHealth.value > 0) {
                    console.log("Turn ends!")
                  } else {
                    console.log(`${first.name} loses!`)
                  }
                  } else if (second.atk <= first.def) {
                      console.log(`${second.name} attacks ${first.name}`)
                    firstHealth.value -= 1
                    console.log(`${first.name} has ${firstHealth.value} health left`)
                  if (firstHealth.value > 0) {
                    console.log("Turn Ends!")
                  } else {
                    console.log(`${second.name} wins!`)
                  }
                }
              } else {
                console.log(`${second.name} has ${secondHealth.value} health left`)
                console.log(`${first.name} wins!`)
                    }
                } else if (first.atk <= second.def) {
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 1
                    console.log(`${second.name} has ${secondHealth.value} health left!`)
                    if (secondHealth.value > 0) {
                        console.log(`${second.name} attacks ${first.name}`)
                        if (second.atk > first.def) {
                            firstHealth.value -= 2
                        } else if (second.atk <= first.def) {
                            firstHealth.value -= 1
                        }
                        console.log(`${first.name} has ${firstHealth.value} health left`)
                        if (firstHealth.value > 0) {
                            console.log('Turn Ends!')
                        } else {
                            console.log(`${second.name} wins!`)
                        }
                    } else {
                        console.log(`${second.name} loses!`)
                    }
                }
            }
        } else if (user_action === 1 && opponent_action === 2) {
            if (user_roll > opponent_roll) {
                if (first.def > second.atk) {
                    console.log(`${first.name} defends! ${second.name} accidentally hurts itself!`)
                    secondHealth.value -= 2
                    if (secondHealth.value > 0) {
                        console.log("Turn ends!")
                    } else {
                        console.log(`${second.name} loses!`)
                    }
                } else if (first.def <= second.atk) {
                    console.log(`${second.name} attacks ${first.name}`)
                    console.log(`${first.name} defends! Nothing happens!`)
                    console.log('Turn ends!')
                }
            } else if (user_roll < opponent_roll) {
                if (first.def > second.atk) {
                    console.log(`${first.name} defends!`)
                    secondHealth.value -= 1
                    if (secondHealth.value > 0) {
                        console.log('Turn Ends!')
                    } else {
                        console.log(`${second.name} wins!`)
                    }
                } else if (second.atk < first.def) {
                    console.log(`${second.name} accidentally hurts itself!`)
                    secondHealth.value -= 2
                    if (secondHealth.value > 0) {
                        console.log('Turn Ends!')
                    } else {
                        console.log(`${first.name} loses!`)
                    }
                } else if (second.atk === first.def) {
                    console.log(`${second.name} accidentally hurts itself!`)
                    secondHealth.value -= 1
                    if (secondHealth.value > 0) {
                        console.log("Turn ends!")
                    } else {
                        console.log(`${second.name} loses!`)
                    }
                } 
            } else if (user_action === 2 && opponent_action === 1) {
                if (user_roll > opponent_roll) {
                    if (second.def > first.atk) {
                        console.log(`${second.name} defends! ${first.name} accidenally hurts itself!`)
                        firstHealth.value -= 1
                        console.log(`${first.name} has ${firstHealth.value} health left!`)
                        if (firstHealth.value > 0) {
                            console.log('Turn Ends!')
                        } else {
                            console.log(`${second.name} wins!`)
                        }
                    } else if (second.def <= first.atk) {
                        console.log(`${second.name} defends!`)
                        console.log('Turn Ends!')
                    }
                } else if (user_roll < opponent_roll) {
                    if (second.def > first.atk) {
                        console.log(`${second.name} defends! ${first.name} accidentally hurts itself!`)
                        firstHealth.value -= 1
                        if (firstHealth.value > 0) {
                            console.log('Turn Ends!')
                        } else {
                            console.log(`${second.name} wins!`)
                        }
                    } else if (second.def <= first.atk) {
                        console.log(`${second.name} defends! Turn ends!`)
                    }
                } else {
                    console.log(`${first.name} misses! Turn Ends!`)
                }
            } else if (user_action === 2 && opponent_action === 2) {
                console.log(
                  "The two Pokemon have a staring contest... No one makes a move..."
                )
            }
        }
    }
}

export default battleLogic