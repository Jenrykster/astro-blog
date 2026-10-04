export class ThemeChangedEvent extends Event {
  theme: string;

  constructor(theme: string) {
    super('themechanged')
    this.theme = theme;
  }
}

