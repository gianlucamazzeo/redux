console.clear();
 // People dropping off a form (Action Creators)

const createPolicy = (name,amount) => {
  
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {  // Action (a form in our analogy)
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
  
}


// Reducers (Departments!)
const claimsHistory = (oldListOfClaims = [], action) => {
  
    if(action.type === 'CREATE_CLAIM') {
      //  we care about this action (FORM!) 
      oldListOfClaims.push(action.payload)
      return [...oldListOfClaims,action.payload];
    }
  
  // we don't care the action (form!!)
  return oldListOfClaims; 
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};