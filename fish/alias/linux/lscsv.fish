#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function lscsv
	echo "inode,blocks,permission,link,user,group,size,modtime,filename"
	find $argv -type f -fprintf /dev/stdout "%i,%b,%M,%n,%u,%g,%s,%TY-%Tm-%Td %TH:%TM:%.2TS,%p\n"
end
