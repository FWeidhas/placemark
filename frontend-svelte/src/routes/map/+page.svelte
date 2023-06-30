<script>
    import { beforeUpdate } from "svelte";
    import Header from "../../lib/Header.svelte";
    import MainNavigator from "../../lib/MainNavigator.svelte";
    import PoiMap from "../../lib/PoiMap.svelte";
    import { placemarkService } from "../../services/placemark-service.js";

    beforeUpdate(() => {
        placemarkService.reload();
    });
</script>

<Header>
    <MainNavigator />
</Header>

<PoiMap />
