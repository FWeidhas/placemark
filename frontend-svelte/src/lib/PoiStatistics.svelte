<script>
    import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service.js";
    import { user } from "../stores.js";
    // @ts-ignore
    import Chart from "svelte-frappe-charts";

    
    let pois = [];
    let ownPois = [];
    
    /**
	 * @type {any[]}
	 */
    let numberofpoiswithcategory = [];

    let numberofpoiswithcategoryuserbased = [];

    /**
	 * @type {{ labels: any[]; datasets: { values: any[]; }[]; }}
	 */
    let categoryAllDistribution;

    /**
	 * @type {{ labels: any; datasets: { values: any; }[]; }}
	 */
    let categoryOwnPoisDistribution;
 
    /**
	 * @type {{ labels: string[]; datasets: { values: any[]; }[]; }}
	 */
    let numberPoisallown;

    onMount(async () => {
            ownPois = await placemarkService.getPoisbyUserId($user.id);
            pois = await placemarkService.getAllPois();
            numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
            numberofpoiswithcategoryuserbased = await placemarkService.getCategoryNumberofPoisUser($user.id);
            console.log(numberofpoiswithcategory, pois, ownPois, numberofpoiswithcategoryuserbased);

            categoryAllDistribution = {
                labels: numberofpoiswithcategory.map((item) => item.category),
                datasets: [
                {
                    values: numberofpoiswithcategory.map((item) => item.count),
                },
                ],
            };

            categoryOwnPoisDistribution = {
                labels: numberofpoiswithcategoryuserbased.map((/** @type {{ category: any; }} */ item) => item.category),
                datasets: [
                {
                    values: numberofpoiswithcategoryuserbased.map((/** @type {{ count: any; }} */ item) => item.count),
                },
                ],
            };

            numberPoisallown = {
                labels: ["Other Pois", "Own Pois"],
                datasets: [
                    {
                        values: [pois.length - ownPois.length, ownPois.length]
                    }
                ]
            };



    });
</script>

{#if categoryAllDistribution}
<Chart data={categoryAllDistribution} type="pie" />
<Chart data={categoryOwnPoisDistribution} type="pie" />
<Chart data={numberPoisallown} type="pie" />
{/if}
