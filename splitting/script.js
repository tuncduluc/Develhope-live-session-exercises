let nameCounter = {};

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
                                                       
  console.log(newName);
}