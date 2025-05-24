document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch("https://penguin-monitoring-backend.onrender.com/upload", {
      method: "POST",
      body: formData
    })
    .then(res => {
      if (!res.ok) throw new Error("Upload failed");
      return res.json();
    })
    .then(data => {
      document.getElementById("uploadMessage").innerText = "Upload successful!";
      form.reset();
    })
    .catch(err => {
      console.error(err);
      document.getElementById("uploadMessage").innerText = "Upload failed.";
    });
  });
  
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('themePreference');
    const lightMode = document.getElementById('upload-light-stylesheet');
    const darkMode = document.getElementById('upload-dark-stylesheet');

    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      lightMode.disabled = false;
      darkMode.disabled = true;
    } else {
      document.body.classList.remove('light-mode');
      lightMode.disabled = true;
      darkMode.disabled = false;
    }
  }

  document.addEventListener('DOMContentLoaded', applySavedTheme);


  