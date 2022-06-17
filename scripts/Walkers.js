import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = WalkersDifferentCitys(walker)
                    const cities = stringOfCities(assignments)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)


const walkerCitiesVar = getWalkerCities()
const WalkersDifferentCitys = (walker) => {
    let assignments = []
    for (const assignment of walkerCitiesVar) {
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    } return assignments
}


const cities = getCities()
const stringOfCities = (assignments) => {
    //const cities = getCities()
    let citiesArray = ""
    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                citiesArray = `${citiesArray} and ${city.name}`
            }
        }
    } return citiesArray
}

const walkers = getWalkers()
export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`

    } walkerHTML += "</ul>"

    return walkerHTML

}

