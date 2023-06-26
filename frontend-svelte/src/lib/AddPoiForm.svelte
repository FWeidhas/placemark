<script>
  // @ts-nocheck
  
      import { onMount } from "svelte";
      import { placemarkService } from "../services/placemark-service";
  
      let name ="";
  
      let categories = ["River", "Pond", "Sea", "Lake"];
      let selectedCategory = "";

      let message = "Add your favourite fishing spot";
  
    async function addpoi() {
      if (selectedCategory && amount && selectedMethod) {
        // TODO - make donation
      } else {
        message = "Please select amount, method and candidate";
      }
    }
  </script>
  
  <form on:submit|preventDefault={addpoi}>
      <div class="field">
          <label class="label" for="name">Enter Name</label>
          <input bind:value={name} class="input" id="name" name="name" type="text" />
      </div>
      <div class="field">
          <div class="select">
              <select bind:value={selectedCategory}>
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
  