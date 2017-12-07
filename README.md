# Pollution Tracker: Front-end

The front-end for an app to display the pollution and temprature history in the city of Zhengzhou, China. The back-end will collect pollution and temperature information twice a day (morning and night) and will save to a database, of which this front-end will accessa nd display.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


## Version 1

Most of the basics have been implemented.


## The Next Step

The next iteration will include the following:
* A form to select which data to display in the graph
* A Date picker to select the range of which to view
* Statistics will be dispalyed in a more suitable fashion


## Future Improvements

Currently, this app is using static data. Live data will be provided by the database. this will be populated by a script that will collect readings twice a day and store them in the database.

Other Improvements:
* Tidy CSS / appearance
* Change into a reactive app suitable for any size of device (currently only displayed properly on medium to large devices)
* Enable user login so they can track their own city/place



## Built With

* React / Redux
* Webpack 2 / Babel
* ReCharts.js
* Materialize

# Planned
* Firebase database system
* node.js back-end script for collecting the data


## Authors

* **David Mills** - https://github.com/DavidNaMills/


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details