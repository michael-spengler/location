
import { CityService } from "https://deno.land/x/cities/cityservice.ts"
import { ILatitudeLongitude } from "https://deno.land/x/location@1.1.1/interfaces.ts"

export class CityLocationService {

    public static async getCityLocation(countryCode: string, cityName: string): Promise<ILatitudeLongitude> {

        const cityInfo = CityService.getCityInfo(countryCode, cityName)

        if (cityInfo === undefined) {
            throw new Error(`I could not find any data for Country Code: ${countryCode} and City: ${cityName}`)
        }

        return {
            latitude: cityInfo.lat,
            longitude: cityInfo.lon,
        }
    }
}