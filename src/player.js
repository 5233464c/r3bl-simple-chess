class Player {
  constructor(name, figures) {
      this.name = name;
      this.figures = figures;
  }
  get(selected)  {
    if (this.figures.f1.position == selected) {
        return this.figures.f1;
    }
    if (this.figures.f2.position == selected) {
        return this.figures.f2;
    }
 
    throw new Error('InvalidSelectedFigureException')
  }
}

module.exports = Player 