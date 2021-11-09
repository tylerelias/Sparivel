export class NonIndexedService {
  // All variables coming in from the user-input
  private _principal: number = 0.0
  private _duration: number = 0
  private _interest: number = 0.0
  private _cost: number = 0.0
  // All variables for calculations
  private _principalList: number[] = [];
  private _interestList: number[] = [];
  // payment = principal + interest
  private _monthlyPaymentList: number[] = [];
  private _paymentOfCapitalList: number[] = [];
  private _step: number[] = [];
  private _totalPaymentList: number[] = [];
  private _annuityFactorList: number[] = [];
  // Monthly interest rates
  private _monthlyInterest = 0.0

  constructor(principal: number, duration: number, interest: number, cost: number) {
    this._principal = principal;
    this._duration = duration;
    this._interest = interest / 100;
    this._cost = cost;
    this._monthlyInterest = this._interest / 12
  }

  public clearBuffer() {
    this._principalList = []
    this._monthlyPaymentList = []
    this._interestList = []
    this._paymentOfCapitalList = []
    this._step = []
    this._totalPaymentList = []
    this._annuityFactorList = []
  }

  // @function: NonIndexedCalculation
  // calculates non-indexed loans and takes in
  // @param: amount if there will be advanced payments made into the loan
  public NonIndexedCalculation(amount: number = 0) {
    // Annuity factor, necessary for index calculations
    let annuityFactor:number = 0.0
    // Calculated principal change per month
    let principal:number = 0.0
    // Monthly payment
    let payment:number = 0.0
    // How much of payment is payment of interests
    let interest:number = 0.0
    // How much of payment is payment of loan capital
    let capitalPayment:number = 0.0
    // Total payment, with monthly cost constant added
    let totalPayment:number = 0.0
    for (let i = 1; i <= this._duration; i++) {
      if (i == 1) {
        annuityFactor = (1 / this._monthlyInterest) -
            1 / (this._monthlyInterest * Math.pow(1 + this._monthlyInterest, this._duration))
        principal = this._principal
        if (amount !== 0)
          payment = (principal / annuityFactor) + amount
      }
      else {
        annuityFactor = (1 / this._monthlyInterest) -
            1 / (this._monthlyInterest * Math.pow(1 + this._monthlyInterest, this._duration - (i - 1)))
        principal = principal - capitalPayment
        if (principal === 0) {
          break
        }
      }

      if (amount === 0)
        payment = principal / annuityFactor

      interest = principal * this._monthlyInterest

      if (principal - payment < 0)
        payment = principal + interest

      capitalPayment = payment - interest
      totalPayment = payment + this._cost
      // Store value from each month for graphing and calculation purposes
      this._annuityFactorList.push(annuityFactor)
      this._principalList.push(principal)
      this._monthlyPaymentList.push(payment)
      this._interestList.push(interest)
      this._paymentOfCapitalList.push(capitalPayment)
      this._totalPaymentList.push(totalPayment)
      this._step.push(i)
    }
  }


  public totalSavedFromExtraPayment(amount: number) {
    this.clearBuffer()

    this.NonIndexedCalculation()
    let normal: number = this.totalPayment
    this.clearBuffer()

    this.NonIndexedCalculation(amount)
    let extra = this.totalPayment

    return normal - extra
  }

  // General function that takes in arrays and sums them up
  private totalCalculations(array: number[]) {
    let total: number = 0.0
    for (let i = 0; i < array.length; i++)
      total += array[i]

    this.clearBuffer()
    return total
  }

  // Getters & Setters
  get firstMonthlyPayment() {
    if (this._totalPaymentList.length === 0)
      throw Error('List cannot be empty')

    return this._totalPaymentList[0]
  }

  get averageMonthlyPayment() {
    if (this._totalPaymentList.length === 0)
      return [];
      // throw Error('List cannot be empty')

    let length: number = this._totalPaymentList.length
    let sum: number = this.totalPayment
    return sum / length
  }

  get lastMonthlyPayment() {
    if (this._totalPaymentList.length < 2)
      throw Error('List cannot have less than two items')
    return this._totalPaymentList[this._totalPaymentList.length - 2]
  }

  get totalPayment() {
    return this.totalCalculations(this._totalPaymentList)
  }

  get totalInterestPayment() {
    return this.totalCalculations(this._interestList)
  }

  get currentLength() {
    return this._step.length
  }

  get totalCapitalPayment() {
    return this.totalCalculations(this._paymentOfCapitalList)
  }

  get paymentOfCapitalList() {
    return this._paymentOfCapitalList
  }

  get totalPrincipalList() {
    return this.totalCalculations(this._principalList)
  }

  get principalList() {
    return this._principalList
  }

  get totalMonthlyPaymentList() {
    return this.totalCalculations(this._monthlyPaymentList)
  }

  get monthlyPaymentList() {
    return this._monthlyPaymentList
  }

  get principal() {
    return this._principal;
  }

  set principal(value: number) {
    if (value < 0)
      throw new Error('Value cannot be less than 0');
    this._principal = value
  }

  get duration() {
    return this._duration;
  }

  set duration(value: number) {
    if (value < 0)
      throw new Error('Value cannot be less than 0');
    this._duration = value
  }

  get interest() {
    return this._interest;
  }

  set interest(value: number) {
    if (value < 0)
      throw new Error('Value cannot be less than 0');
    this._interest = value
  }

  get cost() {
    return this._cost;
  }

  set cost(value: number) {
    if (value < 0)
      throw new Error('Value cannot be less than 0');
    this._cost = value
  }

  public reset() {
    // All variables for calculations
    this._principalList = [];
    this._interestList = [];
    // payment = principal + interest
    this._monthlyPaymentList = [];
    this._paymentOfCapitalList = [];
    this._step = [];
    this._totalPaymentList = [];
    this._annuityFactorList = [];
    // Monthly interest rates
    this._monthlyInterest = 0.0
    this.clearBuffer();
  }
}
