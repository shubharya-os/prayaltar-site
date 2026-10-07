// prayaltar.com: nav border on scroll and FAQ accordions. No libraries, no network, no storage.
(function () {
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // One answer open at a time within each FAQ group.
  document.querySelectorAll('.faq').forEach(function (group) {
    group.addEventListener('toggle', function (e) {
      var opened = e.target;
      if (!opened.open) return;
      group.querySelectorAll('details[open]').forEach(function (d) { if (d !== opened) d.open = false; });
    }, true);
  });

  // Open the answer a link points at (e.g. /support#locked-out).
  function openFromHash() {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView(); }
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();
