TARGET=$1

cd $TARGET;

echo "🦧 Starting to create export statements for..."
echo 🦄 $TARGET

touch index.js
for folderName in $(ls -d */); do
  echo "🦍 Creating export statement for ${folderName}index.js..."
  echo "export * from './${folderName%%/*}';" >> index.js
done

echo "🐵 Returning to dist folder..."
cd -
