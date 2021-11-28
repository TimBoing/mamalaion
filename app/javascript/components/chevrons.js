const collapsibleChevrons = () => {
  const chevron = document.querySelector(".chevron");

  if (chevron){
    const worldRecords = document.getElementById("world-records-list-title");
    const personalRecords = document.getElementById("personal-records-list-title");
    const pagesChoice = document.getElementById("pages-choice");
    const modesChoice = document.getElementById("modes-choice");
    const optionsChoice = document.getElementById("options-choice");

    if (worldRecords && personalRecords) {
      const worldRecordList = document.getElementById("world-records-list");
      const personalRecordList = document.getElementById("personal-records-list");


      worldRecords.addEventListener('click', (event) => {
        const worldRecordChevronUp = worldRecords.querySelector(".fa-chevron-up");
        const worldRecordChevronDown = worldRecords.querySelector(".fa-chevron-down");
        if (worldRecordList.style.display == "none") {
          worldRecordList.style.display = "block";
          worldRecordChevronUp.style.display = "block";
          worldRecordChevronDown.style.display = "none";
        } else {
          worldRecordList.style.display = "none";
          worldRecordChevronUp.style.display = "none";
          worldRecordChevronDown.style.display = "block";
        }
      });

      personalRecords.addEventListener('click', (event) => {
        const personalRecordChevronUp = personalRecords.querySelector(".fa-chevron-up");
        const personalRecordChevronDown = personalRecords.querySelector(".fa-chevron-down");
        if (personalRecordList.style.display == "none") {
          personalRecordList.style.display = "block";
          personalRecordChevronUp.style.display = "block";
          personalRecordChevronDown.style.display = "none";
        } else {
          personalRecordList.style.display = "none";
          personalRecordChevronUp.style.display = "none";
          personalRecordChevronDown.style.display = "block";
        }
      });
    }


    if (pagesChoice && modesChoice && optionsChoice) {
      const pagesChoiceCollapsible = document.getElementById("pages-choice-collapsible");
      const modesChoiceCollapsible = document.getElementById("modes-choice-collapsible");
      const optionsChoiceCollapsible = document.getElementById("options-choice-collapsible");

      pagesChoice.addEventListener('click', (event) => {
        const pagesChoiceCollapsibleChevronUp = pagesChoice.querySelector(".fa-chevron-up");
        const pagesChoiceCollapsibleChevronDown = pagesChoice.querySelector(".fa-chevron-down");
        if (pagesChoiceCollapsible.style.display == "none") {
          pagesChoiceCollapsible.style.display = "block";
          pagesChoiceCollapsibleChevronUp.style.display = "block";
          pagesChoiceCollapsibleChevronDown.style.display = "none";
        } else {
          pagesChoiceCollapsible.style.display = "none";
          pagesChoiceCollapsibleChevronUp.style.display = "none";
          pagesChoiceCollapsibleChevronDown.style.display = "block";
        }
      });

      modesChoice.addEventListener('click', (event) => {
        const modesChoiceCollapsibleChevronUp = modesChoice.querySelector(".fa-chevron-up");
        const modesChoiceCollapsibleChevronDown = modesChoice.querySelector(".fa-chevron-down");
        if (modesChoiceCollapsible.style.display == "none") {
          modesChoiceCollapsible.style.display = "block";
          modesChoiceCollapsibleChevronUp.style.display = "block";
          modesChoiceCollapsibleChevronDown.style.display = "none";
        } else {
          modesChoiceCollapsible.style.display = "none";
          modesChoiceCollapsibleChevronUp.style.display = "none";
          modesChoiceCollapsibleChevronDown.style.display = "block";
        }
      });

      optionsChoice.addEventListener('click', (event) => {
        const optionsChoiceCollapsibleChevronUp = optionsChoice.querySelector(".fa-chevron-up");
        const optionsChoiceCollapsibleChevronDown = optionsChoice.querySelector(".fa-chevron-down");
        if (optionsChoiceCollapsible.style.display == "none") {
          optionsChoiceCollapsible.style.display = "block";
          optionsChoiceCollapsibleChevronUp.style.display = "block";
          optionsChoiceCollapsibleChevronDown.style.display = "none";
        } else {
          optionsChoiceCollapsible.style.display = "none";
          optionsChoiceCollapsibleChevronUp.style.display = "none";
          optionsChoiceCollapsibleChevronDown.style.display = "block";
        }
      });
    }


  }
}

export { collapsibleChevrons };
