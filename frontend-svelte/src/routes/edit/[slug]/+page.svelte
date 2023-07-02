<script lang="ts">
    import Header from '../../../lib/Header.svelte';
    import MainNavigator from '../../../lib/MainNavigator.svelte';
    import EditPoiForm from '../../../lib/EditPoiForm.svelte';
</script>

<Header>
    <MainNavigator />
</Header>
<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <img alt="fishing" src="/lake-fishing.jpg" width="80%" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Edit your favourite fishing spots</h1>
        <EditPoiForm />
    </div>
</div>
