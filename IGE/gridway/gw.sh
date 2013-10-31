for i in `groups`; do

 if [ "$i" = 'gwusers' ]; then
  export GW_LOCATION=/usr
  export GLOBUS_LOCATION=/usr
  export PATH=$PATH:$GW_LOCATION/bin
 fi

done
