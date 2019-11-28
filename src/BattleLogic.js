const battleLogic = (user_action, opponent_action, userPokemon, first, second) => {
    console.log('Battle Commence!')
    const user_roll = Math.floor(Math.random() * 3) + 1
    const opponent_roll = Math.floor(Math.random() * 3) + 1
    let firstHealth = document.getElementById(`${first.name}-health`) ? document.getElementById(`${first.name}-health`) : 1
    let secondHealth = document.getElementById(`${second.name}-health`) ? document.getElementById(`${second.name}-health`) : 1
    // console.log(first)
    let messages = []
    //User goes first
    if (first === userPokemon) {
        console.log('User is First')
        //If both user and opponent attack
        if (user_action === 1 && opponent_action === 1) {
            messages.push(`${first.name} attacks ${second.name}.`)
            if (user_roll > opponent_roll) {
                //User advantage! User's attacks hit while opponent's will miss!
                console.log('User Advantage!')
                console.log(messages)
                if (first.atk > second.def) {
                    //User attacks opponent! Opponent loses 2 health
                    secondHealth.value -= 2
                    messages.push(`${second.name} takes 2 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        //If opponent still has health left, it can attempt to attack but the attack misses
                        messages.push(`${second.name} attacks ${first.name}`)
                        messages.push(`${second.name}'s attack misses!`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        //Opponent's health hits zero. Uses wins!
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${first.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    //User attacks opponent! Opponent loses 1 health
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        //Opponent still has health so they attempt to attack but miss!
                        messages.push(`${second.name} has ${secondHealth.value} health left`)
                        messages.push(`${second.name} attacks ${first.name}.`)
                        messages.push(`${second.name}'s attack misses!`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        //Opponent's health hits zero! User wins!
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${first.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else if (user_roll < opponent_roll) {
                //Opponent advantage! Opponent's attacks hit while user misses!
                console.log('Opponent Advantage!')
                console.log(messages)
                messages.push(`${first.name}'s attack misses!`)
                messages.push(`${second.name} attacks ${first.name}.`)
                if (second.atk > first.def) {
                    //Opponent attacks user
                    firstHealth.value -= 2
                    messages.push(`${first.name} takes 2 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left.`)
                        messages.push("Turn Ends.")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${first.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    //Opponent attacks user
                    firstHealth.value -= 1
                    messages.push(`${first.name} takes 1 damage!`)
                    if (firstHealth.value > 0) {
                        //If user has health left, turn ends
                        messages.push(`${first.name} has ${firstHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        //If user has zero health left, user loses!
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${first.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else {
                //Rolls tie! No advantages!
                console.log('No Advantages!')
                // console.log(messages)
                if (first.atk > second.def) {
                    //User attacks opponent
                    secondHealth.value -= 2
                    messages.push(`${second.name} takes 2 damage!`)
                    if (secondHealth.value > 0) {
                        //If opponent still has health, counterattack!
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push(`${second.name} attacks ${first.name}.`)
                        if (second.atk > first.def) {
                            firstHealth.value -= 2
                            messages.push(`${first.name} takes 2 damage!`)
                            if (firstHealth.value > 0) {
                                //If user still has health, turn ends
                                messages.push(`${first.name} has ${firstHealth.value} health left.`)
                                messages.push("Turn Ends!")
                                console.log(messages)
                                return messages
                            }
                            else {
                                //If user has zero health left, user loses!
                                messages.push(`${first.name} has 0 health left.`)
                                messages.push(`${first.name} lost!`)
                                console.log(messages)
                                return messages
                            }
                        }
                        else {
                            //Opponent attacks user causing 1 point of damage
                            firstHealth.value -= 1
                            messages.push(`${first.name} takes 1 damage!`)
                            if (firstHealth.value > 0) {
                                //If user still has health, turn ends
                                messages.push(`${first.name} has ${firstHealth.value} health left.`)
                                messages.push("Turn Ends!")
                                console.log(messages)
                                return messages
                            }
                            else {
                                //If user has zero health, user loses!
                                messages.push(`${first.name} has 0 health left.`)
                                messages.push(`${first.name} loses!`)
                                console.log(messages)
                                return messages
                            }
                        }
                    }
                    else {
                        //Opponent has no health left, cannot retaliate, user wins
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${first.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    //User attacks opponent causing 1 point of damage since opponent has higher defense compared to user's attack
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        //If opponent still has health, counterattack!
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push(`${second.name} attacks ${first.name}.`)
                        if (second.atk > first.def) {
                            //Opponent attacks user causing 2 damage
                            firstHealth.value -= 2
                            messages.push(`${first.name} takes 2 damage!`)
                        }
                        else if (second.atk <= first.def) {
                            //Opponent attacks user causing 1 damage
                            firstHealth.value -= 1
                            messages.push(`${first.name} takes 1 damage!`)
                        }
                        if (firstHealth.value > 0) {
                            //If user still has health, turn ends
                            messages.push(`${first.name} has ${firstHealth.value} health left.`)
                            messages.push("Turn Ends!")
                            console.log(messages)
                            return messages
                        }
                        else if (firstHealth.value <= 0) {
                            //If user has zero health, user loses!
                            messages.push(`${first.name} has 0 health left`)
                            messages.push(`${first.name} lost!`)
                            console.log(messages)
                            return messages
                        }
                    }
                    else {
                        //Opponent has no health, user wins!
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${first.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
        }
        else if (user_action === 1 && opponent_action === 2) {
            //User attacks while opponent defends
            messages.push(`${first.name} attacks ${second.name}.`)
            if (user_roll > opponent_roll) {
                //User advantage! Opponent can still receive damage despite defending
                console.log('User Advantage!')
                // console.log(messages)
                if (first.atk > second.def) {
                    messages.push(`${second.name} defends, but still takes some damage...`)
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${first.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    messages.push(`${second.name} defends! No damage taken.`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
                }
            }
            else if (user_roll < opponent_roll) {
                //Opponent advantage! User might accidentally hurt itself
                console.log('Opponent Advantage!')
                // console.log(messages)
                if (first.atk > second.def) {
                    messages.push(`${second.name} defends! No damage taken.`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
                }
                else if (first.atk < second.def) {
                    //User's attack is less than opponent's defense, can accidentally hurt itself
                    messages.push(`${second.name} defends! ${first.name} badly hurts itself!`)
                    firstHealth.value -= 2
                    messages.push(`${first.name} takes 2 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${first.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
                else if (first.atk === second.def) {
                    //User still hurts itself on attacking but not as much
                    messages.push(`${second.name} defends!`)
                    messages.push(`${first.name} accidentally hurts itself!`)
                    firstHealth.value -= 1
                    messages.push(`${first.name} takes 1 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left!`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${first.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else {
                //No advantages but user misses
                console.log('No Advantages!')
                // console.log(messages)
                messages.push(`${first.name} misses!`)
                messages.push("Turn Ends!")
                console.log(messages)
                return messages
            }
        }
        else if (user_action === 2 && opponent_action === 1) {
            //User defends while opponent attacks
            messages.push(`${second.name} attacks ${first.name}.`)
            if (user_roll > opponent_roll) {
                //User advantage! Opponent will accidentally hurt itself
                console.log('User Adantage!')
                if (first.def > second.atk) {
                    messages.push(`${first.name} defends! ${second.name} badly hurts itself!`)
                    secondHealth.value -= 2
                    messages.push(`${second.name} takes 2 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${first.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
                else if (first.def === second.atk) {
                    messages.push(`${first.name} defends! ${second.name} accidentally hurts itself.`)
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push("Turn End!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${first.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    messages.push(`${first.name} defends! No damage taken.`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
                }
            }
            else if (user_roll < opponent_roll) {
                //Opponent advantage! User will still receive some damage despite defending
                console.log('Opponent Advantage!')
                // console.log(messages)
                if (first.def <= second.atk) {
                    messages.push(`${first.name} defends but takes some damage`)
                    firstHealth.value -= 1
                    messages.push(`${first.name} takes 1 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${first.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    messages.push(`${first.name} defends! No damage taken.`)
                    messages.push("Turn Ends")
                    console.log(messages)
                    return messages
                } 
            }
            else {
                    //No advantage! Opponent misses!
                    console.log('No Advantages!')
                    // console.log(messages)
                    messages.push(`${second.name} misses!`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
            }
        }
        else if (user_action === 2 && opponent_action === 2) {
                messages.push("The two Pokemon eye each other cautiously...")
                messages.push("Waiting for the other to make a move...")
                messages.push("Turn Ends!")
                console.log(messages)
                return messages
            }
    }
    else {
            //User goes second
        if (user_action === 1 && opponent_action === 1) {
            //User and opponent both attack
            messages.push(`${first.name} attacks ${second.name}.`)
            if (user_roll > opponent_roll) {
                //User advantage! Opponent attacks will miss!
                console.log('User Advantage!')
                // console.log(messages)
                messages.push(`${first.name} misses!`)
                messages.push(`${second.name} attacks ${first.name}.`)
                if (second.atk > first.def) {
                    firstHealth.value -= 2
                    messages.push(`${first.name} takes 2 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${second.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    firstHealth.value -= 1
                    messages.push(`${first.name} takes 1 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left.`)
                        messages.push('Turn Ends!')
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${second.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else if (user_roll < opponent_roll) {
                //Opponent advantage! User's counterattacks will miss!
                console.log('Opponent Advantage!')
                // console.log(messages)
                if (first.atk > second.def) {
                    secondHealth.value -= 2
                    messages.push(`${second.name} takes 2 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push(`${second.name} attacks ${first.name}.`)
                        messages.push("The attack misses!")
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${second.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push(`${second.name} attacks ${first.name}.`)
                        messages.push("The attack misses!")
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    } else {
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${second.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else {
                //No advantages!
                console.log('No Advantages!')
                // console.log(messages)
                if (first.atk > second.def) {
                    secondHealth.value -= 2
                    messages.push(`${second.name} takes 2 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        //User counterattacks!
                        messages.push(`${second.name} attacks ${first.name}.`)
                        if (second.atk > first.def) {
                            firstHealth.value -= 2
                            messages.push(`${first.name} takes 2 damage!`)
                            if (firstHealth.value > 0) {
                                messages.push(`${first.name} has ${firstHealth.value} health left.`)
                                messages.push("Turn Ends!")
                                console.log(messages)
                                return messages
                            }
                            else {
                                messages.push(`${first.name} has 0 health left.`)
                                messages.push(`${second.name} wins!`)
                                console.log(messages)
                                return messages
                            }
                        }
                        else {
                            firstHealth.value -= 1
                            messages.push(`${first.name} takes 1 damage!`)
                            if (firstHealth.value > 0) {
                                messages.push(`${first.name} has ${firstHealth.value} health left.`)
                                messages.push("Turn Ends!")
                                console.log(messages)
                                return messages
                            }
                            else {
                                messages.push(`${first.name} has 0 health left.`)
                                messages.push(`${second.name} wins!`)
                                console.log(messages)
                                return messages
                            }
                        }
                    }
                    else {
                        //User cannot counter attack and loses
                        messages.push(`${second.name} has 0 health left`)
                        messages.push(`${second.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
                else {
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        //User counterattacks!
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push(`${second.name} attacks ${first.name}.`)
                        if (second.atk > first.def) {
                            firstHealth.value -= 2
                            messages.push(`${first.name} takes 2 damage!`)
                        }
                        else if (second.atk <= first.def) {
                            firstHealth.value -= 1
                            messages.push(`${first.name} takes 1 damage!`)
                        }
                        if (firstHealth.value > 0) {
                            messages.push(`${first.name} has ${firstHealth.value} health left.`)
                            messages.push("Turn Ends!")
                            return messages
                        }
                        else if (firstHealth.value <= 0) {
                            messages.push(`${first.name} has 0 health left.`)
                            messages.push(`${second.name} wins!`)
                            console.log(messages)
                            return messages
                        }
                    }
                    else {
                        //User cannot counterattack
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${second.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
        }
        else if (user_action === 1 && opponent_action === 2) {
            //User attacks while opponent defends
            messages.push(`${second.name} attacks ${first.name}.`)
            if (user_roll > opponent_roll) {
                //User advantage! User can still cause some damage!
                console.log('User Advantage!')
                // console.log(messages)
                if (first.def > second.atk) {
                    messages.push(`${first.name} defends! No damage taken.`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
                }
                else {
                    messages.push(`${first.name} defends! Some damage is taken`)
                    firstHealth.value -= 1
                    messages.push(`${first.name} takes 1 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${second.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else if (user_roll < opponent_roll) {
                //Opponent advantage! User may hurt itself
                console.log('Opponent Advantage!')
                // console.log(messages)
                if (first.def > second.atk) {
                    messages.push(`${first.name} defends! ${second.name} badly hurts itself.`)
                    secondHealth.value -= 2
                    messages.push(`${second.name} takes 2 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${second.name} has 0 health left`)
                        messages.push(`${second.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
                else if (first.def < second.atk) {
                    messages.push(`${first.name} defends! No damage taken.`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
                }
                else {
                    messages.push(`${first.name} defends!`)
                    messages.push(`${second.name} accidentally hurts itself!`)
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${second.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else {
                //No advantages
                console.log('No Advantages.')
                // console.log(messages)
                messages.push(`${second.name} misses!`)
                messages.push("Turn Ends!")
                console.log(messages)
                return messages
            }
        }
        else if (user_action === 2 && opponent_action === 1) {
            //User defends while opponent attacks
            messages.push(`${first.name} attacks ${second.name}.`)
            if (user_roll > opponent_roll) {
                //User advantage! Opponent may accidentally hurt itself
                console.log('User Advantage!')
                // console.log(messages)
                if (second.def > first.atk) {
                    messages.push(`${second.name} defends! ${first.name} badly hurts itself!`)
                    firstHealth.value -= 2
                    messages.push(`${first.name} takes 2 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left!`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left!`)
                        messages.push(`${second.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
                else if (second.def < first.atk) {
                    messages.push(`${second.name} defends! No damage taken.`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
                }
                else {
                    messages.push(`${second.name} defends! ${first.name} accidentally hurts itself.`)
                    firstHealth.value -= 1
                    messages.push(`${first.name} takes 1 damage!`)
                    if (firstHealth.value > 0) {
                        messages.push(`${first.name} has ${firstHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${first.name} has 0 health left.`)
                        messages.push(`${second.name} wins!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else if (user_roll < opponent_roll) {
                //Opponent advantage! Damage might still be dealt
                console.log('Opponent Advantage!')
                // console.log(messages)
                if (second.def > first.atk) {
                    messages.push(`${second.name} defends! No damage taken.`)
                    messages.push("Turn Ends!")
                    console.log(messages)
                    return messages
                }
                else {
                    messages.push(`${second.name} defends but still takes some damage...`)
                    secondHealth.value -= 1
                    messages.push(`${second.name} takes 1 damage!`)
                    if (secondHealth.value > 0) {
                        messages.push(`${second.name} has ${secondHealth.value} health left.`)
                        messages.push("Turn Ends!")
                        console.log(messages)
                        return messages
                    }
                    else {
                        messages.push(`${second.name} has 0 health left.`)
                        messages.push(`${second.name} lost!`)
                        console.log(messages)
                        return messages
                    }
                }
            }
            else {
                //No advantages
                console.log("No advantages")
                // console.log(messages)
                messages.push(`${first.name} misses!`)
                messages.push("Turn Ends!")
                console.log(messages)
                return messages
            }
        }
        else  {
            //Guess both players are intimidated by the other... lol
            console.log("The two Pokemon have a staring contest... No one makes a move...")
            messages.push("The two Pokemon eye each other cautiously...")
            messages.push("Waiting for the other to make a move...")
            messages.push("Turn Ends!")
            console.log(messages)
            return messages
        }
    } 
}

export default battleLogic