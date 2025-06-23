document.querySelectorAll('.jss5').forEach(div => {
  const Collapse = div.parentElement.getElementsByClassName("MuiCollapse-root")[0];

  // Add transitionend listener once per Collapse element
  Collapse.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'height') return;

    if (Collapse.className === "MuiCollapse-root") {
      // After expanding
      Collapse.style.height = 'auto';
      Collapse.className = "MuiCollapse-root MuiCollapse-entered";
    } else if (Collapse.className === "MuiCollapse-root MuiCollapse-hidden") {
      // After collapsing
      Collapse.style.height = '';
    }
  });

  div.addEventListener('click', () => {
    // Collapse all other divs
    document.querySelectorAll('.MuiPaper-root').forEach(otherDiv => {
      if (otherDiv !== div.parentElement) {
        const otherCollapse = otherDiv.getElementsByClassName("MuiCollapse-root")[0];
        if (otherCollapse.className === "MuiCollapse-root" || otherCollapse.className === "MuiCollapse-root MuiCollapse-entered") {
          // Start collapsing
          otherCollapse.style.height = otherCollapse.scrollHeight + 'px';
          otherCollapse.offsetHeight; // trigger reflow
          otherCollapse.style.height = '0px';
          otherCollapse.className = "MuiCollapse-root MuiCollapse-hidden";
        }
      }
    });

    // Toggle clicked div
    console.log(Collapse, Collapse.className)
    if (Collapse.className === "MuiCollapse-root MuiCollapse-hidden") {
      // Expand
      Collapse.className = "MuiCollapse-root";
      Collapse.style.height = '0px';
      Collapse.offsetHeight; // trigger reflow
      Collapse.style.height = Collapse.scrollHeight + 'px';
    } else {
      // Collapse
      Collapse.style.height = Collapse.scrollHeight + 'px';
      Collapse.offsetHeight; // trigger reflow
      Collapse.style.height = '0px';
      Collapse.className = "MuiCollapse-root MuiCollapse-hidden";
    }
  });
});
