const cat = {
  history: [],
  legs: 4,
  addHistoryEntry(entry) {
    console.info(entry)
    this.history.push(entry)
  },
  raise: function() {
    let msg = `Котик проснулся`
    this.addHistoryEntry(msg)
  },
  loadHistory: function() {
    return this.history.join("")
  }
}





module.exports = cat