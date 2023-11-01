// Image input element

// const dropArea = document.querySelector("#drop-area");
const inputFile1 = document.querySelector("#input-file1");
const imageView1 = document.querySelector("#img-view1");

const inputFile2 = document.querySelector("#input-file2");
const imageView2 = document.querySelector("#img-view2");

const inputFile3 = document.querySelector("#input-file3");
const imageView3 = document.querySelector("#img-view3");

inputFile1.addEventListener("change", function () {
  let imgLink = URL.createObjectURL(inputFile1.files[0]);
  imageView1.style.backgroundImage = `url(${imgLink})`;
  imageView1.textContent = "";
  imageView1.style.border = 0;
});

inputFile2.addEventListener("change", function () {
  let imgLink = URL.createObjectURL(inputFile2.files[0]);
  imageView2.style.backgroundImage = `url(${imgLink})`;
  imageView2.textContent = "";
  imageView2.style.border = 0;
});
inputFile3.addEventListener("change", function () {
  let imgLink = URL.createObjectURL(inputFile3.files[0]);
  imageView3.style.backgroundImage = `url(${imgLink})`;
  imageView3.textContent = "";
  imageView3.style.border = 0;
});