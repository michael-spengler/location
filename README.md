# Location Module

## Usage example for your code

```

import { IPLocationService } from "https://deno.land/x/location/iplocationservice.ts"
import { CityLocationService } from "https://deno.land/x/location/citylocationservice.ts"


const ip = '49.12.6.159'
const ipLocation = await IPLocationService.getIPLocation(ip)

console.log(`\nI found the following location for ip ${ip}: \n${JSON.stringify(ipLocation)}\n`)



const countryCode = 'DE'
const cityName = 'Heidelberg'
const cityLocation = await CityLocationService.getCityLocation(countryCode, cityName)

console.log(`The city you asked for is about here: \n${JSON.stringify(cityLocation)}\n`)

```

## Test it via command line

```

deno run --allow-net --allow-read https://deno.land/x/location/usage-examples.ts

```

## Get 3 Words representation of Latitude and Longitude

```sh

deno run --allow-net https://deno.land/x/location/get-three-words-location.ts yourW3WAPIKey

```

## Contributions are welcome

Feel free to create a pull request if you would like to improve things.

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)
