var newlocation = window.location.href
if (newlocation === "https://digidalstudios.github.io/") {
  window.location.href = "roblox://"
  throw ''
}
window.location.href = newlocation.replace("https://digidalstudios.github.io/?", "roblox://")
setTimeout(() => {
  window.close()
}, "500");
