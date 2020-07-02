import axiod from "https://deno.land/x/axiod/mod.ts"

export class IPLocationService {

    public static async getIPLocation(ip: string): Promise<any> {
        const ipLocatorURL = `https://freegeoip.app/json/${ip}`
        let apiResult
        try {
            apiResult = await axiod.get(ipLocatorURL)
        } catch (error) {
            throw new Error(`The following error occurred while retrieving data for ip ${ip}: ${error.message}`)
        }
        
        if (apiResult.status === 200) {
            return apiResult.data
        }
        
        throw new Error(`Unexpected status from API call: ${apiResult.status} - ${apiResult.statusText}`)
    }
}