import { IPLocationService } from "./iplocationservice.ts"


const ip = '49.12.6.159'
const ipLocation = await IPLocationService.getIPLocation(ip)

console.log(`I found the following location for ip ${ip}: \n${JSON.stringify(ipLocation)}\n`)
