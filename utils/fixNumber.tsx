const minutesNumber = fixNumber(Array.from(Array(60).keys()));
const hourNumber = fixNumber(Array.from(Array(13).keys()));

function fixNumber(value: number[]) {
  value = value.map((hour) => {
    if (hour < 10) {
      hour = Number("0" + String(hour));
    }
    return hour;
  });
  return value;
}

export {};

//["f", "o", "o"]
//Array.from("foo");
//[2,4,6]
//Array.from([1,2,3], (x) => x*2)
//[0,1,2,3,4,5]
//Array.from({length:6}, (v,i)=> i)

//Array.from(Array(13).keys())
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
