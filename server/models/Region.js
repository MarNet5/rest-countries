const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    code: String,
    name: String,
    symbol: String
})

const flagSchema = new mongoose.Schema({
    svg: String,
    png: String
})

const languageSchema = new mongoose.Schema({
    iso639_1: {
        type: String,
        required: true,
      },
      iso639_2: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      nativeName: {
        type: String,
        required: true,
      }
})
const regionalBlockSchema = new mongoose.Schema({
    acronym: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      otherAcronyms: {
        type: Array,
        required: true,
      }
})

const translationsSchema = new mongoose.Schema({
    br: {
        type: String,
        required: true,
      },
    pt: {
        type: String,
        required: true,
      },
    nl: {
        type: String,
        required: true,
      },
    hr: {
        type: String,
        required: true,
      },
    fa: {
        type: String,
        required: true,
      },
    de: {
        type: String,
        required: true,
      },
    es: {
        type: String,
        required: true,
      },
    fr: {
        type: String,
        required: true,
      },
    ja: {
        type: String,
        required: true,
      },
    it: {
        type: String,
        required: true,
      },
    hu: {
        type: String,
        required: true,
      },
})

const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  topLevelDomain: {
    type: Array,
    required: true,
  },
  alpha2Code: {
    type: String,
    required: true,
  },
  alpha3Code: {
    type: String,
    required: true,
  },
  callingCodes: {
    type: Array,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  altSpellings: {
    type: Array,
    required: true,
  },
  subregion: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  latlng: {
    type: Array,
    required: true,
  },
  demonym: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  timezones: {
    type: Array,
    required: true,
  },
  nativeName: {
    type: String,
    required: true,
  },
  numericCode: {
    type: String,
    required: true,
  },
  flags: flagSchema,
  currencies: currencySchema,
  languages: languageSchema,
  translations: translationsSchema,
  flag: {
    type: String,
    required: true,
  },
  regionalBlocs: regionalBlockSchema,
  independent: {
    type: Boolean,
    required: true,
  },
  gini: {
    type: Number,
    required: false,
  },
  borders: {
    type: Array,
    required: true,
  },
  cioc: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('Region',regionSchema)