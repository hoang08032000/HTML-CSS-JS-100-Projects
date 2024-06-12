const projects = document.querySelector('.projects');

window.onload = init;

async function init() {
  data.forEach(item => {
    projects.innerHTML += `
        <div>
            <img src="./projects${item.path}/${item.preview}">
            <div>
                <p>${item.title}</p>
                <a href="./projects${item.path}/index.html">Preview</a>
            </div>
        </div>
    `;
  });
}
