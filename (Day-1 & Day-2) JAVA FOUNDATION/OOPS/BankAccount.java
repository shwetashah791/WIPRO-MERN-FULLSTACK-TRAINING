//Write a program for bank account to know the balance after depositing and withdrawing the amount and also having the loan account facility to calculate the emi and monthly emi's will be paid by customer using either by card or cash

    import java.util.Scanner;

// Base Class
class BaseClass {

    double balance = 0;

    public void amount() {
        System.out.println("Base Bank Account");
    }

    public void deposit(double amt) {
        balance = balance + amt;
        System.out.println("Deposited: " + amt);
    }

    public void withdraw(double amt) {
        if (amt <= balance) {
            balance = balance - amt;
            System.out.println("Withdrawn: " + amt);
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    public void showBalance() {
        System.out.println("Balance: " + balance);
    }
}

// Sub Class
class SubClass extends BaseClass {

    @Override
    public void amount() {
        super.amount();
        System.out.println("Loan Account Enabled");
    }

    public double calculateEMI(double loan, double rate, int months) {
        double monthlyRate = rate / 12 / 100;
        double emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                     (Math.pow(1 + monthlyRate, months) - 1);
        return emi;
    }

    public void payEMI(double emi, String mode) {
        if (mode.equalsIgnoreCase("card") || mode.equalsIgnoreCase("cash")) {
            System.out.println("EMI " + emi + " paid using " + mode);
        } else {
            System.out.println("Invalid Payment Mode");
        }
    }
}

// Main Class
public class BankAccount {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        SubClass acc = new SubClass();

        acc.amount();

        System.out.print("Enter deposit amount: ");
        acc.deposit(sc.nextDouble());

        System.out.print("Enter withdraw amount: ");
        acc.withdraw(sc.nextDouble());

        acc.showBalance();

        System.out.print("Enter loan amount: ");
        double loan = sc.nextDouble();

        System.out.print("Enter annual interest rate: ");
        double rate = sc.nextDouble();

        System.out.print("Enter loan tenure (months): ");
        int months = sc.nextInt();

        double emi = acc.calculateEMI(loan, rate, months);
        System.out.println("Monthly EMI: " + emi);

        System.out.print("Pay EMI using (card/cash): ");
        String mode = sc.next();

        acc.payEMI(emi, mode);

        sc.close();
    }
}
