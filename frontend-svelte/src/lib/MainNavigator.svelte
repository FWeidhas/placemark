<script lang="ts">
    import { user } from "../stores.js";
</script>

<div class="box has-text-centered columns m-2">
    {#if $user.isAdmin}
    <a href="/admin" class="column">
        <i class="fas fa-cogs fa-3x" style="color:rgb(41, 128, 185)" />
    </a>
    {/if}
    <a href="/addpoi" class="column">
        <i class="fas fa-plus fa-3x" style="color:rgb(153, 196, 74)" />
    </a>
    <a href="/map" class="column ">
        <i class="fas fa-map-marked-alt fa-3x" style="color:rgb(102, 153, 255)" />
    </a>
    <a href="/charts" class="column is-2 mx-2">
        <i class="fas fa-chart-line fa-3x" style="color:rgb(149, 93, 176)" />
    </a>
    <a href="/dashboard" class="column">
        <i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)" />
    </a>
    <a href="/logout" class="column">
        <i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)" />
    </a>
</div>
