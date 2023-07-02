<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    // @ts-ignore
    import Chart from "svelte-frappe-charts";

    let users = [];
    let pois = [];

    onMount(async () => {
            users = await placemarkService.getAllUser();
            pois = await placemarkService.getAllPois();
            console.log(users, pois);

            getCountofDates(users);
            getCountofDates(pois);
        });

    /**
	 * @param {any[]} array
	 */
    function getCountofDates(array) {
        const countByDate = array.reduce((count, a) => {
        const createdAtDate = new Date(a.createdAt).toLocaleDateString();

        if (!count[createdAtDate]) {
        count[createdAtDate] = 1;
        } else {
        count[createdAtDate] += 1;
        }

        return count;
        }, {});

        const result = Object.entries(countByDate).map(([date, count]) => ({ date, count }));
        console.log(result);

        return result;
    };
</script>


<h1>Dummytext</h1>