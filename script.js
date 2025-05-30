/* --------------------------------------------------
   EXPAND / COLLAPSE – works for every .toggle button
   -------------------------------------------------- */
   function toggleEssay(btn) {
    // assumes the collapsible <div> is the very next sibling
    const block = btn.nextElementSibling;
    const isHidden = block.style.display === "none" || block.style.display === "";
    block.style.display = isHidden ? "block" : "none";
  
    // swap the button label
    btn.textContent = isHidden ? "[-] Collapse" : "[+] Expand";
  }
  
  /* --------------------------------------------------
     FAUX TITLE-BAR BUTTONS
     -------------------------------------------------- */
  const win = document.getElementById("window");
  const [minBtn, maxBtn, closeBtn] = document.querySelectorAll(".controls button");
  
  /*  minimize (“_”) – just hide the window  */
  minBtn.onclick = () => {
    win.style.display = "none";
  };
  
  /*  maximize / restore (“☐” ⇄ “🗗”)  */
/*  maximize / restore  */
maxBtn.onclick = () => {
    const isMax = win.classList.toggle("maximized");
    maxBtn.textContent = isMax ? "🗗" : "☐";
  };
  
  
  /*  close (“X”) – playful alert ↓  */
  closeBtn.onclick = () => {
    alert("You can't close learning! 😉");
  };
  