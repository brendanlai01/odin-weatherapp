export default function createDefaultHeader(){
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Tasks';
    header.appendChild(headerTitle);
    header.classList.add("header", "bold", "center-align", "roboto-regular");
    document.body.append(header);
}