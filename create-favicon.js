const sharp = require('sharp');
const fs = require('fs');

async function createFavicon() {
  try {
    const inputBuffer = fs.readFileSync('public/images/favicon.png');

    // Create different sizes
    const sizes = [16, 32, 48];
    const buffers = await Promise.all(
      sizes.map(size =>
        sharp(inputBuffer)
          .resize(size, size)
          .toBuffer()
      )
    );

    // Combine buffers into ICO
    const icoBuffer = await sharp(buffers[0])
      .toFormat('ico')
      .toBuffer();

    // Write to file
    fs.writeFileSync('public/favicon.png', icoBuffer);
    console.log('Favicon created successfully!');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();
