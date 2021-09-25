"use strict"

{
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        // const results = ["大吉", "中吉", "凶", "小吉"] 
        // btn.textContent = results[Math.floor(Math.random() * results.length)];
        const n = Math.random();
        if (n < 0.1) {
            btn.textContent = "大吉"; // 10%
        } else if (n < 0.45) {
            btn.textContent = "中吉"; // 35%
        } else if (n < 0.90) {
            btn.textContent = "末吉"; // 45%
        } else {
            btn.textContent = "凶" // 10%
        }
    });
}