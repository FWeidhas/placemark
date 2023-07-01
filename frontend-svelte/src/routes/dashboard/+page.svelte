<script>
    import Header from '../../lib/Header.svelte';
    import MainNavigator from '../../lib/MainNavigator.svelte';
	import DashboardMain from '$lib/DashboardMain.svelte';
	import PoiStatistics from '$lib/PoiStatistics.svelte';
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <PoiStatistics />
    </div>
    <div class="column box has-text-centered">
        <DashboardMain />
    </div>
</div>
