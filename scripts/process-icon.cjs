
const { Jimp } = require('jimp');
const pngToIco = require('png-to-ico').default;
const fs = require('fs');

async function processIcon() {
  try {
    console.log('Reading icon...');
    const image = await Jimp.read('public/icon.png');
    
    console.log('Resizing to square...');
    // Create a new square image with transparent background
    const size = Math.max(image.bitmap.width, image.bitmap.height);
    const square = new Jimp({ width: size, height: size, color: 0x00000000 });
    
    // Composite the original image onto the center of the square
    const x = (size - image.bitmap.width) / 2;
    const y = (size - image.bitmap.height) / 2;
    square.composite(image, x, y);
    
    // Resize to standard icon size (256x256) for ICO
    const icoSquare = square.clone().resize({ w: 256, h: 256 });
    
    console.log('Saving temp PNG for ICO...');
    await icoSquare.write('build/temp_icon.png');
    
    console.log('Converting to ICO...');
    const buffer = await pngToIco('build/temp_icon.png');
    fs.writeFileSync('build/icon.ico', buffer);
    fs.unlinkSync('build/temp_icon.png');

    // Save high-res PNG for macOS (1024x1024)
    console.log('Saving high-res PNG for macOS...');
    square.resize({ w: 1024, h: 1024 });
    await square.write('build/icon.png');
    
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

processIcon();
