const imgDiv = document.querySelector(".profileIMG-wrapper");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadbtn = document.querySelector("#uploadbtn");

console.log(imgDiv);
console.log(img);
console.log(file);
console.log(uploadbtn);

file.addEventListener("change", function () {
  const chosedfile = this.files[0];
  if (chosedfile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(chosedfile);
  }
});
