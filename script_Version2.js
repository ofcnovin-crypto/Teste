// script.js — basic interactivity for FinTech page
document.addEventListener('DOMContentLoaded', () => {
  // Populate select menus with sample options
  const banking = ['Accounts', 'Loans', 'Cards'];
  const investing = ['Stocks', 'Crypto', 'Savings'];
  const earning = ['Referral', 'Cashback', 'Staking'];
  const about = ['Company', 'Careers', 'Press'];

  const fill = (id, items) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(i => `<option value="${i.toLowerCase().replace(/\s+/g,'-')}">${i}</option>`).join('');
  };
  fill('select-banking', banking);
  fill('select-investing', investing);
  fill('select-earning', earning);
  fill('select-about', about);

  // Form handling
  const form = document.getElementById('getstarted');
  const msg = form.querySelector('.form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('full_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    if (!name || !email || !phone || !password) {
      msg.textContent = 'Por favor preencha todos os campos.';
      msg.style.color = '#ff8b8b';
      return;
    }
    const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRE.test(email)){
      msg.textContent = 'Coloque um e-mail válido.';
      msg.style.color = '#ff8b8b';
      return;
    }
    if (password.length < 6){
      msg.textContent = 'Senha precisa ter pelo menos 6 caracteres.';
      msg.style.color = '#ff8b8b';
      return;
    }

    // Simulate successful signup with a neon glow effect
    msg.textContent = 'Conta criada com sucesso! Bem-vindo(a) ' + name + ' ✨';
    msg.style.color = '#a6ffef';
    form.reset();

    // temporary visual feedback on the sign up button
    const btn = document.getElementById('btn');
    btn.animate([
      { boxShadow: '0 6px 20px rgba(0,255,209,0.08)' },
      { boxShadow: '0 12px 40px rgba(0,255,209,0.28)' },
      { boxShadow: '0 6px 20px rgba(0,255,209,0.08)' }
    ],{duration:700,iterations:1});
  });

  // Demo button autofill
  const demo = document.getElementById('btn-demo');
  demo.addEventListener('click', () => {
    document.getElementById('full_name').value = 'Demo User';
    document.getElementById('email').value = 'demo@fintech.test';
    document.getElementById('phone').value = '+2348000000000';
    document.getElementById('password').value = 'demopass';
  });

  // Vendor modal
  const modal = document.getElementById('vendor-modal');
  const vendorName = document.getElementById('vendor-name');
  const vendorDesc = document.getElementById('vendor-desc');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.vendor-info').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'Fornecedor';
      vendorName.textContent = name;
      vendorDesc.textContent = `${name} é um fornecedor parceiro. Mais informações em breve.`;
      modal.setAttribute('aria-hidden', 'false');
    });
  });
  closeBtn.addEventListener('click', () => modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.setAttribute('aria-hidden','true'); });

  // Login link (open a small prompt for demo)
  document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Funcionalidade de login de demonstração. Implemente autenticação no backend.');
  });

  // Contact button
  document.getElementById('contact-us').addEventListener('click', () => {
    window.open('mailto:hello@fintech.example?subject=Contact', '_blank');
  });
});