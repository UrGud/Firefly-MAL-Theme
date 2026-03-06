const changelog = document.getElementById("changelog");

const changelogData = async () => {
  try {
    const res = await fetch("https://urgud.github.io/Firefly-MAL-Theme/changelog.json");
    const data = await res.json();

    console.log(data.length);

    let itt = 0;
    
    data.forEach(log => {
      itt++;
      changeItem = document.createElement("details"); 
      changeItem.classList.add("log-version");
      if (itt === data.length) {
        changeItem.setAttributeNode(document.createAttribute("open"));
      } 

      version = document.createAttribute("data-version");
      version.value = log.version;
      changeItem.setAttributeNode(version);

      changelog.append(changeItem);

      changeName = document.createElement("summary");
      changeName.innerHTML = '<span>' + log.version + " | " + log.name + '</span><p>' + log.date + '</p>';
      changeItem.append(changeName);

      changeDescription = document.createElement("ul");

      log.description.forEach(val => {
        changeDescriptionItem = document.createElement("li");
        changeDescriptionItem.innerText = val;
        changeDescription.append(changeDescriptionItem);
      });
      changeItem.append(changeDescription);
    })

  } catch (err) {
    console.error("error", err);
  }
};

changelogData();