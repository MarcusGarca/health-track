const image_input = document.querySelector('#imageInput');
var uploaded_image = "";

image_input.addEventListener("change", () => {

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector('#display_image').src = `${uploaded_image}`
    });
    reader.readAsDataURL(image_input.files[0]);
})

