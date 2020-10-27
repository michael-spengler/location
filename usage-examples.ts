import { IPLocationService } from "https://deno.land/x/location/iplocationservice.ts"
import { CityLocationService } from "https://deno.land/x/location/citylocationservice.ts"
import { What3WordsService } from "./what3words-service.ts"


const ip = '49.12.6.159'
const ipLocation = await IPLocationService.getIPLocation(ip)

console.log(`\nI found the following location for ip ${ip}: \n${JSON.stringify(ipLocation)}\n`)



const countryCode = 'DE'
const cityName = 'Heidelberg'
const cityLocation = await CityLocationService.getCityLocation(countryCode, cityName)

console.log(`The city you asked for is about here: \n${JSON.stringify(cityLocation)}\n`)

const lat = 49.40768
const lng = 8.69079
const threeWords = await What3WordsService.get3Words(lat, lng)

console.log(`The what3words address is: \n${JSON.stringify(threeWords.words)}\n`)