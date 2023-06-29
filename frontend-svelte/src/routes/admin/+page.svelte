<script>
    import Header from '../../lib/Header.svelte';
    import MainNavigator from '../../lib/MainNavigator.svelte';
    import ListUser from '../../lib/ListUser.svelte';
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="fishing" src="/lake-fishing.jpg" width="80%" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Admin Dashboard:</h1>
        <ListUser />
    </div>
</div>