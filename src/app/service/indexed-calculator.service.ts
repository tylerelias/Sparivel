export class IndexedService {
  // All variables coming in from the user-input
  private _principal: number = 0.0
  private _duration: number = 0
  private _interest: number = 0.0
  private _inflation: number = 0.0
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
  private _indexationList: number[] = [];
  private _inflationIndexList: number[] = [];
  // Monthly interest rates
  private _monthlyInterest = 0.0;
  private _monthlyInflation = 0.0;
  private _CPI = 100;

  constructor(principal: number, duration: number, interest: number, inflation: number, cost: number) {
    this._principal = principal;
    this._duration = duration;
    this._interest = interest / 100;
    this._inflation = inflation / 100;
    this._cost = cost;
    this._monthlyInterest = this._interest / 12
    this._monthlyInflation = Math.pow(1 + this._inflation, 1 / 12) - 1
  }

  public clearBuffer() {
    this._principalList = []
    this._monthlyPaymentList = []
    this._interestList = []
    this._paymentOfCapitalList = []
    this._step = []
    this._totalPaymentList = []
    this._annuityFactorList = []
    this._inflationIndexList = []
    this._indexationList = []
  }

  // @function: IndexedCalculation
  // calculates indexed loans and takes in
  // @param: amount if there will be advanced payments made into the loan
  public IndexedCalculation(amount: number = 0) {
    let originalPaymentsList: number[] = []
    if (amount !== 0) {
      this.IndexedCalculation()
      originalPaymentsList = this._totalPaymentList
      this.clearBuffer()
    }
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
    let inflationIndex: number = 0.0
    let indexation: number = 0

    for (let i = 1; i <= this._duration; i++) {
      if (i == 1) {
        inflationIndex = this._CPI + this._CPI * this._monthlyInflation
        annuityFactor =
            (1 / this._monthlyInterest) - 1 /
            (this._monthlyInterest * Math.pow(1 + this._monthlyInterest, this._duration))

        principal = this._principal * inflationIndex / this._CPI
        indexation = this._principal * this._monthlyInflation

      }
      else {
        inflationIndex += inflationIndex * this._monthlyInflation
        annuityFactor =
            (1 / this._monthlyInterest) - 1 /
            (this._monthlyInterest * Math.pow(1 + this._monthlyInterest, this._duration - (i - 1)))

        principal = (principal - capitalPayment) *
            (inflationIndex / this._inflationIndexList[i - 2])
        indexation = (this._principalList[i - 2] - this.paymentOfCapitalList[i - 2]) * this._monthlyInflation

        if (principal === 0) {
          break
        }
      }

      if (amount !== 0)
        payment = originalPaymentsList[i - 1] + amount
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
      this._indexationList.push(indexation)
      this._inflationIndexList.push(inflationIndex)
    }
  }


  public totalSavedFromExtraPayment(amount: number) {
    this.clearBuffer()

    this.IndexedCalculation()
    let normal: number = this.totalPayment
    this.clearBuffer()

    this.IndexedCalculation(amount)
    let extra = this.totalPayment

    return normal - extra
  }

  // General function that takes in arrays and sums them up
  private static totalCalculations(array: number[]) {
    let total:number = 0.0
    for (let i = 0; i < array.length; i++)
      total += array[i]

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
    return this._totalPaymentList[this._totalPaymentList.length - 1]
  }

  get totalPayment() {
    return IndexedService.totalCalculations(this._totalPaymentList)
  }

  get totalInterestPayment() {
    return IndexedService.totalCalculations(this._interestList)
  }

  get currentLength() {
    return this._step.length
  }

  get totalCapitalPayment() {
    return IndexedService.totalCalculations(this._paymentOfCapitalList)
  }

  get paymentOfCapitalList() {
    return this._paymentOfCapitalList
  }

  get totalPrincipalList() {
    return IndexedService.totalCalculations(this._principalList)
  }

  get principalList() {
    return this._principalList
  }

  get totalMonthlyPaymentList() {
    return IndexedService.totalCalculations(this._monthlyPaymentList)
  }

  get totalIndexationPayment() {
    return IndexedService.totalCalculations(this._indexationList)
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
    this._indexationList = [];
    this._inflationIndexList = [];
      // Monthly interest rates
    this._monthlyInflation = 0.0;
    this._CPI = 100;
    this.clearBuffer();
  }
}
