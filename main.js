/* =========================================
   AUTH GUARD — redirect to login if not logged in
========================================= */
function requireAuth() {
  if (!sessionStorage.getItem('fyutr_user')) {
    window.location.href = 'index.html';
  }
}

/* =========================================
   LOGIN
========================================= */
function login() {
  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value.trim();
  const err   = document.getElementById('error-msg');

  if (email === 'student@fyutr.com' && pass === 'fyutr123') {
    sessionStorage.setItem('fyutr_user', 'Raiyan');
    window.location.href = 'dashboard.html';
  } else {
    err.style.display = 'block';
    err.textContent   = 'Invalid email or password.';
  }
}

/* =========================================
   LOGOUT
========================================= */
function logout() {
  sessionStorage.removeItem('fyutr_user');
  window.location.href = 'index.html';
}

/* =========================================
   SIDEBAR TOGGLE (mobile)
========================================= */
function openSidebar() {
  document.getElementById('sidebar').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
function toggleSidebar() {
  const s = document.getElementById('sidebar');
  s.classList.contains('active') ? closeSidebar() : openSidebar();
}

/* =========================================
   DARK MODE
========================================= */
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'enabled' : 'disabled');
}
function applyDarkMode() {
  if (localStorage.getItem('darkMode') === 'enabled') document.body.classList.add('dark');
}

/* =========================================
   COUNT-UP ANIMATION
========================================= */
function runCounters() {
  document.querySelectorAll('.count').forEach(el => {
    const target = +el.getAttribute('data-target');
    const hasRM  = el.getAttribute('data-rm') !== null;
    let current  = 0;
    const step   = () => {
      current += target / 80;
      if (current < target) {
        el.textContent = (hasRM ? 'RM ' : '') + Math.floor(current).toLocaleString();
        requestAnimationFrame(step);
      } else {
        el.textContent = (hasRM ? 'RM ' : '') + target.toLocaleString();
      }
    };
    step();
  });
}

/* =========================================
   INJECT SIDEBAR HTML
========================================= */
function injectSidebar() {
  const user = sessionStorage.getItem('fyutr_user') || 'Raiyan';
  const html = `
  <div class="sidebar" id="sidebar">
    <div class="logo">Fy<span>utr</span></div>
    <div class="menu">
      <a href="dashboard.html">🏠 Dashboard</a>
      <a href="transactions.html">🔄 Transactions</a>
      <a href="analytics.html">📊 Analytics</a>
      <a href="budget.html">💰 Budget Planner</a>
      <a href="goals.html">🎯 Saving Goals</a>
      <a href="transfermoney.html">📤 Transfer Money</a>
      <a href="notifications.html">🔔 Notifications</a>
      <a href="settings.html">⚙️ Settings</a>
    </div>
    <div style="margin-top:auto;padding-top:30px;border-top:1px solid rgba(255,255,255,0.15);">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <div style="width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;">
          ${user.charAt(0)}
        </div>
        <div>
          <p style="margin:0;font-size:13px;font-weight:600;">${user}</p>
          <p style="margin:0;font-size:11px;opacity:0.6;">Student</p>
        </div>
      </div>
      <a href="#" onclick="logout()" style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.7);font-size:13px;text-decoration:none;padding:8px 12px;border-radius:10px;transition:0.2s;">
        🚪 Logout
      </a>
    </div>
  </div>
  <div id="overlay" class="sidebar-overlay" onclick="closeSidebar()"></div>`;

  const target = document.getElementById('sidebar-mount');
  if (target) target.innerHTML = html;

  // highlight active link
  const links = document.querySelectorAll('.menu a');
  links.forEach(a => {
    if (a.getAttribute('href') === window.location.pathname.split('/').pop()) {
      a.classList.add('active');
    }
  });
}

/* =========================================
   DOMContentLoaded — run on every page
========================================= */
document.addEventListener('DOMContentLoaded', () => {
  applyDarkMode();
  injectSidebar();
  runCounters();
});
