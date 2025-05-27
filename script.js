  // Toggle show / hide for the long essay block
  function toggleEssay() {
    const block = document.getElementById("essay");
    block.style.display = block.style.display === "none" ? "block" : "none";
  }

  // (Optional) Faux title‑bar buttons
  const win   = document.getElementById("window");
  const btns  = document.querySelectorAll(".controls button");
  btns[0].onclick = () => win.style.display = "none";                // hide
  btns[1].onclick = () => win.style.width   = "100%";                // simple max
  btns[2].onclick = () => alert("You can't close learning! 😉");     // playful