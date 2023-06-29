<script>
	import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";
    import { user } from "../stores.js";

    /**
	 * @type {any[]}
	 */
    let users = [];

    onMount(async () => {
        let userinfo = await placemarkService.getUser($user.id);
        if(userinfo.isAdmin) {
            users = await placemarkService.getAllUser();
        }
  });
</script>

{#each users as user}
  <div class="box">
    <article class="media is-flex is-align-items-center">
      <div class="media-left">
        <i class="far fa-user" style="font-size: 48px;"></i>
      </div>
      <div class="media-content is-flex">
        <div class="user-info mr-6">
          <p class="title is-4">{user.lastName}, {user.firstName}</p>
          <p class="subtitle is-6">{user.email}</p>
        </div>
        <div class="user-pois has-text-centered">
          <p class="title is-4">Number of Poi's:</p>
          <p class="subtitle is-6">{user.poisCount}</p>
        </div>
      </div>
      <div class="media-right">
        <a href="/admin/deleteuser/{user._id}">
          <button class="button is-danger">Delete</button>
        </a>
      </div>
    </article>
  </div>
{/each}
