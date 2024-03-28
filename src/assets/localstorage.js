// Simpan berita ke Local Storage
export function simpanBerita(berita) {
    let beritaDibaca = JSON.parse(localStorage.getItem('beritaDibaca')) || [];
    beritaDibaca.push(berita);
    localStorage.setItem('beritaDibaca', JSON.stringify(beritaDibaca));
  }
  
  // Ambil berita dari Local Storage
  export function ambilBeritaDibaca() {
    return JSON.parse(localStorage.getItem('beritaDibaca')) || [];
  }
  