// ==============================
// FITUR 1: DARK MODE TOGGLE
// ==============================

const darkToggleBtn = document.querySelector('#dark-toggle');

darkToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');

  if (isDarkMode) {
    darkToggleBtn.textContent = '☀️ Light Mode';
  } else {
    darkToggleBtn.textContent = '🌙 Dark Mode';
  }
});

// ==============================
// FITUR 2: COUNTER
// ==============================

let count = 0;

const angkaDisplay = document.querySelector('#angka-counter');
const pesanDisplay = document.querySelector('#counter-pesan');
const btnTambah = document.querySelector('#btn-tambah');
const btnKurang = document.querySelector('#btn-kurang');

function updatePesan(n) {
  if (n === 0) {
    pesanDisplay.textContent = 'Yuk mulai minum air!';
  } else if (n < 4) {
    pesanDisplay.textContent = 'Kurang minum nih...';
  } else if (n < 8) {
    pesanDisplay.textContent = 'Lumayan, terus tambah! 💧';
  } else {
    pesanDisplay.textContent = 'Keren! Sudah cukup minum air hari ini! 🎉';
  }
}

btnTambah.addEventListener('click', () => {
  count++;
  angkaDisplay.textContent = count;
  updatePesan(count);
});

btnKurang.addEventListener('click', () => {
  if (count > 0) {
    count--;
    angkaDisplay.textContent = count;
    updatePesan(count);
  }
});

// ==============================
// FITUR 3: VALIDASI FORM
// ==============================

const btnKirim = document.querySelector('#btn-kirim');
const inputNama = document.querySelector('#input-nama');
const inputEmail = document.querySelector('#input-email');
const inputPesan = document.querySelector('#input-pesan');
const formFeedback = document.querySelector('#form-feedback');

function tampilkanPesan(teks, tipe) {
  formFeedback.textContent = teks;
  formFeedback.className = 'feedback ' + tipe;
}

function isEmailValid(email) {
  return email.includes('@') && email.includes('.');
}

btnKirim.addEventListener('click', () => {
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const pesan = inputPesan.value.trim();

  if (nama === '' || email === '' || pesan === '') {
    tampilkanPesan('⚠️ Semua field harus diisi!', 'error');
    return;
  }

  if (!isEmailValid(email)) {
    tampilkanPesan('⚠️ Format email tidak valid! Contoh: nama@email.com', 'error');
    return;
  }

  tampilkanPesan('✅ Pesan berhasil dikirim! Terima kasih, ' + nama + '!', 'success');

  inputNama.value = '';
  inputEmail.value = '';
  inputPesan.value = '';
});

// ==============================
// FITUR 4: SCROLL REVEAL ANIMATION
// ==============================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});
