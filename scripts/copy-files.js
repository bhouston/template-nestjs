import fs from 'fs';
import path from 'path';
import process from 'process';

const copyFilesWithExtension = (srcDir, destDir, extension) => {
  // Ensure the paths are absolute
  const source = path.resolve(srcDir);
  const destination = path.resolve(destDir);

  // Recursive function to process each file/directory
  const processDirectory = (dir) => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent) => {
      const sourcePath = path.join(dir, dirent.name);
      const relativePath = path.relative(source, sourcePath);
      const destinationPath = path.join(destination, relativePath);

      if (dirent.isDirectory()) {
        // Create the directory in destination if it doesn't exist
        if (!fs.existsSync(destinationPath)) {
          fs.mkdirSync(destinationPath, { recursive: true });
        }
        processDirectory(sourcePath); // Recurse into directory
      } else if (dirent.name.endsWith(extension)) {
        // Copy file if it matches the extension
        fs.copyFileSync(sourcePath, destinationPath);
        //console.log(`Copied: ${sourcePath} -> ${destinationPath}`);
      }
    });
  };

  // Start processing from the source directory
  processDirectory(source);
};

const srcDir = path.join(process.cwd(), 'src');
const destDir = path.join(process.cwd(), 'dist');

//console.log({ srcDir, destDir });

// Run the function with the provided arguments
copyFilesWithExtension(srcDir, destDir, '.d.ts');
copyFilesWithExtension(srcDir, destDir, '.js');
