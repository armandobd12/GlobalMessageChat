Is needed
to server:{
{
"name": "server",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"dev": "nodemon index.js"
},
"author": "Armando",
"license": "ISC",
"dependencies": {
"cors": "^2.8.5",
"express": "^4.18.2",
"jsonwebtoken": "^9.0.0",
"mongoose": "^6.9.1",
"socket.io": "^4.6.0"
},
"devDependencies": {
"nodemon": "^2.0.20"
}
}

}
to client :{
{
"name": "client",
"version": "1.0.0",
"scripts": {
"ng": "ng",
"start": "ng serve",
"build": "ng build",
"watch": "ng build --watch --configuration development",
"test": "ng test"
},
"private": true,
"dependencies": {
"@angular/animations": "^15.1.0",
"@angular/cdk": "~15.1.2",
"@angular/common": "^15.1.0",
"@angular/compiler": "^15.1.0",
"@angular/core": "^15.1.0",
"@angular/forms": "^15.1.0",
"@angular/material": "~15.1.2",
"@angular/platform-browser": "^15.1.0",
"@angular/platform-browser-dynamic": "^15.1.0",
"@angular/router": "^15.1.0",
"@capacitor/angular": "^2.0.3",
"@capacitor/core": "latest",
"ng-zorro-antd": "^15.0.3",
"ngx-socket-io": "^4.4.0",
"rxjs": "~7.8.0",
"socket.io-client": "^4.6.0",
"tslib": "^2.3.0",
"zone.js": "~0.12.0"
},
"devDependencies": {
"@angular-devkit/build-angular": "^15.1.2",
"@angular/cli": "~15.1.2",
"@angular/compiler-cli": "^15.1.0",
"@capacitor/cli": "latest",
"@types/jasmine": "~4.3.0",
"jasmine-core": "~4.5.0",
"karma": "~6.4.0",
"karma-chrome-launcher": "~3.1.0",
"karma-coverage": "~2.2.0",
"karma-jasmine": "~5.1.0",
"karma-jasmine-html-reporter": "~2.0.0",
"typescript": "~4.9.4"
}
}

}