class Player {
  constructor(name, figures) {
      this.name = name;
      this.figures = figures;
  }
  get(selected)  {
    const figures = Object.keys(this.figures);
    for (let figure of figures) {
      if (this.figures[figure].position ===selected) {
        return this.figures[figure];
      }
    }
 
    throw new Error('InvalidSelectedFigureException')
  }
  delete(selected) {
    const figures = Object.keys(this.figures);
    for (let figure of figures) {
      if (this.figures[figure].position === selected) {
        delete this.figures[figure];
        return; // todo why does break not work?!
      }
    }

    throw new Error('InvalidSelectedFigureException')
  }
}

module.exports = Player 