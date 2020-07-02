# Location Module

## Usage example for your code

```

import { IPLocationService } from "./iplocationservice.ts"


const ip = '49.12.6.159'
const ipLocation = await IPLocationService.getIPLocation(ip)

console.log(`I found the following location for ip ${ip}: \n${JSON.stringify(ipLocation)}\n`)


```

## Test it via command line
```
deno run --allow-net https://raw.githubusercontent.com/michael-spengler/location/master/test-it.ts
<!-- deno run --allow-net https://deno.land/x/location/test-it.ts -->
```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things.