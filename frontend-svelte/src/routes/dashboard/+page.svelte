<script>
    import Header from '../../lib/Header.svelte';
    import MainNavigator from '../../lib/MainNavigator.svelte';
	import DashboardMain from '$lib/DashboardMain.svelte';
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="fishing" src="/lake-fishing.jpg" width="80%" />
    </div>
    <div class="column box has-text-centered">
        <DashboardMain />
    </div>
</div>
