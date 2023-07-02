<script lang="ts">
    import TitleBar from './TitleBar.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-half">
        <TitleBar title={'Placemark'} subTitle={'Sign up or Log in'} />
    </div>
    <div class="column is-half">
        <slot />
    </div>
</div>
