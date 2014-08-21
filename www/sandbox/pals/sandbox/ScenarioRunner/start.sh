#!/bin/bash
#FranckeJones way of doing shit
#start sever and run any other things from here... don't make readmes

echo "press Control-C to shut down server"
open http://localhost:9500
python -m SimpleHTTPServer 9500
