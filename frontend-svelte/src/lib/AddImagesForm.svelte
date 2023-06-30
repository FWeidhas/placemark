<script>
	import { createEventDispatcher } from 'svelte';
  import { placemarkService } from '../services/placemark-service';
    
  /**
 * @type {{ img: any; _id: any; }}
 */
  export let poi;

  const dispatch = createEventDispatcher();

  /**
 * @type {any}
 */
  let imagefiles;

  let isLoading = false;

  let message = "Add your images for your spot";

  async function addimage () {
      if(!imagefiles) {
        message = "Choose a png/jpeg-file to upload"
      }
      message = "Loading ..."
      isLoading = true;
      let formData = new FormData();
      for (let i = 0; i < imagefiles.length; i++) {
          let partfile = imagefiles[i];
          formData.append(`image_buffer_${i}`, partfile);
      }
      
      // @ts-ignore
      const response = await placemarkService.addImage(poi._id, formData);
      
      if (response) {
        isLoading = false;
        const fileName = document.querySelector(".file-name");
        // @ts-ignore
        fileName.textContent = "";
        message = "Upload successful"
        dispatch('imageAdded');
      } else {
          message = "Uploading not completed - some error occurred";
      }
  }


  const handleFileInputChange = (/** @type {{ target: any; }} */ event) => {
  const fileInput = event.target;
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector(".file-name");
    let filenames = '';
    for (let i = 0; i < fileInput.files.length; i++) {
      filenames += fileInput.files[i].name;
      if (i !== fileInput.files.length - 1) {
        filenames += ', ';
      }
    }
    // @ts-ignore
    fileName.textContent = filenames;
  }
};
</script>
  
<div class="card mb-5">
    <div class="card-content">
        <form on:submit|preventDefault={addimage} enctype="multipart/form-data">
            <div id="file-select" class="file has-name is-fullwidth">
              <label class="file-label">
                  <input multiple bind:files={imagefiles} class="file-input" name="imagefiles" type="file" accept="image/png, image/jpeg" on:change={handleFileInputChange}>
                  <span class="file-cta">
                  <span class="file-icon">
                      <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                      Choose a file…
                  </span>
                  </span>
                  <span class="file-name"></span>
              </label>
            </div>
            <button type="submit" class="button is-info mt-2" class:is-loading={isLoading}>Upload</button>
        </form>
        <div class="mt-3">
          {message}
      </div>
    </div>
</div>
  