if test -z $1; then
  echo "Component name is required."
  exit;
fi;

COMPONENT_PREFIX="Baklava"
PLACEHOLDER_STRING="{{component}}"
COMPONENT_NAME="${COMPONENT_PREFIX}${1}"

TEMPLATE_PATH="./templates/$PLACEHOLDER_STRING"
COPY_PATH="./src/components/$COMPONENT_NAME"

mkdir ./src/components/$COMPONENT_NAME;
cp -r "${TEMPLATE_PATH}/." $COPY_PATH;
cd $COPY_PATH;

for fileName in *; do
  sed -i '' "s/${PLACEHOLDER_STRING}/${COMPONENT_NAME}/g" $fileName
  mv -v $fileName ${fileName//$PLACEHOLDER_STRING/$COMPONENT_NAME}
done
