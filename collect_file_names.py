
#literally make my life so much easier with 4 lines of python 

import os
list = os.listdir("images")
for i in range(len(list)):
    print("theImages[" + str(i) + "] = 'images/" + list[i] + "';")