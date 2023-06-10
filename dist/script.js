"use strict";
function generateTable() {
    const numRowsInput = document.getElementById("numRows");
    const numRows = parseInt(numRowsInput.value);
    const table = document.getElementById("table");
    table.innerHTML = "";
    for (let i = 1; i <= numRows; i++) {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.textContent = `Row ${i}`;
        if (i % 2 === 0) {
            //sisa hasil bagi
            row.className = "even-row"; //baris genap,
        }
        else {
            row.className = "odd-row"; //baris ganjil
        }
    }
}
function generateFibonacci() {
    //penjumlahan dari 2 bilangan sebelumnya
    const fibonacciInput = document.getElementById("fibonacciInput");
    const fibonacciOutput = document.getElementById("fibonacciOutput");
    const n = parseInt(fibonacciInput.value);
    if (isNaN(n) || n < 1) {
        //cek Not a number atau kurang dari 1
        fibonacciOutput.value = "Please enter a positive integer.";
        return;
    }
    let fibSeq = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            //jika i kurang dari 2
            fibSeq.push(i); // 0,1
        }
        else {
            //jika lebih dari 2
            const fibNum = fibSeq[i - 1] + fibSeq[i - 2];
            fibSeq.push(fibNum);
        }
    }
    fibonacciOutput.value = fibSeq.join(", ");
}
function sortAscending() {
    const numberInput = document.getElementById("numberInput");
    const result = document.getElementById("result");
    const numbers = numberInput.value
        .split(",")
        .map((num) => parseFloat(num.trim()));
    const sortedNumbers = numbers.sort((a, b) => a - b); //terkecil ke besar
    result.textContent = sortedNumbers.join(", ");
}
function sortDescending() {
    const numberInput = document.getElementById("numberInput");
    const result = document.getElementById("result");
    const numbers = numberInput.value
        .split(",")
        .map((num) => parseFloat(num.trim()));
    const sortedNumbers = numbers.sort((a, b) => b - a);
    result.textContent = sortedNumbers.join(", ");
}