# print_test
Files Hierarchy:
•	Public
o	Index.html
•	Src
o	Index.js (the html running).
o	Button.js (where need to implement the print logic).
o	receipt.txt – sample html receipt text.
•	Package.json / wepack.config.js
 
To run the app you need to run 2 commands on the folder where the app is you can do it by VisualCode.
npm install – first time to install the packages.
npm start – to run the app, it will open the app on URL: http://localhost:3006/ , (stop the app in visual code you click Ctrl+C).
 
Button.js file is the file need to be changed and connect the native app.
There is print method (triggered by the print button on the screen) where need to send print command to the native app (I added TODO where need to send the request to the native app).
 
htmlReceipt – the property that hold the receipt.
Print method:
1.	Fetch the receipt html text
2.	Console html text to log    send command with the html text to the native app and print in the device.
 
