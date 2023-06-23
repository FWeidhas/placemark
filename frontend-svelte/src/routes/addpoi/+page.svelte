<script>
    import Header from '../../lib/Header.svelte';
    import AddPoiForm from '../../lib/AddPoiForm.svelte';
</script>

<Header />

<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <img alt="fishing" src="/lake-fishing.jpg" width="80%" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Add your favourite spots</h1>
        <AddPoiForm />
    </div>
</div>
