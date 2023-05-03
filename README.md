# CDS Test problem replication

FIXED!!!
The work around is a simple --exit flag on the mocha command.(see this thread for details: https://answers.sap.com/questions/13875495/cap-node-js-mocha-test-not-returning-to-prompt-whe.html) 

## To reproduce the problem
1. Clone this repo
2. npm install
3. npm test
==> The terminal does not return to the commmand prompt.  It hangs.

## To see the problem go away
1. rename one of the test cases from t1_test.js to t1_test.bak
2. npm test
==> The terminal returns to the command prompt as expected.

## Hardware/Software Versions tested on
- CDS 6.7.2
- Node 18.16.0 (but also had the problem when I was on 16.x)
- I am running on a MAC M1 Pro, but in a bash shell.


## Activities done to get to this place.
These are the steps I took to create the project
1. cds init
2. cds add samples
3. Changed package.json 
    1. 'type' to 'module'
    2. mocha and chai to devDependencies
    3. addes eslint dependencies
    3. added "test" script
4. Changed .eslintrc to match my project
5. npm install
6. added 2 test cases to test/cases directory


