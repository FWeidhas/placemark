<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    // @ts-ignore
    import Chart from "svelte-frappe-charts";

    let users = [];
    let pois = [];

    
    
    
    let usercountoverdate = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    }
    

    onMount(async () => {
            users = await placemarkService.getAllUser();
            pois = await placemarkService.getAllPois();
            
            let data = getCountofDates(users)

            // @ts-ignore
            usercountoverdate = mapData(data);
            console.log(usercountoverdate.datasets)
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
        result.sort((a, b) => {
            const dateA = new Date(a.date.split('.').reverse().join('-'));
            const dateB = new Date(b.date.split('.').reverse().join('-'));
            // @ts-ignore
            return dateA - dateB;
        });

        for (let i = 1; i < result.length; i++) {
            result[i].count += result[i - 1].count;
        };
        // console.log(result);

        return result;
    };

    /**
	 * @param {string | any[]} array
	 */
    function getSumofDates (array) {
        for (let i = 1; i < array.length; i++) {
            array[i].count += array[i - 1].count;
        };
    }

    /**
	 * @param {any[]} array
	 */
    function mapData(array) {
        let data = {
                labels: array.map((item) => item.date),
                datasets: [
                {
                    values: array.map((item) => item.count),
                },
                ],
            };
        return data;
    }
</script>


<h1>Dummytext</h1>
<Chart data={usercountoverdate} type="line"/>