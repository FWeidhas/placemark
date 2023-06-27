<script>
    import { placemarkService } from '../services/placemark-service';
    
    /**
	 * @type {{ img: any; _id: any; }}
	 */
     export let poi;


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
        <form action={`/poi/${poi._id}/uploadimage`} method="POST" enctype="multipart/form-data">
            <div id="file-select" class="file has-name is-fullwidth">
            <label class="file-label">
                <input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg" on:change={handleFileInputChange}>
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
        <div class="has-text-centered mt-4">
        <button class="button" on:click={handleDelete}>
            <i class="fas fa-trash"></i>
        </button>
        </div>
    </div>
</div>
  