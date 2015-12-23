var myFunc = require('../js/amusement_parks');

describe("Group by ID", function () {
  it("returns a parks object by id", function () {
    var data = [
      {
        id: 546,
        name: "Kalahari Resorts",
        city: "Wisconsin Dells",
        state: "Wisconsin",
        country: "United States"
      },
      {
        id: 547,
        name: "Little Amerricka",
        city: "Marshall",
        state: "Wisconsin",
        country: "United States"
       }
     ]

     var expected = {
       546 : {
         id: 546,
         name: "Kalahari Resorts",
         city: "Wisconsin Dells",
         state: "Wisconsin",
         country: "United States"
       },
       547 : {
         id: 547,
         name: "Little Amerricka",
         city: "Marshall",
         state: "Wisconsin",
         country: "United States"
        }
     }

     expect(myFunc.indexById(data)).toEqual(expected);
  })
})

describe("Index by Country", function () {
  it("returns a parks object by country", function () {
    var data = [
      {
        id: 546,
        name: "Kalahari Resorts",
        city: "Wisconsin Dells",
        state: "Wisconsin",
        country: "United States"
      },
      {
        id: 547,
        name: "Little Amerricka",
        city: "Marshall",
        state: "Wisconsin",
        country: "United States"
       },
      {
        id: 2,
        name: "Calaway Park",
        city: "Calgary",
        state: "Alberta",
        country: "Canada"
      }
    ]

    var expected = {
      "Canada" : [
        {
          id: 2,
          name: "Calaway Park",
          city: "Calgary",
          state: "Alberta",
          country: "Canada"
        }
      ],
      "United States" : [
        {
          id: 546,
          name: "Kalahari Resorts",
          city: "Wisconsin Dells",
          state: "Wisconsin",
          country: "United States"
        },
        {
          id: 547,
          name: "Little Amerricka",
          city: "Marshall",
          state: "Wisconsin",
          country: "United States"
         }
      ]
    }

    expect(myFunc.indexByCountry(data)).toEqual(expected);
  })
})
describe("Indexing by Country and State", function () {
  xit("returns an object by Country, State", function () {
    var data = [
      {
        id: 3,
        name: "Galaxyland",
        city: "Edmonton",
        state: "Alberta",
        country: "Canada"
      },
      {
        id: 4,
        name: "Heratage Park",
        city: "Calgary",
        state: "Alberta",
        country: "Canada"
      },
      {
        id: 6,
        name: "Playland (Vancouver)",
        city: "Vancouver",
        state: "British Columbia",
        country: "Canada"
      },
      {
        id: 8,
        name: "Crystal Palace Amusement Park",
        city: "Dieppe",
        state: "New Brunswick",
        country: "Canada"
      }
    ]

    var expected = {
      "Alberta, Canada" : [
        {
          id: 3,
          name: "Galaxyland",
          city: "Edmonton",
          state: "Alberta",
          country: "Canada"
        },
        {
          id: 4,
          name: "Heratage Park",
          city: "Calgary",
          state: "Alberta",
          country: "Canada"
        },
      ],
      "British Columbia, Canada" : [
        {
          id: 6,
          name: "Playland (Vancouver)",
          city: "Vancouver",
          state: "British Columbia",
          country: "Canada"
        },
      ],
      "New Brunswick, Canada" : [
        {
          id: 8,
          name: "Crystal Palace Amusement Park",
          city: "Dieppe",
          state: "New Brunswick",
          country: "Canada"
        }
      ]
    }

    expect(myFunc.indexByCountryState(data)).toEqual(expected);
  })
})
