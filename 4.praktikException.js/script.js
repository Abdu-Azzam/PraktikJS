function hitungPembagian() {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const hasilElement = document.getElementById("hasil");
  const errorElement = document.getElementById("error");

  errorElement.textContent = "";

  try {
    if (isNaN(angka1) || isNaN(angka2)) {
      throw new Error("Input harus berupa angka.");
    }

    const num1 = parseFloat(angka1);
    const num2 = parseFloat(angka2);

    if (num2 === 0) {
      throw new Error("Tidak bisa membagi dengan nol.");
    }

    const hasil = num1 / num2;

    // hasil
    hasilElement.textContent = `Hasil pembagian: ${hasil}`;
  } catch (error) {
    errorElement.textContent = error.message;
    hasilElement.textContent = "";
  }
}
