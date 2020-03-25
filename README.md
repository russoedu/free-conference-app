<img src="./media/icon.png" width="128" height="128" />

# FreeConference App

Creates a single space to help you managing people on the conference and visualising speaker times

![screenshot](./media/screenshot.png)

## Download

Download the app on [the packages page](https://github.com/russoedu/free-conference-app/releases)

## Configuration
To run the app you need to configure the Google Sheet that will be displayed on the left size by clicking on `file` and then `Publish to the web`

![publish to the web](./media/publish.png)

The sheet needs to have the first two columns set as Phone and Name. The rest of the columns don't mather. You can use this spreadsheet as a base for your meetings: https://docs.google.com/spreadsheets/d/1GrR8AM1DJQOzL-v3fLUJtxaIi6P9dD44hz-IBGbmKk4/. Just make a copy and follow the instructions to use it on the app.

Please make sure the configuration of the publishing is set to `CSV`

![CSV config](./media/publish-config.png)

Copy this URL. It will be used to configure the app.

On the app preferences, make sure you fill all the required data and then hit the reload button.

The required data are:

- Spreadsheet URL
- CSV URL
- Conference ID

![configurations](./media/preferences.png)

The app should start and work!
