const pageLoad = () => {
  console.log("Im running");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Upload blocked by server");
  };

  const form = document.getElementById("uploadForm");
  form.addEventListener("submit", handleSubmit);
}

window.addEventListener("load", pageLoad);