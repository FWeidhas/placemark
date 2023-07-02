<script>
// @ts-nocheck

	import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";
  import { latestUsers, user } from "../stores.js";

 
  /**
	 * @type {any[] | import("axios").AxiosResponse<any, any>}
	 */
  let users = [];

  onMount(async () => {
      if($user.isAdmin) {
          users = await placemarkService.getPoisCountbyUser();
      }
  });

  /**
 * @param {string} id
 */
  async function deleteUser(id) {
    if($user.isAdmin) {
        await placemarkService.deleteUserById(id);
        users = await placemarkService.getPoisCountbyUser();
        latestUsers.set(users);
      }
  }
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
        <button class="button is-danger" on:click={() => deleteUser(user._id)}>Delete</button>
      </div>
    </article>
  </div>
{/each}
