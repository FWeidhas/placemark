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

    let message = "Add your images for your spot";

    async function addimage () {
        if(!imagefiles) {
          message = "Choose a png/jpeg-file to upload"
        }
        let formData = new FormData();
        for (let i = 0; i < imagefiles.length; i++) {
            let partfile = imagefiles[i];
            formData.append(`image_buffer_${i}`, partfile);
        }
        // formData.append("imagefile", imagefile);

        // @ts-ignore
        const response = await placemarkService.addImage(poi._id, formData);
        if (response) {
          dispatch('imageAdded');
        } else {
            message = "Uploading not completed - some error occurred";
        }
    }


    const handleFileInputChange = (/** @type {{ target: any; }} */ event) => {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
        const fileName = document.querySelector(".file-name");
        // @ts-ignore
        fileName.textContent = fileInput.files[0].name;
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
              <button type="submit" class="button is-info">Upload</button>
            </div>
        </form>
        <div class="mt-3">
          {message}
      </div>
    </div>
</div>
  