ng update 2>&1 | tee update-result.txt

if [[ $(head -n 12 ./update-result.txt) = *"We analyzed your package.json, there are some packages to update:"* ]];
then
  grep -E "^\s+[@/a-zA-Z0-9]+\s+.+->" update-result.txt | awk '{print $1}' | tee to-update.txt
  
  UPDATE_CMD=""
  for pkg in $(cat to-update.txt);
  do
    echo HERE I AM ${UPDATE_CMD} $pkg
    UPDATE_CMD="${UPDATE_CMD} $pkg"
  done
  
  ng update $UPDATE_CMD --verbose --force
fi