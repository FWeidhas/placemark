<script>
    import Header from '../../lib/Header.svelte';
    import MainNavigator from '../../lib/MainNavigator.svelte';
    import AddPoiForm from '../../lib/AddPoiForm.svelte';
</script>

<Header>
    <MainNavigator />
</Header>
<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <img alt="fishing" src="/lake-fishing.jpg" width="80%" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Add your favourite fishing spots</h1>
        <AddPoiForm />
    </div>
</div>
