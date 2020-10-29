import { DistanceCalculator } from "https://deno.land/x/distancecalculator@1.0.0/distance-calculator.ts";

export class Utility {

    public static getClosestEntry(items: any[], lat: number, lon: number): any {

        let itemsWithDistance = Utility.enrichDistance(items, lat, lon)

        let sortedItemsWithDistance = Utility.sortByDistance(itemsWithDistance)

        const theClosest = sortedItemsWithDistance[0]
        
        theClosest.tempDistance = undefined // ensuring the original structure
        
        return theClosest
    }

    private static sortByDistance(items: any[]): any[] {
        return items.sort((c1, c2) => {
            if (c1.tempDistance > c2.tempDistance) {
                return 1
            }

            if (c1.tempDistance < c2.tempDistance) {
                return -1
            }

            return 0
        })
    }

    private static enrichDistance(items: any[], lat: number, lon: number): any[] {

        for (const item of items) {
            if (item.lat === undefined || item.lon === undefined || item.tempDistance !== undefined){
                throw new Error('Each entry should have lat and lon and no tempDistance.')
            }
            item.tempDistance = DistanceCalculator.getDistanceInKilometers(item.lat, item.lon, lat, lon)

        }
        return items
    }
}
