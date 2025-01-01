const dropdownButton = document.getElementById('dropdownButton');
        const dropdownContent = document.getElementById('dropdownContent');
    
        dropdownButton.addEventListener('click', () => {
            dropdownContent.classList.toggle('hidden');
        });
    
        window.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.add('hidden');
            }
        });

// Fungsi untuk toggle dropdown
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');  // Menampilkan atau menyembunyikan dropdown
  }
  
  // Toggle menu dropdown saat tombol hamburger di klik
  document.getElementById('hamburger-button').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('hidden');  // Menampilkan atau menyembunyikan menu dropdown utama
  });
  
  // Menambahkan event listener untuk membuka genre atau bantuan film dropdown
  document.querySelectorAll('.w-full.text-left.text-sm.hover\\:text-gray-400').forEach(button => {
    button.addEventListener('click', function () {
      const dropdownId = this.innerText === "Genre" ? 'genreDropdown' : 'helpDropdown';
      toggleDropdown(dropdownId);
    });
  });
  