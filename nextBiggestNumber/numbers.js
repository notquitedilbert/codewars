function nextBigger(n) {
  // check for small numbers and undefined
  if (n < 10 || n === undefined) { return -1 }

  // split into an array
  var nn = n.toString().split('')
  // walk from right to left looking for numbers to swap

  var i = nn.length - 2;
  var swap = null;
  do {
    if (nn[i] < nn[i + 1]) {
      var swap = nn[i];
      var match = null;
      var j = 0;
      var lookin = nn.slice(i, nn.length).sort()
      do {
        if (swap < lookin[j]) {
          nn[i] = lookin[j]
          lookin[j] = swap
          match = true
        }
        j++
      } while (match == null);

      // sort the end numbers into ascending order
      var endOf = lookin.sort().join('')
      // get the start of the numbers
      var startOf = nn.slice(0, i + 1).join('')
      // join them together and return the new number
      return parseInt(startOf + endOf)
    }

    i--
  } while (i >= 0 || swap == null)

  // for (var i = nn.length - 2; i >= 0; i--) {
  //   // find the spot to swap the numbers
  //   if (nn[i] < nn[i + 1]) {
  //     // nn[i] is the number to swap out
  //     var swap = nn[i]
  //     // nn[i] = nn[i + 1]
  //     // nn[i + 1] = swap

  //     var lookin = nn.slice(i, nn.length).sort()
  //     for (var j = 0; j < lookin.length - 1; j++) {
  //       if (swap < lookin[j]) {
  //         nn[i] = lookin[j]
  //         lookin[j] = swap
  //       }
  //     }


  //     // sort the end numbers into ascending order
  //     var endOf = lookin.sort().join('')
  //     // get the start of the numbers
  //     var startOf = nn.slice(0, i + 1).join('')
  //     // join them together and return the new number

  //     console.log(n, nn, lookin, startOf, endOf)
  //     return parseInt(startOf + endOf)
  //   }
  // }
  // return -1
}// end of function

console.log(nextBigger(90986))
module.exports.nextBigger = nextBigger;