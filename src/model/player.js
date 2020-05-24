class Player {
  constructor(name, figures) {
    this.name = name;
    this.figures = figures;
  }
  get(selected) {
    const figures = Object.keys(this.figures);
    for (let figure of figures) {
      if (this.figures[figure].position ===selected) {
        return this.figures[figure];
      }
    }

    throw new Error('InvalidSelectedFigureException')
  }
}

module.exports = Player