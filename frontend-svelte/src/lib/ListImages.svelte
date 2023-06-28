<script>
    import { placemarkService } from '../services/placemark-service';
    
    /**
	 * @type {{ img: any; _id: any; }}
	 */
    export let poi;

    /**
	 * @type {any}
	 */
    let imagefile;

    let message = "Add your images for your spot";

    async function addimage () {
        if(!imagefile) {
          message = "Choose a png/jpeg-file to upload"
        }
        let formData = new FormData();
        formData.append("imagefile", imagefile);

        // @ts-ignore
        const response = await placemarkService.addImage(poi._id, formData);
        if (response) {
            message = `Thanks! You added ${imagefile.name}`;
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

    const handleDelete = () => {

    };
</script>
  
<div class="card">
    <div class="card-image">
      <figure class="image is-256x256">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={poi.img}>
      </figure>
    </div>
    <div class="card-content">
        <form on:submit|preventDefault={addimage} enctype="multipart/form-data">
            <div id="file-select" class="file has-name is-fullwidth">
            <label class="file-label">
                <input bind:files={imagefile} class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg" on:change={handleFileInputChange}>
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
            <div class="box">
              {message}
          </div>
        </form>
        <div class="has-text-centered mt-4">
        <button class="button" on:click={handleDelete}>
            <i class="fas fa-trash"></i>
        </button>
        </div>
    </div>
</div>
  