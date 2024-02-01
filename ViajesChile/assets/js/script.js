// Componente JS 2: ScrollSpy

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});

// Componente JS 3: Tooltips

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
