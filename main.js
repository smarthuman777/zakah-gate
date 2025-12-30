function calcZakah() {
  let money = document.getElementById("money").value
  let zakah = (money * 0.025)

  document.getElementById("result").innerText =
    "زكاتك = " + zakah + " ريال"
}
