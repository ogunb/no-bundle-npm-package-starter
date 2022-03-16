SOURCE_FOLDER="src"
DIST_FOLDER="lib"

echo "🧹 Cleaning /$DIST_FOLDER folder..."
rm -rf $DIST_FOLDER
mkdir $DIST_FOLDER

echo "🦜 Copying everything from /$SOURCE_FOLDER to /$DIST_FOLDER..."
cp -r $SOURCE_FOLDER/* $DIST_FOLDER

autoExportFolders="/components /utils /filters /plugins"
for folder in $autoExportFolders; do
  ./exportAllFrom.sh $DIST_FOLDER$folder
  echo "export * from '.${folder}/index.js';" >> $DIST_FOLDER/index.js
done
