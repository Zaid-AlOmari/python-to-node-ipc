import os
import sys
print('PYTHON HERE')

try:

  os.write(3, '{"dt" : "This is a test"}\n')
  os.write(3, '{"dt" : "This is a test"}\n')
  os.write(3, '{"dt" : "This is a test"}\n')
  os.write(3, '{"dt" : "This is a test"}\n')
  # os.write(3, '{"dt" : "' + sys.stdin.readline().strip('\n') +'"}\n')

except Exception as e:
  print(e)
print('PYTHON HERE TOO')
