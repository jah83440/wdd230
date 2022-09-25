const date = new Date();
document.querySelector("footer div span").textContent = date.getFullYear();
const lastmodified = new Date(document.lastModified);
document.getElementById("lastupdatedate").textContent = `${lastmodified.getMonth() + 1}/${lastmodified.getDate()}/${lastmodified.getFullYear()} ${lastmodified.getHours()}:${lastmodified.getMinutes()}:${lastmodified.getSeconds()}`;
  