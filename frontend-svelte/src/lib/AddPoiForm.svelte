<script>
  // @ts-nocheck
    import { placemarkService } from "../services/placemark-service";
	import { user } from "../stores";
  
      let name ="";
  
      let categories = ["River", "Pond", "Sea", "Lake"];
      let selectedCategory = "Select category";

      let message = "Add your spot with name and category";
  
      async function addpoi() {
        if (!selectedCategory || !name || selectedCategory === "Select category") {
            message = "Please select name and category";
            return;
        }

        const poi = {
            name: name,
            category: selectedCategory,
            userid: $user.id,
        };

        const response = await placemarkService.addpoi(poi);
        if (response) {
            message = `Thanks! You added ${name} in the category of ${selectedCategory}`;
        } else {
            message = "Adding not completed - some error occurred";
        }
        }

  </script>
  
  <form on:submit|preventDefault={addpoi}>
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
              <button class="button is-link is-light">Add</button>
          </div>
      </div>
      <div class="box">
          {message}
      </div>
  </form>
  