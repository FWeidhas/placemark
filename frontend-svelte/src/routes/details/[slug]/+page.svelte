<script>
    import DetailsMain from '$lib/DetailsMain.svelte';
    import Header from '../../../lib/Header.svelte';
    import MainNavigator from '../../../lib/MainNavigator.svelte';
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="fishing" src="/lake-fishing.jpg" width="80%" />
    </div>
    <div class="column box has-text-centered">
        <DetailsMain />
    </div>
</div>