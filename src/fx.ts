// Generate vaguely life-like FX demo data,

// Algorithm translated from an excellent book:
// Data Push Apps with HTML5 SSE
// Pragmatic Solutions for Real-World Clients
// By Darren Cook
// http://shop.oreilly.com/product/0636920030928.do

class CurrencyPair {

  constructor(
    private symbol: string,
    private firstBid: number,
    private spread: number,
    private decimalPlaces: number,
    private longCycle: number,
    private shortCycle: number) { }

  public generate(secSince1970: number) {
    let bid = this.firstBid;
    bid += this.spread * 100 *
      Math.sin((360 / this.longCycle) * (deg2rad(secSince1970 % this.longCycle)));
    bid += this.spread * 30 *
      Math.sin((360 / this.shortCycle) * (deg2rad(secSince1970 % this.shortCycle)));
    bid += (randomIntInclusive(-1000, 1000) / 1000.0) * 10 * this.spread;
    const ask = bid + this.spread;

    return {
      timestamp: secSince1970,
      symbol: this.symbol,
      bid: bid.toFixed(this.decimalPlaces),
      ask: ask.toFixed(this.decimalPlaces)
    };
  }
}

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function randomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Completely made up values, these are real currency identifiers
// but the number ranges are not intended to be realistic.

const symbols = [
  new CurrencyPair('EUR/USD', 1.610, 0.0001, 5, 360, 47),
  new CurrencyPair('USD/JPY', 85.10, 0.01, 3, 341, 55),
  new CurrencyPair('AUD/GBP', 1.823, 0.0002, 5, 319, 39),
  new CurrencyPair('NZD/USD', 1.45, 0.001, 4, 290, 41)
];

export function startFxGenerator(cb, ms) {
  setInterval(() => {
    const hrTime = process.hrtime();
    const t = hrTime[0] * 1000 + hrTime[1] / 1000000; // ms since 1970
    const ix = randomIntInclusive(0, symbols.length - 1);
    cb(symbols[ix].generate(t));
  }, randomIntInclusive(ms, ms * 1.5)); // simulate jitter
}

// command line demo:
// startFxGenerator(console.log.bind(console), 250);
