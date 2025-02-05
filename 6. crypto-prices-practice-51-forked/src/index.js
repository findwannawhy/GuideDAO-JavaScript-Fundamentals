import { renderTableRow } from "./prices.js"
import "./styles.css"

const bitcoin = { title: "Bitcoin", price: 47311 }
const ethereum = { title: "Ethereum", price: 3407 }
const solana = { title: "Solana", price: 163 }
const tether = { title: "Tether", price: 1 }

let html = ""
html += renderTableRow(bitcoin)
html += renderTableRow(ethereum)
html += renderTableRow(solana)
html += renderTableRow(tether)

const tbody = document.querySelector("#prices-table tbody")
tbody.insertAdjacentHTML("beforeend", html)
