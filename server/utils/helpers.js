function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function generateUserData() {
    return {
      role: "user",
    }
  }
  
  module.exports = {
    generateUserData
  }