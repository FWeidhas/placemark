<script>
    // @ts-nocheck
    import { page } from '$app/stores';
    import { placemarkService } from "../services/placemark-service";

    let poiId = $page.params.slug;
    let name ="";

    let categories = ["River", "Pond", "Sea", "Lake"];
    let selectedCategory = "Select category";

    let message = "Edit your spot with name and category";

    async function editpoi() {
        if (!selectedCategory || !name || selectedCategory === "Select category") {
            message = "Please select name and category";
            return;
        }

        const poi = {
            name: name,
            category: selectedCategory,
        };
        const response = await placemarkService.editpoi(poiId, poi);
        if (response) {
            message = `Thanks! You edited ${name} in the category of ${selectedCategory}`;
        } else {
            message = "Editing not completed - some error occurred";
        }
    }
  </script>
    
  <form on:submit|preventDefault={editpoi}>
      <div class="field">
          <label class="label" for="name">Point of Interest Name</label>
          <input bind:value={name} class="input" id="name" name="name" type="text" />
      </div>
      <div class="field">
          <div class="select">
              <select bind:value={selectedCategory}>
                  <option disabled hidden>Select category</option>
                  {#each categories as category}
                      <option>{category}</option>
                  {/each}
              </select>
          </div>
      </div>
      <div class="field">
          <div class="control">
              <button class="button is-link is-light">Edit</button>
          </div>
      </div>
      <div class="box">
          {message}
      </div>
  </form>
    