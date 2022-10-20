const datefield = document.querySelector("#currentdate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

const date = new Date();
document.querySelector("footer div span").textContent = date.getFullYear();
const lastmodified = new Date(document.lastModified);
document.getElementById("lastupdatedate").textContent = `Last Modification: ${lastmodified.getMonth() + 1}/${lastmodified.getDate()}/${lastmodified.getFullYear()} ${lastmodified.getHours()}:${lastmodified.getMinutes()}:${lastmodified.getSeconds()}`;
