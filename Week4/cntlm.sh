#!/bin/bash

ps -ef | grep cntlm

# Output:
	# root      2545     1  0 09:20 ?        00:00:00 cntlm -c /etc/cntlm.conf
	# eaauser   3197  3050  0 10:23 pts/1    00:00:00 /bin/bash ./cntlm.sh
	# eaauser   3199  3197  0 10:23 pts/1    00:00:00 grep cntlm

