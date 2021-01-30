/*
Mr. Scrooge has a sum of money 'P' that wants to invest, 
and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, 
and the new sum is re-invested yearly after paying tax 'T' on the interests that were just gained (and only on the interests part).

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30

Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.
*/

function calculateYears(principal, interest, tax, desired) {
	let years = 0;

	while (principal < desired) {
		principal += principal * interest - principal * interest * tax;
		years++;
	}
	return years;
}
