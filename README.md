
# Location Module

## Usage example for your code

```
  
import { IPLocationService } from "https://deno.land/x/location@1.1.1/iplocationservice.ts"
import { CityLocationService } from "https://deno.land/x/location@1.1.1/citylocationservice.ts"


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
  
deno run --allow-net https://deno.land/x/location/usage-examples.ts
  
```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things.


## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
