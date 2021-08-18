const MinCash = 5000
const IdealCash = 10000
let TodaysCash = 6500
let Expense = 3000

if (TodaysCash < MinCash) {
    console.log(`Save first until you hit ${MinCash} in the bank.`)
} else if (TodaysCash > MinCash && TodaysCash < IdealCash && Expense < (TodaysCash-MinCash)) {
    console.log('You should be good to go!')
}
