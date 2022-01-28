document.body.style.margin = "0";
document.body.style.backgroundColor = " hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, san-serif";
document.body.style.fontSize = "18px";
 
const div = document.getElementById("wrapper");
div.style.backgroundColor = "rgb(27,46,73)";
div.style.width = "400px";
div.style.borderRadius = "20px";
div.style.padding = "25px";
div.style.fontFamily = "Outfit, sans-serif";
div.style.fontSize = "23px";
div.style.margin = " 0 auto";
div.style.marginTop = "100px";
div.style.boxShadow = " 3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";


// img
const img = document.createElement("img");
img.src = "./images/image-equilibrium.jpg";
img.style.width = "100%";
img.style.marginBottom = "25px";
img.style.alignItems = "center";
img.style.borderRadius = "20px";
wrapper.prepend(img);

// main title
const title = document.createElement("a");
title.href = "#";
title.innerText = "Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
title.style.fontSize = "30px";
title.style.textDecoration = "none";
title.style.fontWeight = "700";
wrapper.append(title);

// subtitle
const subtitle = document.createElement("h4");
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.style.color = " hsl(215, 51%, 70%)";
subtitle.style.lineHeight = "40px";
wrapper.append(subtitle);

// icon ETH
// const pseudoItem = document.createElement("img");
// pseudoItem.src = "./images/icon-ethereum.svg";
// wrapper.append(pseudoItem);

// 0.041ETH
const valueText = document.createElement("strong");
valueText.backgroundImage = "./images/icon-ethereum.svg"; // can't insert through bckg
valueText.innerText =  "0.041 ETH";
valueText.style.color = "hsl(178, 100%, 50%)";
valueText.style.float = "left";
valueText.style.paddingRight = "180px";
wrapper.append(valueText);

// icontime
// const timeImage = document.createElement("img");
// timeImage.src = "./images/icon-clock.svg";
// wrapper.append(timeImage);

// timeItem
const timeItem = document.createElement("p")
timeItem.style.backgroundImage = "./images/icon-clock.svg";  // can't insert through bckg
timeItem.innerText = "3 days left";
timeItem.style.color = "hsl(215, 51%, 70%)";
wrapper.append(timeItem);

// line
const line = document.createElement("hr");
line.style.color = "hsl(215, 32%, 27%)";
wrapper.append(line);

// avatar
const avatar = document.createElement("img");
avatar.src = "./images/image-avatar.png";
avatar.style.width = "60px";
avatar.style.float = "left";
wrapper.append(avatar);

// text
const creator = document.createElement("span");
creator.innerText = " Creation of";
creator.style.color = "hsl(215, 51%, 70%)";
creator.style.lineHeight ="60px";
creator.style.paddingLeft = "30px";
creator.style.marginRight = "8px"
wrapper.append(creator);

// textlink
const creatorLink = document.createElement("span");
creatorLink.innerText = "Jules Wyvern";
creatorLink.style.color = "hsl(0, 0%, 100%)";
wrapper.append(creatorLink);

// assess

alert ("я оцениваю свою работу на 90 баллов");