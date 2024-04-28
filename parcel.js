class UserData {
  constructor(fullName, balance, smsCode) {
    this.fullName = fullName;
    this.balance = balance;
    this.smsCode = smsCode;
  }
  deductBalance(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
}

class ParcelData {
  constructor(id, price, receiveCode) {
    this.id = id;
    this.price = price;
    this.receiveCode = receiveCode;
  }
  updateParcelStatus(postamatCells, index) {
    postamatCells[index] = null;
  }
}

let john = new UserData("John Doe", 500, "A001DFX0");
let parcelOfJohn = new ParcelData("1432HGF", 100, "A001DFX0");

let postamatCells = ["A1234XF", "B5678YG", null, "1432HGF", "C91011ZH"];

function receiveParcel(user, parcel, postamatCells) {
  let found = false;
  if (user.smsCode === parcel.receiveCode) {
    for (let i = 0; i < postamatCells.length; i++) {
      if (postamatCells[i] === parcel.id) {
        found = true;
        if (user.deductBalance(parcel.price)) {
          parcel.updateParcelStatus(postamatCells, i);
          console.log(
            `Please pick up your package ${parcel.id} from locker number ${
              i + 1
            }. Your account balance is: ${user.balance}`
          );
        } else {
          console.log(
            `Insufficient funds: Need ${parcel.price}, only ${user.balance} available.`
          );
        }
        break;
      }
    }
    if (!found) {
      console.log(`Sorry, package ${parcel.id} was not found`);
    }
  } else {
    console.log("The code is not correct!");
  }
}

receiveParcel(john, parcelOfJohn, postamatCells);
