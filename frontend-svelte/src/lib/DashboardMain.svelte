<script>
// @ts-nocheck
    import { onMount } from "svelte";
    import ListPois from "./ListPois.svelte";
	import ListAllPois from './ListAllPois.svelte';

    let switcher = false;

    onMount(async () => {
    if (typeof document !== 'undefined') {
        await import('bootstrap/dist/css/bootstrap.min.css');
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  });
</script>

<section class="section">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column">
                <h1 class="title is-1">Dashboard</h1>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-narrow">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" bind:checked={switcher}>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Your own Spots</label>
                </div>
            </div>
        </div>
    </div>
</section>
{#if switcher}
    <ListPois />
{:else}
    <ListAllPois />
{/if}

  