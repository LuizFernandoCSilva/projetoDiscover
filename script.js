function toggleMode() {
  const html = document.documentElement
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  o toggle faz essa lógica
  */
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayke Brito sorrindo, usando óculos escuro e camisa preta,barba e fundo amarelo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayke Brito sorrindo, usando óculos e camisa preta,barba e fundo amarelo"
    )
  }
}
