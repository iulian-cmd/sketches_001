### Quick-Start with npx
A simple way to use the tool is with npx which comes built-in to npm. 
Run it like this:

#### Make a new folder to hold all your generative sketches
mkdir sketches_001

#### Move into that folder
cd sketches_001

#### Scaffold a new sketch file and open the browser
npx canvas-sketch sketch-01.js --new --open

#### Install canvas-sketch-util for the libraries
npm install canvas-sketch-util --global --save

#### Create a folder for saved images from canvas
npx canvas-sketch sketch-01.js --output=media001/ --open
``` folder will appear only after first saving ```

##### Save history to file
```history > history.txt```


