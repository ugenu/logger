interface levelColors {
  [prop: string]: string
}

export const colors:levelColors = {
  error: 'redBG white bold',
  warn: 'yellowBG black bold',
  info: 'blueBG white bold',
  http: 'greenBG white bold',
  verbose: 'greenBG black',
  debug: 'whiteBG black dim',
  silly: 'magentaBG white dim'
};

export default colors;