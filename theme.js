// Apply the saved palette before the page paints. Light is the original design.
(() => {
  let theme = 'light';
  try {
    if (localStorage.getItem('aditi-theme') === 'dark') theme = 'dark';
  } catch (_) { /* The switch also works when browser storage is unavailable. */ }
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#263f35' : '#abd4b5';
})();
