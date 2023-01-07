
async function callAPI(){
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
let result =  await fetch(url)
result = await result.json()
console.log(result.ath_change_percentage)
console.log(result)
document.getElementById("coinData").innerHTML = result.map((coin)=>
    `<tr>
    <td><img src="${coin.image}" alt="icon" style="width:20px"></td>
    <td>${coin.name}</td>
    <td>${coin.symbol.toUpperCase()}</td>
    <td>$${coin.current_price}</td>
    <td>$${coin.total_volume}</td>
    <td style="color:red">${coin.ath_change_percentage.toFixed(2)}</td>
    <td>Mkt Cap: $${coin.market_cap}</td>

    </tr>`
    ).join("")

}
callAPI()
function colorr(per){
    return per
}

