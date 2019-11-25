const battleLogic = (user_action, opponent_action, userPokemon, first, second) => {
    const user_roll = Math.floor(Math.random() * 3) + 1
    const opponent_roll = Math.floor(Math.random() * 3) + 1
    let firstHealth = document.getElementById(`${first.name}-health`) ? document.getElementById(`${first.name}-health`) : 1
    let secondHealth = document.getElementById(`${second.name}-health`) ? document.getElementById(`${second.name}-health`) : 1
    console.log(first)
    let messages = []
    //User goes first
    if (first === userPokemon) {
        //If both user and opponent attack
        if (user_action === 1 && opponent_action === 1) {
            if (user_roll > opponent_roll) {
              //User advantage! User's attacks hit while opponent's will miss!
                if (first.atk > second.def) {
                  //User attacks opponent! Opponent loses 2 health
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 2
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (secondHealth.value > 0) {
                        //If opponent still has health left, it can attempt to attack but the attack misses
                        console.log(`${second.name}'s attack misses! Turn Ends!`)
                    } else {
                        //Opponent's health hits zero. Uses wins!
                        console.log(`${first.name} wins!`)
                    }
                } else if (first.atk <= second.def) {
                    //User attacks opponent! Opponent loses 1 health
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 1
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (secondHealth.value > 0) {
                        //Opponent still has health so they attempt to attack but miss!
                        console.log(`${second.name}'s attack misses! Turn ends!`)
                    } else {
                        //Opponent's health hits zero! User wins!
                        console.log(`${first.name} wins!`)
                    }
                }
            }
            else if (user_roll < opponent_roll) {
                //Opponent advantage! Opponent's attacks hit while user misses!
                console.log(`${first.name}'s attack misses!`)
                //User is first so all of user's actions will miss!
                if (second.atk > first.def) {
                    //Opponent attacks user
                    console.log(`${second.name} attacks ${first.name}`)
                    firstHealth.value -= 2
                    console.log(`${first.name} has ${firstHealth.value} health left`)
                    if (firstHealth.value > 0) {
                        //If user has health left, turn ends
                        console.log("Turn Ends!")
                    } else {
                        //If user has no health left, user loses!
                        console.log(`${first.name} loses!`)
                    }
                }
                else if (second.atk <= first.def) {
                    //Opponent attacks user
                    console.log(`${second.name} attacks ${first.name}`)
                    firstHealth.value -= 1
                    console.log(`${first.name} has ${firstHealth.value} health left`)
                    if (firstHealth.value > 0) {
                        //If user has health left, turn ends
                        console.log("Turn ends!")
                    } else {
                        //If user has zero health left, user loses!
                        console.log(`${first.name} loses!`)
                    }
                }
            }
            else {
                //Rolls tie! No advantages!
                if (first.atk > second.def) {
                    //User attacks opponent
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 2
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (secondHealth.value > 0) {
                        //If opponent still has health, counterattack!
                        if (second.atk > first.def) {
                            //Opponent attacks user, causing 2 points of damage
                            console.log(`${second.name} attacks ${first.name}`)
                            firstHealth.value -= 2
                            console.log(`${first.name} has ${firstHealth.value} health left`)
                            if (firstHealth.value > 0) {
                                //If user still has health, turn ends
                                console.log("Turn ends!")
                            } else {
                                //If user has zero health left, user loses!
                                console.log(`${first.name} loses!`)
                            }
                        } else if (second.atk <= first.def) {
                            //Opponent attacks user causing 1 point of damage
                            console.log(`${second.name} attacks ${first.name}`)
                            firstHealth.value -= 1
                            console.log(`${first.name} has ${firstHealth.value} health left`)
                            if (firstHealth.value > 0) {
                                //If user still has health, turn ends
                                console.log("Turn Ends!")
                            } else {
                                //If user has zero health, user loses!
                                console.log(`${first.name} loses!`)
                            }
                        }
                    } else {
                        //Opponent has no health left, cannot retaliate, user wins
                        console.log(`${second.name} has ${secondHealth.value} health left`)
                        console.log(`${first.name} wins!`)
                    }
                } else if (first.atk <= second.def) {
                    //User attacks opponent causing 1 point of damage since opponent has higher defense compared to user's attack
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 1
                    console.log(`${second.name} has ${secondHealth.value} health left!`)
                    if (secondHealth.value > 0) {
                      //If opponent still has health, counterattack!
                        console.log(`${second.name} attacks ${first.name}`)
                        if (second.atk > first.def) {
                            //Opponent attacks user causing 2 damage
                            firstHealth.value -= 2
                        } else if (second.atk <= first.def) {
                            //Opponent attacks user causing 1 damage
                            firstHealth.value -= 1
                        }
                        console.log(`${first.name} has ${firstHealth.value} health left`)
                        if (firstHealth.value > 0) {
                            //If user still has health, turn ends
                            console.log("Turn Ends!")
                        } else {
                            //If user has zero health, user loses!
                            console.log(`${first.name} loses!`)
                        }
                    } else {
                        //Opponent has no health, user wins!
                        console.log(`${first.name} wins!`)
                    }
                }
            }
        }
        else if (user_action === 1 && opponent_action === 2) {
            //User attacks while opponent defends
            if (user_roll > opponent_roll) {
                //User advantage! Opponent can still receive damage despite defending
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
                //Opponent advantage! User might accidentally hurt itself
                if (first.atk > second.def) {
                    console.log(`${first.name} attacks ${second.name}`)
                    console.log(`${second.name} defends! No damage dealt!`)
                    console.log('Turn ends!')
                } else if (first.atk < second.def) {
                    //Users attack is less than opponent's defense, can accidentally hurt itself
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
                    //User still hurts itself on attacking but not as much
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
                //No advantages but user misses
                console.log(`${first.name} misses! Turn Ends!`)
            }
        } else if (user_action === 2 && opponent_action === 1) {
            //User defends while opponent attacks
            if (user_roll > opponent_roll) {
                //User advantage! Opponent will accidentally hurt itself
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
                //Opponent advantage! User will still receive some damage despite defending
                if (first.def <= second.atk) {
                    console.log(`${second.name} attacks ${first.name}`)
                    console.log(`${first.name} defends! But loses some damage`)
                    firstHealth.value -= 1
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (firstHealth.value > 0) {
                        console.log("Turn ends!")
                    } else {
                        console.log(`${first.name} loses!`)
                    }
                } else if (first.def > second.atk) {
                    console.log(`${second.name} attacks ${first.name}`)
                    console.log(`${first.name} defends! Turn ends!`)
                }
            } else if (user_roll === opponent_roll) {
                //No advantage! Opponent misses!
                console.log(`${second.name} misses! Turn Ends!`)
            }
        } else if (user_action === 2 && opponent_action === 2) {
            console.log("The two Pokemon have a staring contest... No one makes a move...")
        }
    } else {
        //User goes second
        if (user_action === 1 && opponent_action === 1) {
            //User and opponent both attack
            if (user_roll > opponent_roll) {
                //User advantage! Opponent attacks will miss!
                if (second.atk > first.def) {
                    firstHealth.value -= 2
                    console.log(`${second.name} attacks ${first.name}`)
                    console.log(`${first.name} has ${firstHealth.value} health left`)
                    if (firstHealth.value > 0) {
                        console.log('Turn Ends')
                    } else {
                        console.log(`${second.name} wins!`)
                    }
                } else if (second.atk <= first.def) {
                    firstHealth.value -= 1
                    console.log(`${first.name} has ${firstHealth.value} health left`)
                    if (firstHealth.value > 0) {
                        console.log('Turn ends')
                    } else {
                        console.log(`${second.name} wins!`)
                    }
                }
            } else if (user_roll < opponent_roll) {
                //Opponent advantage! User's counterattacks will miss!
                if (first.atk > second.def) {
                    console.log(`${first.name} attacks ${second.name}!`)
                    secondHealth.value -= 2
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (secondHealth.value > 0) {
                        console.log(`${second.name} strikes back but misses!`)
                        console.log("Turn Ends!")
                    } else {
                        console.log(`${second.name} loses!`)
                    }
                } else if (first.atk <= second.def) {
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 1
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (secondHealth.value > 0) {
                        console.log("Turn ends!")
                    } else {
                        console.log(`${second.name} loses!`)
                    }
                }
            } else {
                //No advantages!
                if (first.atk > second.def) {
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 2
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (secondHealth.value > 0) {
                        //User counterattacks!
                        if (second.atk > first.def) {
                            console.log(`${second.name} attacks ${first.name}`)
                            firstHealth.value -= 2
                            console.log(`${first.name} has ${firstHealth.value} health left`)
                            if (firstHealth.value > 0) {
                                console.log("Turn ends!")
                            } else {
                                console.log(`${second.name} wins!`)
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
                        //User cannot counter attack and loses
                        console.log(`${second.name} has ${secondHealth.value} health left`)
                        console.log(`${second.name} loses!`)
                    }
                } else if (first.atk <= second.def) {
                    console.log(`${first.name} attacks ${second.name}`)
                    secondHealth.value -= 1
                    console.log(`${second.name} has ${secondHealth.value} health left!`)
                    if (secondHealth.value > 0) {
                        //User counterattacks!
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
                        //User cannot counterattack
                        console.log(`${second.name} loses!`)
                    }
                }
            }
        } else if (user_action === 1 && opponent_action === 2) {
            //User attacks while opponent defends
            if (user_roll > opponent_roll) {
                //User advantage! User can still cause some damage!
                if (first.def > second.atk) {
                    console.log(`${first.name} defends! No damage taken!`)
                    console.log('Turn ends!')
                } else if (first.def <= second.atk) {
                    console.log(`${second.name} attacks ${first.name}`)
                    console.log(`${first.name} defends! Some damage is taken`)
                    firstHealth.value -= 1
                    console.log(`${first.name} has ${firstHealth.value} health left`)
                    if (firstHealth.value > 0) {
                        console.log('Turn ends!')
                    } else {
                        console.log(`${second.name} wins!`)
                    }
                }
            } else if (user_roll < opponent_roll) {
                //Opponent advantage! User may hurt itself
                if (first.def > second.atk) {
                    console.log(`${first.name} defends! ${second.name} accidentally hurts itself`)
                    secondHealth.value -= 2
                    console.log(`${second.name} has ${secondHealth.value} health left`)
                    if (secondHealth.value > 0) {
                        console.log('Turn Ends!')
                    } else {
                        console.log(`${second.name} loses!`)
                    }
                } else if (first.def < second.atk) {
                    console.log(`${second.name} attacks ${first.name}`)
                    console.log(`${first.name} defends! No damage taken`)
                    console.log('Turn ends!')
                } else if (second.atk === first.def) {
                    console.log(`${second.name} attacks ${first.name}`)
                    console.log(`${first.name} defends!`)
                    console.log(`${second.name} accidentally hurts itself!`)
                    secondHealth.value -= 1
                    if (secondHealth.value > 0) {
                        console.log("Turn ends!")
                    } else {
                        console.log(`${second.name} loses!`)
                    }
                }
            } else {
                //No advantages
                console.log(`${second.name} attacks but misses! Turn ends!`)
            }
        } else if (user_action === 2 && opponent_action === 1) {
            //User defends while opponent attacks
            if (user_roll > opponent_roll) {
                    //User advantage! Opponent may accidentally hurt itself
                if (second.def > first.atk) {
                    console.log(`${second.name} defends! ${first.name} accidenally hurts itself!`)
                    firstHealth.value -= 2
                    console.log(`${first.name} has ${firstHealth.value} health left!`)
                    if (firstHealth.value > 0) {
                        console.log('Turn Ends!')
                    } else {
                        console.log(`${second.name} wins!`)
                    }
                } else if (second.def < first.atk) {
                    console.log(`${second.name} defends! No damage taken!`)
                    console.log('Turn Ends!')
                } else if (second.def === first.atk) {
                    console.log(`${first.name} attacks ${second.name}`)
                    console.log(`${second.name} defends! ${first.name} accidentally hurts itself`)
                    firstHealth.value -= 1
                    if (firstHealth.value > 0) {
                        console.log('Turn ends!')
                    } else {
                        console.log(`${second.name} wins!`)
                    }
                }
            } else if (user_roll < opponent_roll) {
                //Opponent advantage! Damage might still be dealt
                if (second.def > first.atk) {
                    console.log(`${second.name} defends! Nothing happens`)
                } else if (second.def <= first.atk) {
                    console.log(`${second.name} defends! Some damage is stil taken`)
                    secondHealth.value -= 1
                    if (secondHealth.value > 0) {
                        console.log('Turn ends')
                    } else {
                        console.log(`${second.name} loses`)
                    }
                }
            } else {
                //No advantages
                console.log(`${first.name} misses! Turn Ends!`)
            }
        }
        else if (user_action === 2 && opponent_action === 2) {
            //Guess both players are intimidated by the other... lol
            console.log("The two Pokemon have a staring contest... No one makes a move...")
        }
    }
}

export default battleLogic