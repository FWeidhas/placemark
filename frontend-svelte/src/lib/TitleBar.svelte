<script>
	import { onMount } from "svelte";
  import { user } from "../stores.js";
	import { placemarkService } from "../services/placemark-service.js";

    export let title = "";
    export let subTitle = "";

    let userstatus = "";    
    /**
	 * @type {{ isAdmin: any; lastName: any; firstName: any; email: any; }}
	 */
    let userinfo;

    onMount(async () => {
        if($user.id) {
            userinfo = await placemarkService.getUser($user.id);

            userstatus = (userinfo.isAdmin) ? "Admin" : "User";
        }
    });

    let isActive = false;

    function openModal() {
        isActive = true;
    }

    function closeModal() {
        isActive = false;
    }
</script>

<div class="box has-text-centered columns m-2 is-vcentered">
    <div class="column">
        <div class="title is-5">{title}</div>
        {#if $user.id}
        <div class="subtitle is-5">Organise and share your favourite fishing spots</div>
        {:else}
        <div class="subtitle is-5">{subTitle}</div>
        {/if}
    </div>
    {#if userinfo}
    <div class="column">
        <div id="infoModal" class={isActive ? "modal is-active" : "modal"}>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="modal-background" on:click={closeModal}></div>
            <div class="modal-content">
              <article class="message is-primary">
                <div class="message-header">
                  <p>User Details:</p>
                  <button class="delete" aria-label="delete" on:click={closeModal}></button>
                </div>
                <div class="message-body">
                  <div class="card">
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left"> 
                          <i class="far fa-user" style="font-size: 48px;"></i>
                        </div>
                        <div class="media-content">
                          <p class="title is-4">{userinfo.lastName}, {userinfo.firstName}</p>
                          <p class="subtitle is-6">{userinfo.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <button class="modal-close is-large" aria-label="close" on:click={closeModal}></button>
          </div>
          <button id="infoButton" class="button is-primary" on:click={openModal}>{userstatus}</button>
    </div>
    {/if}
    <div class="column">
        <i style="font-size: 48px; color: rgb(74, 180, 118);"  class="far fa-map" />
        <i style="font-size: 48px; color: rgb(153, 14, 14);" class="fas fa-map-marker-alt" />
        <div class="is-size-7">Placemark</div>
    </div>
</div>

