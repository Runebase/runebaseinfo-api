const path = require('path')

const CHAIN = Symbol('runebase.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.runebaseinfo.lib.Chain.get(this.config.runebase.chain)
    return this[CHAIN]
  },
  get runebaseinfo() {
    return {
      lib: require(path.resolve(this.config.runebaseinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.runebaseinfo.path, 'rpc'))
    }
  }
}
