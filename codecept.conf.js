require('dotenv-flow').config();
var envConfig = process.env;

exports.config = {
  output: 'output',
  helpers: {
    REST: {
      endpoint:  `${envConfig.ENDPOINT}:${envConfig.PORT}`,
      onRequest: (request) => {
        request.headers[envConfig.API_KEY_NAME] = envConfig.API_KEY_VALUE;
      }
    },
    TestChai: {
      require: './helpers/testchai_helper.ts'
    },
  },
  include: {     
  },
  mocha: {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": false,
          "steps": false,
        }
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/junit.xml"
        },
      }
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './step_definitions/common_steps.ts',
      './step_definitions/steps.ts'
    ],
  },
  plugins: {
    "allure": {
      outputDir: './allure-results',
    }
  },
  require: ["ts-node/register"],
  name: 'codeceptjs'
}