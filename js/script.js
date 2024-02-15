const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const konversiButton = document.getElementById("konversi");
const hasilKonversi = document.getElementById("hasil-konversi");

konversiButton.addEventListener("click", function() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);

    // Menampilkan cara penghitungan
    hasilKonversi.innerHTML = `
        ${celsius}°C x 9/5 + 32 = ${fahrenheit.toFixed(2)}°F
        <br>
        Penjelasan: Untuk mengkonversi suhu dari Celsius ke Fahrenheit, Anda perlu mengalikan suhu dalam Celsius dengan 9/5, kemudian menambahkan 32.
    `;
});
