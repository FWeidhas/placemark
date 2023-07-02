<script>
    import ListUser from './ListUser.svelte';
	import AdminAnalytics from './AdminAnalytics.svelte';
	import AdminStatistics from './AdminStatistics.svelte';
</script>

<h1 class="title is-2 has-text-centered">Admin Dashboard:</h1>
<div class="columns">
    <div class="column has-text-centered">
        <AdminStatistics />
    </div>
    <div class="column box has-text-centered">
        <ListUser />
        <AdminAnalytics />
    </div>
</div>