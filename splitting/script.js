let nameCounter = {};
const fileIconUrl = "fileicon.png";
const fileIcons = {
  "pdf": "pdficon.png",
  "txt": "texticon.png",
  "js": "jsicon.png",
  "html": "htmlicon.png",
  "css": "cssicon.png"
};


function generateName() {
  const input = document.getElementById("nameInput").value;
  const parts = input.split(".");  // in this line we are splitting the input this.is.my.pdf --> [this, is, my, pdf]
  const extension = parts.pop();  // here we are removing the last element of the array. and call it "extension"
                                  // for example if we put "this.is.my.pdf", we removed the "pdf" with "pop()"".   
  const name = parts.join(".");  // then we rejoin the rest of the elements by using "join(".")"  -->  "this.is.my"
  
  let count = nameCounter[name] || 0;
  count++;
  nameCounter[name] = count;
  const newName = name + "-" + count + "." + extension;  //here we recall the "extension" and add it again.
  
  // created a new image element for the file icon
  const fileIcon = document.createElement("img");
  fileIcon.src = fileIconUrl;
  fileIcon.alt = "File Icon";
  fileIcon.style.marginRight = "5px";

  const iconUrl = fileIcons[extension] ? fileIcons[extension] : "fileicon.png";
  fileIcon.src = iconUrl;

  // created a new span element to hold the file name 
  const fileName = document.createElement("span");
  fileName.innerText = newName;

  // created a new div element to hold the file icon and file name
  const fileContainer = document.createElement("div");
  fileContainer.appendChild(fileIcon);
  fileContainer.appendChild(fileName);

  // where the file containers will be displayed
  const fileSection = document.getElementById("fileSection");
  fileSection.appendChild(fileContainer);

  console.log(newName);
}
